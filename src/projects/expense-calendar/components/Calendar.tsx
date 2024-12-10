import { useState, useCallback, useEffect } from "react";
import CalendarDays from "./CalendarDays";
import { CalendarDay } from "./CalendarDays";

export interface Expense {
	id: string;
	originalId?: string;
	amount: number;
	account_type: 'expense' | 'income';
	date: Date;
	frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly' | 'annually';
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

const Calendar = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [expenseGroups, setExpenseGroups] = useState<ExpenseGroups>(() => {
		const savedExpenses = localStorage.getItem('expenseGroups');
		return savedExpenses ? JSON.parse(savedExpenses) : {};
	});
	const [activeForm, setActiveForm] = useState<string | null>(null);
	const [popupPosition, setPopupPosition] = useState<PopupPosition>({});

	const weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// store expenseGroups in localStorage
	useEffect(() => {
		localStorage.setItem('expenseGroups', JSON.stringify(expenseGroups));
	}, [expenseGroups]);

	const generateDayId = (date: Date): string => {
		let month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
		return `${month}-${date.getDate()}-${date.getFullYear()}`;
	}

	// generate multiple instances of a recurring expense across different dates
	const generateRecurringExpenses = (baseDate: Date, expense: Expense): { dayID: string; expense: Expense  }[] => {
		const recurringExpenses: { dayID: string; expense: Expense }[] = [];

		recurringExpenses.push({
			dayID: generateDayId(baseDate),
			expense: {
				...expense,
				id: `${expense.id}-${baseDate.getTime()}`,
				originalId: expense.id,
				date: baseDate
			}
		});

		// generate past instances
		for ( let i = 1; i <= 12; i++ ) {
			const pastDate = new Date(baseDate);
			switch (expense.frequency) {
				case 'annually':
					pastDate.setMonth(baseDate.getMonth() - (i * 12));
					break;
				case 'monthly':
					pastDate.setMonth(baseDate.getMonth() - i);
					break;
				case 'bi-weekly':
					pastDate.setDate(baseDate.getDate() - (i * 14));
					break;
				case 'weekly':
					pastDate.setDate(baseDate.getDate() - (i * 7));
					break;
				default:
					break;
			}

			const pastExpense: Expense = {
				...expense,
				id: `${expense.id}-${pastDate.getTime()}`,
				originalId: expense.id,
				date: pastDate
			}

			recurringExpenses.push({
				dayID: generateDayId(pastDate),
				expense: pastExpense
			});
		}

		// generate future instances
		for ( let i = 1; i <= 12; i++ ) {
			const futureDate = new Date(baseDate);
			switch (expense.frequency) {
				case 'annually':
					futureDate.setMonth(baseDate.getMonth() + (i * 12));
					break;
				case 'monthly':
					futureDate.setMonth(baseDate.getMonth() + i);
					break;
				case 'bi-weekly':
					futureDate.setDate(baseDate.getDate() + (i * 14));
					break;
				case 'weekly':
					futureDate.setDate(baseDate.getDate() + (i * 7));
					break;
				default:
					break;
			}

			const futureExpense: Expense = {
				...expense,
				id: `${expense.id}-${futureDate.getTime()}`,
				originalId: expense.id,
				date: futureDate
			}

			recurringExpenses.push({
				dayID: generateDayId(futureDate),
				expense: futureExpense
			});
		}

		return recurringExpenses;

	};

	// close expense forms that are open
	const closeActiveForms = (): void => {
		setActiveForm(null);
		setPopupPosition({
			left_position: '50%',
			top_position: '50%'
		});
	};

	// open form when a day is clicked
	const handleActiveForm = ( dayID: string ): void => {
		setActiveForm(dayID);
	}

	// change current month using arrow buttons
	const adjacentMonthHandler = ( event: 'previous' | 'next' ): void => {
		closeActiveForms();

		let thisDate = date;

		if ( event === 'previous' ) {
			// move to previous month

			thisDate.setDate(0); // sets date to last day of previous month
			thisDate.setDate(1);// sets date to first day of new current month

			setDate( new Date(thisDate.getFullYear(), thisDate.getMonth(), 1) );
		} else {
			// move to next month

			if ( thisDate.getMonth() === 11 ) {
				setDate( new Date(thisDate.getFullYear() + 1, 0, 1) );
			} else {
				setDate( new Date(thisDate.getFullYear(), thisDate.getMonth() + 1, 1) );
			}
		}
	};

	// Add expense data to expenseGroups
	const addExpense = useCallback((dayID: string, newItem: Expense): void => {

		setExpenseGroups(currentExpenses => {
			const updatedExpenses = { ...currentExpenses };
			const baseDate = new Date(newItem.date);

			if ( newItem.frequency !== 'one-time' ) {
				// If it's a recurring expense, add recurring instances

				const recurringExpenses = generateRecurringExpenses( baseDate, newItem );

				recurringExpenses.forEach(({dayID: recurringDayId, expense}) => {
					if ( !updatedExpenses[recurringDayId] ) {
						updatedExpenses[recurringDayId] = [];
					}
					updatedExpenses[recurringDayId].push(expense);
				});
			} else {
				// For non-recurring expenses, just add the single expense

				updatedExpenses[dayID] = [...(updatedExpenses[dayID] || []), newItem];
			}

			return updatedExpenses;
		});

	}, []);

	// Remove expense data from expenseGroups
	const removeExpense = useCallback((groupKey: string, itemToRemove: string): void => {

		setExpenseGroups(currentExpenses => {
			const updatedExpenses = { ...currentExpenses };

			// Find the original expense to check if it's recurring
			const group = updatedExpenses[groupKey];
			const expenseToRemove = group?.find(item => item.id === itemToRemove);

			// exit if the expense to remove isn't found
			if (!expenseToRemove) return updatedExpenses;

			if ( expenseToRemove.frequency !== 'one-time' )  {

				// Remove all instances of this recurring expense
				const originalId = expenseToRemove.originalId || expenseToRemove.id;
				Object.keys(updatedExpenses).forEach(dayID => {
					updatedExpenses[dayID] = updatedExpenses[dayID].filter(
						item => !(item.originalId === originalId || item.id === originalId)
					);

					// Clean up empty groups
					if ( updatedExpenses[dayID].length === 0 ) {
						delete updatedExpenses[dayID];
					}
				});

			} else {
				// Remove singular expense

				updatedExpenses[groupKey] = group.filter(item => item.id !== itemToRemove);
				if ( updatedExpenses[groupKey].length === 0 ) {
					delete updatedExpenses[groupKey];
				}
			}

			return updatedExpenses;
		});

	}, []);

	return (
		<div className="calendar">
			<div className="container">
				<div className="calendar-header">

					<div className="adjacent-months-picker">
						<button
							className="btn prev"
							onClick={() => adjacentMonthHandler('previous')}
							tabIndex={0}
							aria-label="Previous Month"
						>
							<span className="accessibility">Previous Month</span>
						</button>
						<button
							className="btn next"
							onClick={() => adjacentMonthHandler('next')}
							tabIndex={0}
							aria-label="Previous Month"
						>
							<span className="accessibility">Next Month</span>
						</button>
					</div>

					<div className="calendar-title">
						<span className="eyebrow">{date.getFullYear()}</span>
						<h2 className="heading-6">{months[date.getMonth()]}</h2>
					</div>

				</div>

				<div className="calendar-body">
					<div className="day-header">
						{
							weekdays.map(weekday => (
								<div className="weekday" key={weekday}>
									<span className="eyebrow">{weekday}</span>
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
	);
}

export default Calendar;