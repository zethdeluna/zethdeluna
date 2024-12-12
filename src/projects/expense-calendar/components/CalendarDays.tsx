import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { useRef, useState, useCallback, useEffect } from "react";
import { Expense, ExpenseGroups, PopupPosition } from './Calendar';
import ExpenseFormPopup from "./ExpenseFormPopup";
import Description from "./Description";

export interface CalendarDay {
	currentMonth: boolean;
	date: Date;
	month: number;
	number: number;
	isToday: boolean;
	year: number;
	monthString?: string;
}

// interface OpenDescription {
// 	dayID: string;
// 	expenseIndex: number;
// }

interface CalendarDayProps {
	selectedDay: Date;
	handleActiveForm: (dayID: string) => void;
	closeActiveForms: () => void;
	addExpense: (dayID: string, expense: Expense) => void;
	removeExpense: (groupKey: string, itemId: string) => void;
	expenseGroups: ExpenseGroups;
	activeForm: string | null;
	popupPosition: PopupPosition;
	setPopupPosition: (position: PopupPosition) => void;
}

const CalendarDays: React.FC<CalendarDayProps> = ({
	selectedDay,
	handleActiveForm,
	closeActiveForms,
	addExpense,
	removeExpense,
	expenseGroups,
	activeForm,
	popupPosition,
	setPopupPosition
}) => {
	const daysRef = useRef<HTMLDivElement | null>(null);
	const buttonRefsMap = useRef<Map<string, HTMLButtonElement>>(new Map());
	const [openDescription, setOpenDescription] = useState<{ dayID: string; expenseIndex: number; } | null>(null);

	const today = new Date();
	const firstDayOfMonth = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
	const weekdayOfFirstDay = firstDayOfMonth.getDay();
	const currentDays: CalendarDay[] = [];

	// build the days of the calendar
	for ( let day = 0; day < 42; day++ ) {

		if ( day === 0 && weekdayOfFirstDay === 0 ) {
			firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
		} else if ( day === 0 ) {
			firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
		} else {
			firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
		}

		const calendarDay: CalendarDay = {
			currentMonth: (firstDayOfMonth.getMonth() === selectedDay.getMonth()),
			date: new Date(firstDayOfMonth),
			month: firstDayOfMonth.getMonth(),
			number: firstDayOfMonth.getDate(),
			isToday: (firstDayOfMonth.getMonth() === today.getMonth() && firstDayOfMonth.toDateString() === today.toDateString()),
			year: firstDayOfMonth.getFullYear()
		};

		currentDays.push(calendarDay);

	}

	// handle expense description popups
	const toggleDescription = ( dayID: string, expenseIndex: number ): void => {
		closeActiveForms();

		setOpenDescription(prevState =>
			prevState && prevState.dayID === dayID && prevState.expenseIndex === expenseIndex
				? null
				: { dayID, expenseIndex }
		);
	};

	// open popup to add a new expense
	const acitveFormHandler = useCallback((dayID: string): void => {

		setOpenDescription(null);
		handleActiveForm(dayID);

	}, [handleActiveForm]);

	// get popup position, adjust if it's off screen
	const calculatePopupPosition = ( popup: Element ): { left_position: string; top_position: string; } => {
		let left_position = '';
		let top_position = '';

		const rect = popup.getBoundingClientRect();
		let left = rect.left - ( (popup as HTMLElement).offsetWidth * 0.1 );
		let right = rect.right + ( (popup as HTMLElement).offsetWidth * 0.1 );

		if ( left <= 0 ) {
			left += (left * -2) + 40;
			left_position = `calc(50% + ${left}px)`;
		} else if ( right >= window.innerWidth ) {
			let rightOffset = right - window.innerWidth + 40;
			left_position = `calc(50% - ${rightOffset}px)`;
		}

		let bottom = rect.bottom + ( (popup as HTMLElement).offsetHeight * 0.2 );
		let difference = bottom - window.innerHeight + 20;
		if ( difference > 0 ) {
			top_position = `calc(50% - ${difference}px)`;
		} else if ( difference <= 0 && difference > -40 ) {
			top_position = `calc(50% - ${difference}px)`;
		}

		return { left_position, top_position };
	};

	// effect for handling form popup position
	useEffect(() => {
		if ( activeForm && daysRef.current ) {

			const dayElement = daysRef.current.querySelector(`#${activeForm}`);
			if ( dayElement ) {

				const popup = dayElement.querySelector('.expense-form-popup');
				if ( popup ) {

					const position = calculatePopupPosition(popup);
					setPopupPosition(position);

				}

			}

		}
	}, [activeForm]);

	// effect for handling description popup position
	useEffect(() => {
		if ( openDescription && daysRef.current ) {

			const dayElement = daysRef.current.querySelector(`#${openDescription.dayID}`);
			if ( dayElement ) {

				const popup = dayElement.querySelector('.description');
				if ( popup ) {

					const position = calculatePopupPosition(popup);
					setPopupPosition(position);

				}

			}

		}
	}, [openDescription]);

	return (
		<div className={styles['days']} ref={daysRef}>
			{
				currentDays.map(day => {
					day.monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(day.date);
					const dayID = `${day.monthString}-${day.number}-${day.year}`;
					const dayExpenses = expenseGroups[dayID] || [];

					return (
						<div
							id={dayID}
							className={clsx(
								styles['calendar-day'],
								day.currentMonth && styles['current-month'],
								day.isToday && styles['today']
							)}
							data-date={day.date.toString()}
							key={dayID}
						>
							<span className={styles['eyebrow']}>{day.number}</span>

							<div
								className={styles['add-expense']}
								role="button"
								onClick={() => acitveFormHandler(dayID)}
								tabIndex={0}
							>
								<span className="accessibility">Add Expense</span>
							</div>

							<ExpenseFormPopup
								day={day}
								dayID={dayID}
								closeActiveForms={closeActiveForms}
								addExpense={addExpense}
								isActive={activeForm === dayID}
								position={activeForm === dayID ? popupPosition : null}
							/>

							{dayExpenses.length > 0 && (
								dayExpenses.map((expense, index) => (
									<div key={index} className={styles['expense-item']}>
										<button
											className={clsx(
												styles['btn'],
												styles['amount'],
												styles['eyebrow'],
												styles[expense.account_type]
											)}
											onClick={() => toggleDescription(dayID, index)}
										>
											{expense.account_type === 'expense' ? '-' : '+'}${expense.amount.toFixed(2)}
										</button>

										<Description
											expense={expense}
											dayID={dayID}
											index={index}
											openDescription={openDescription}
											toggleDescription={toggleDescription}
											buttonRefsMap={buttonRefsMap}
											removeExpense={removeExpense}
											position={
												openDescription &&
												openDescription.dayID === dayID &&
												openDescription.expenseIndex === index
													? popupPosition
													: null
											}
										/>
									</div>
								))
							)}

						</div>
					);
				})
			}
		</div>
	);
}

export default CalendarDays;