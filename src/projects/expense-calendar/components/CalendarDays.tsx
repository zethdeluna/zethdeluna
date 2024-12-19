import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import React, { useRef, useState, useCallback, useEffect, type JSX } from "react";
import { Expense, ExpenseGroups, PopupPosition, DescriptionState } from './Calendar';
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
	const [openDescription, setOpenDescription] = useState< DescriptionState | null>(null);

	/**
	 * Build calendar
	 */
	const generateCalendarDays = useCallback((): CalendarDay[] => {

		const today = new Date();
		const firstDayOfMonth = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
		const weekdayOfFirstDay = firstDayOfMonth.getDay();
		const currentDays: CalendarDay[] = [];

		// adjust starting date if needed
		if ( weekdayOfFirstDay === 0 ) {
			firstDayOfMonth.setDate( firstDayOfMonth.getDate() - 7 );
		} else {
			firstDayOfMonth.setDate( firstDayOfMonth.getDate() - weekdayOfFirstDay );
		}

		// generate 42 days (6 weeks)
		for ( let day = 0; day < 42; day++ ) {

			if ( day > 0 ) {
				firstDayOfMonth.setDate( firstDayOfMonth.getDate() + 1 );
			}

			currentDays.push({
				currentMonth: firstDayOfMonth.getMonth() === selectedDay.getMonth(),
				date: new Date(firstDayOfMonth),
				month: firstDayOfMonth.getMonth(),
				number: firstDayOfMonth.getDate(),
				isToday: firstDayOfMonth.toDateString() === today.toDateString(),
				year: firstDayOfMonth.getFullYear()
			});

		}

		return currentDays;

	}, [selectedDay]);

	/**
	 * Handle expense description popups
	 */
	const toggleDescription = useCallback(( dayID: string, expenseIndex: number ): void => {
		closeActiveForms();

		setOpenDescription(prevState =>
			prevState?.dayID === dayID && prevState.expenseIndex === expenseIndex
				? null
				: { dayID, expenseIndex }
		);
	}, [closeActiveForms]);

	/**
	 * Open popup to add a new expense
	 */
	const activeFormHandler = useCallback((dayID: string): void => {

		setOpenDescription(null);
		handleActiveForm(dayID);

	}, [handleActiveForm]);

	/**
	 * Get popup position, adjust if it's off screen
	 */
	const calculatePopupPosition = useCallback(( popup: Element ): PopupPosition => {

		const rect = popup.getBoundingClientRect();
		const popupElement = popup as HTMLElement;
		let left_position = '';
		let top_position = '';

		// calculate horizontal position
		const left = rect.left - (popupElement.offsetWidth * 0.1);
		const right = rect.right + (popupElement.offsetWidth * 0.1);

		if ( left <= 0 ) {
			const leftOffset = (left * -2) + 40;
			left_position = `calc(50% + ${leftOffset}px)`;
		} else if ( right >= window.innerWidth ) {
			const rightOffset = right - window.innerWidth + 40;
			left_position = `calc(50% - ${rightOffset}px)`;
		}

		// calculate vertical position
		const bottom = rect.bottom + (popupElement.offsetHeight * 0.2);
		const top = rect.top - (popupElement.offsetHeight * 0.2);
		
		const bottomOffset = bottom - window.innerHeight + 20;
		const topOffset = top;
		if ( bottomOffset > -40 ) {
			top_position = `calc(50% - ${bottomOffset}px)`;	
		} else if ( topOffset < 40 ) {
			top_position = `calc(50% + ${Math.abs(topOffset)}px)`;
		}

		return { left_position, top_position };

	}, []);

	/**
	 * Handle popup positioning
	 */
	const updatePopupPosition = useCallback(( elementId: string, popupClassName: string ): void => {

		if ( !daysRef.current ) return;

		const dayElement = daysRef.current.querySelector(`#${elementId}`);
		if ( !dayElement ) return;

		const popup = dayElement.querySelector(`.${styles[popupClassName]}`);
		if ( popup ) {
			const position = calculatePopupPosition(popup);
			setPopupPosition(position);
		}

	}, [calculatePopupPosition, setPopupPosition]);

	// effect for form popup position
	useEffect(() => {
		if ( activeForm ) {
			updatePopupPosition(activeForm, 'expense-form-popup');
		}
	}, [activeForm, updatePopupPosition]);

	// effect for description popup position
	useEffect(() => {
		if ( openDescription ) {
			updatePopupPosition(openDescription.dayID, 'description');
		}
	}, [openDescription, updatePopupPosition]);

	/**
	 * Render functions
	 */
	const renderExpenseItem = useCallback(( expense: Expense, index: number, dayID: string ): JSX.Element => (

		<div key={index} className={styles['expense-item']}>

			<button
				className={clsx( styles['btn'], styles['amount'], styles['eyebrow'], styles[expense.account_type] )}
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
					openDescription?.dayID === dayID && openDescription.expenseIndex === index
						? popupPosition
						: null
				}
			/>

		</div>

	), [openDescription, popupPosition, removeExpense, toggleDescription]);

	const renderCalendarDay = useCallback(( day: CalendarDay ): JSX.Element => {

		const dayID = `${day.monthString}-${day.number}-${day.year}`;
		const dayExpenses = expenseGroups[dayID] || [];

		return (
			<div
				id={dayID}
				className={clsx( styles['calendar-day'], day.currentMonth && styles['current-month'], day.isToday && styles['today'] )}
				data-date={day.date.toString()}
				key={dayID}
			>

				<span className={styles['eyebrow']}>{day.number}</span>

				<div className={styles['add-expense']} role="button" onClick={() => activeFormHandler(dayID)} tabIndex={0}>
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

				{
					dayExpenses.map((expense, index) =>
						renderExpenseItem(expense, index, dayID)
					)
				}

			</div>
		);

	}, [activeForm, addExpense, closeActiveForms, expenseGroups, handleActiveForm, popupPosition, renderExpenseItem]);

	const calendarDays = generateCalendarDays();

	return (
		<div className={styles['days']} ref={daysRef}>
			{
				calendarDays.map(day => {
					day.monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(day.date);
					return renderCalendarDay(day);
				})
			}
		</div>
	);
}

export default CalendarDays;