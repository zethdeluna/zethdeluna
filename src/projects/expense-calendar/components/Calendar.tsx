import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { useState, useCallback, useEffect } from "react";
import CalendarDays from "./CalendarDays";
import { CalendarDay } from "./CalendarDays";

export type AccountType = 'expense' | 'income';
export type FrequencyType = 'one-time' | 'weekly' | 'bi-weekly' | 'monthly' | 'annually';

export interface Expense {
	id: string;
	originalId?: string;
	amount: number;
	account_type: AccountType;
	date: Date;
	frequency: FrequencyType
	description?: string;
	day: CalendarDay
}

export interface ExpenseGroups {
	[dayId: string]: Expense[];
}

export interface PopupPosition {
	left_position?: string;
	top_position?: string;
}

export interface DescriptionState {
	dayID: string;
	expenseIndex: number;
}

const WEEKDAYS = [
	['Sunday', 'Sun'],
	['Monday', 'Mon'],
	['Tuesday', 'Tues'],
	['Wednesday', 'Wed'],
	['Thursday', 'Thurs'],
	['Friday', 'Fri'],
	['Saturday', 'Sat']
] as const;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;
const RECURRING_INSTANCES = 12;

const INITIAL_POPUP_POSITION: PopupPosition = {
	left_position: '50%',
	top_position: '50%'
};

const Calendar = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [expenseGroups, setExpenseGroups] = useState<ExpenseGroups>(() => {
		const savedExpenses = localStorage.getItem('expenseGroups');
		return savedExpenses ? JSON.parse(savedExpenses) : {};
	});
	const [activeForm, setActiveForm] = useState<string | null>(null);
	const [popupPosition, setPopupPosition] = useState<PopupPosition>(INITIAL_POPUP_POSITION);

	/**
	 * Persist expenseGroups to localStorage
	 */
	useEffect(() => {
		localStorage.setItem('expenseGroups', JSON.stringify(expenseGroups));
	}, [expenseGroups]);

	/**
	 * Generate unique IDs for each day
	 */
	const generateDayId = (date: Date): string => {
		let month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
		return `${month}-${date.getDate()}-${date.getFullYear()}`;
	}

	/**
	 * Generate multiple instances of a recurring expense across different dates
	 */
	const generateRecurringExpenses = ( baseDate: Date, expense: Expense) => {

		const recurringExpenses: Array<{ dayID: string; expense: Expense }> = [];

		const addExpenseInstance = ( date: Date ) => {
			recurringExpenses.push({
				dayID: generateDayId(date),
				expense: {
					...expense,
					id: `${expense.id}-${date.getTime()}`,
					originalId: expense.id,
					date
				}
			});
		};

		// add initial instance
		addExpenseInstance(baseDate);

		const generateDateForFrequency = ( date: Date, offset: number, isPast: boolean ): Date => {
			const newDate = new Date(date);
			const multiplier = isPast ? -1 : 1;

			switch ( expense.frequency ) {
				case 'annually':
					newDate.setMonth( date.getMonth() + (offset * 12 * multiplier) );
					break;
				case 'monthly':
					newDate.setMonth( date.getMonth() + (offset * multiplier) );
					break;
				case 'bi-weekly':
					newDate.setDate( date.getDate() + (offset * 14 * multiplier) );
					break;
				case 'weekly':
					newDate.setDate( date.getDate() + (offset * 7 * multiplier) );
					break;
			}

			return newDate;
		};

		// generate past and future instances
		for ( let i = 1; i <= RECURRING_INSTANCES; i++ ) {

			addExpenseInstance( generateDateForFrequency(baseDate, i, true) );
			addExpenseInstance( generateDateForFrequency(baseDate, i, false) );

		}

		return recurringExpenses;

	};

	/**
	 * Close expense forms that are open
	 */
	const closeActiveForms = useCallback((): void => {
		setActiveForm(null);
		setPopupPosition(INITIAL_POPUP_POSITION);
	}, []);

	/**
	 * Open form when a day is clicked
	 */
	const handleActiveForm = useCallback((dayID: string): void => {
		setActiveForm(dayID);
	}, []);

	/**
	 * Change current month using arrow buttons
	 */
	const adjacentMonthHandler = ( direction: 'previous' | 'next' ): void => {
		closeActiveForms();

		setDate(currentDate => {
			if ( direction === 'previous' ) {
				return new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
			} else {
				return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
			}
		});
	};

	/**
	 * Add expense data to expenseGroups
	 */
	const addExpense = useCallback(( dayID: string, newItem: Expense ): void => {

		setExpenseGroups(currentExpenses => {
			const updatedExpenses = { ...currentExpenses };
			const baseDate = new Date(newItem.date);

			if ( newItem.frequency === 'one-time' ) {
				updatedExpenses[dayID] = [...(updatedExpenses[dayID] || []), newItem];
				return updatedExpenses;
			}

			const recurringExpenses = generateRecurringExpenses(baseDate, newItem);
			recurringExpenses.forEach(( { dayID: recurringDayId, expense } ) => {
				if ( !updatedExpenses[recurringDayId] ) {
					updatedExpenses[recurringDayId] = [];
				}
				updatedExpenses[recurringDayId].push(expense);
			});
			return updatedExpenses;
		});

	}, [generateRecurringExpenses]);

	/**
	 * Remove expense data from expenseGroups
	 */
	const removeExpense = useCallback(( groupKey: string, itemToRemove: string ): void => {

		setExpenseGroups(currentExpenses => {
			const updatedExpenses = { ...currentExpenses };
			const group = updatedExpenses[groupKey];
			const expenseToRemove = group?.find(item => item.id === itemToRemove);

			if ( !expenseToRemove ) return updatedExpenses;

			if ( expenseToRemove.frequency === 'one-time' ) {
				updatedExpenses[groupKey] = group.filter(item => item.id !== itemToRemove);
				if ( updatedExpenses[groupKey].length === 0 ) {
					delete updatedExpenses[groupKey];
				}
				return updatedExpenses;
			}

			// remove all instances of recurring expense
			const originalId = expenseToRemove.originalId || expenseToRemove.id;
			Object.keys( updatedExpenses ).forEach(dayID => {
				updatedExpenses[dayID] = updatedExpenses[dayID].filter(
					item => !(item.originalId === originalId || item.id === originalId)
				);

				if ( updatedExpenses[dayID].length === 0 ) {
					delete updatedExpenses[dayID];
				}

			});

			return updatedExpenses;
		});

	}, []);

	return (
		<section className={clsx( 'project-container', styles['expense-calendar'] )}>
			
			<div className={styles['calendar-hero']}>
				<div className={styles['container']}>

					<h1 className={clsx( styles['title'], styles['heading-4'] )}>
						Expense Calendar
					</h1>

				</div>
			</div>

			<div className={styles['calendar']}>
				<div className={styles['container']}>
					<div className={styles['calendar-header']}>

						<div className={styles['adjacent-months-picker']}>
							<button
								className={clsx( styles['btn'], styles['prev'] )}
								onClick={() => adjacentMonthHandler('previous')}
								aria-label="Previous Month"
							>
								<span className={styles['accessibility']}>Previous Month</span>
							</button>
							<button
								className={clsx( styles['btn'], styles['next'] )}
								onClick={() => adjacentMonthHandler('next')}
								aria-label="Next Month"
							>
								<span className={styles['accessibility']}>Next Month</span>
							</button>
						</div>

						<div className={styles['calendar-title']}>
							<span className={styles['eyebrow']}>{date.getFullYear()}</span>
							<h2 className={styles['heading-6']}>{MONTHS[date.getMonth()]}</h2>
						</div>

					</div>

					<div className={styles['calendar-body']}>
						<div className={styles['day-header']}>
							{
								WEEKDAYS.map(weekday => (
									<div className={styles['weekday']} key={weekday[0]}>
										<span className={clsx( styles['eyebrow'], styles['long'] )}>{weekday[0]}</span>
										<span className={clsx( styles['eyebrow'], styles['short'] )}>{weekday[1]}</span>
									</div>
								))
							}
						</div>

						<CalendarDays
							selectedDay={date}
							handleActiveForm={handleActiveForm}
							closeActiveForms={closeActiveForms}
							addExpense={addExpense}
							removeExpense={removeExpense}
							expenseGroups={expenseGroups}
							activeForm={activeForm}
							popupPosition={popupPosition}
							setPopupPosition={setPopupPosition}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Calendar;