import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { Expense, PopupPosition } from "./Calendar";

interface OpenDescription {
	dayID: string;
	expenseIndex: number;
}

interface DescriptionProps {
	expense: Expense;
	dayID: string;
	index: number;
	openDescription: OpenDescription | null;
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
	return (
		<div
			id={`${styles['description']}-${dayID}`}
			// className={`popup description ${openDescription &&
			// 	openDescription.dayID === dayID &&
			// 	openDescription.expenseIndex === index ? 'active' : ''
			// }`}
			className={clsx(
				styles['popup'],
				styles['description'],
				openDescription &&
				openDescription.dayID === dayID &&
				openDescription.expenseIndex === index && styles['active']

			)}
			style={position ? {
				left: position.left_position,
				top: position.top_position
			} : {}}
		>
			<button
				type="button"
				className={clsx(
					styles['btn'],
					styles['close']
				)}
				aria-label="Close description"
				tabIndex={0}
				onClick={() => toggleDescription(dayID, index)}
				ref={(el) => {
					if ( el ) buttonRefsMap.current?.set(`${dayID}-${index}`, el);
				}}
			>
				<span className={styles['accessibility']}>Close description</span>
				<span className={styles['icon']}></span>
			</button>

			<h4 className={styles['eyebrow']}>{expense.day.monthString} {expense.day.number}</h4>
			<h5 className={styles['heading-5']} data-account-type={expense.account_type}>
				{expense.account_type === 'expense' ? '-' : '+'}${expense.amount}
			</h5>
			<p className={styles['small']}>{expense.description}</p>

			<button
				type="button"
				className={clsx(
					styles['btn'],
					styles['delete']
				)}
				aria-label="Delete expense"
				tabIndex={0}
				onClick={() => {
					removeExpense(dayID, expense.id);
					toggleDescription(dayID, index);
				}}
			>
				Delete
			</button>
		</div>
	);
}

export default Description;