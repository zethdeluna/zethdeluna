import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { useCallback, type JSX } from 'react';
import { Expense, PopupPosition, DescriptionState } from "./Calendar";

interface DescriptionProps {
	expense: Expense;
	dayID: string;
	index: number;
	openDescription: DescriptionState | null;
	toggleDescription: (dayID: string, index: number) => void;
	buttonRefsMap: React.RefObject<Map <string, HTMLButtonElement> >;
	removeExpense: (dayID: string, expenseId: string) => void;
	position: PopupPosition | null;
}

const Description: React.FC<DescriptionProps> = ({
	expense,
	dayID,
	index,
	openDescription,
	toggleDescription,
	buttonRefsMap,
	removeExpense,
	position
}) => {

	const isActive = 
		openDescription
		&& openDescription.dayID === dayID
		&& openDescription.expenseIndex === index
	;

	const handleDelete = useCallback((): void => {
		removeExpense(dayID, expense.id);
		toggleDescription(dayID, index);
	}, [dayID, expense.id, index, removeExpense, toggleDescription]);

	const handleClose = useCallback((): void => {
		toggleDescription(dayID, index);
	}, [dayID, index, toggleDescription]);

	const setButtonRef = useCallback((el: HTMLButtonElement| null): void => {
		if ( el ) {
			buttonRefsMap.current?.set(`${dayID}-${index}`, el);
		}
	}, [buttonRefsMap, dayID, index]);

	/**
	 * Render functions
	 */
	const renderCloseButton = (): JSX.Element => (
		<button
			type="button"
			className={clsx( styles['btn'], styles['close'] )}
			aria-label="Close description"
			onClick={handleClose}
			ref={setButtonRef}
		>
			<span className={styles['accessibility']}>Close description</span>
			<span className={styles['icon']}></span>
		</button>
	);

	const renderExpenseDetails = (): JSX.Element => (
		<>
			<h4 className={styles['eyebrow']}>{expense.day.monthString} {expense.day.number}</h4>
			<h5 className={styles['heading-5']} data-account-type={expense.account_type}>
				{expense.account_type === 'expense' ? '-' : '+'}${expense.amount}
			</h5>
			<p className={styles['small']}>{expense.description}</p>
		</>
	);

	const renderDeleteButton = (): JSX.Element => (
		<button
			type="button"
			className={clsx( styles['btn'], styles['delete'] )}
			aria-label="Delete expense"
			onClick={handleDelete}
		>
			Delete
		</button>
	);

	return (
		<div
			id={`${styles['description']}-${dayID}`}
			className={clsx( styles['popup'], styles['description'], isActive && styles['active'] )}
			style={position ? {
				left: position.left_position,
				top: position.top_position
			} : {}}
		>
			{renderCloseButton()}
			{renderExpenseDetails()}
			{renderDeleteButton()}
		</div>
	);
}

export default Description;