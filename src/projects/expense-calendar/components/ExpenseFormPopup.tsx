import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { useState, useEffect, useCallback, type JSX } from "react";
import CustomSelect from "./CustomSelect";
import { Expense, ExpenseGroups, PopupPosition, AccountType, FrequencyType } from "./Calendar";
import { CalendarDay } from "./CalendarDays";

export interface SelectOption<T = string> {
	value: T;
	label: string;
}

interface ExpenseFormPopupProps {
	day: CalendarDay;
	dayID: string;
	closeActiveForms: () => void;
	addExpense: (dayID: string, expense: Omit<Expense, 'originalId'>) => void;
	expenseGroups?: ExpenseGroups;
	isActive: boolean;
	position: PopupPosition | null;
}

interface DropdownStates {
	accountType: AccountType | '';
	frequency: FrequencyType | '';
}

const INITIAL_DROPDOWN_STATES: DropdownStates = {
	accountType: '',
	frequency: ''
};

const ACCOUNT_OPTIONS: SelectOption<AccountType>[] = [
	{ value: 'expense', label: 'Expense' },
	{ value: 'income', label: 'Income' }
];

const FREQUENCY_OPTIONS: SelectOption<FrequencyType>[] = [
	{ value: 'one-time', label: 'One-time' },
	{ value: 'weekly', label: 'Weekly' },
	{ value: 'bi-weekly', label: 'Bi-weekly' },
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'annually', label: 'Annually' }
];

const ExpenseFormPopup: React.FC<ExpenseFormPopupProps> = ({
	day,
    dayID,
    closeActiveForms,
    addExpense,
    expenseGroups,
    isActive,
    position
}) => {
	const [inputNumValue, setInputNumValue] = useState<string>('');
	const [inputDescValue, setInputDescValue] = useState<string>('');
	const [dropdownStates, setDropdownStates] = useState<DropdownStates>(INITIAL_DROPDOWN_STATES);
	const [accountType, setAccountType] = useState<SelectOption>(ACCOUNT_OPTIONS[0]);
	const [frequency, setFrequency] = useState<SelectOption>(FREQUENCY_OPTIONS[3]);

	const inputNumID = `amount-${dayID}`;
	const inputDescID = `description-${dayID}`;

	useEffect(() => {
		if ( expenseGroups && dayID in expenseGroups ) {
			setInputNumValue(expenseGroups[dayID][0].amount.toString());
		}
	}, [expenseGroups, dayID]);

	const handleDropdownStates = useCallback(( selectName: keyof DropdownStates, value: string ): void => {
		setDropdownStates(prev => ({
			...prev,
			[selectName]: value
		}));
	}, []);

	/**
	 * Reset form fields to empty
	 */
	const resetForm = useCallback((): void => {

		setInputNumValue('');
		setInputDescValue('');
		setDropdownStates(INITIAL_DROPDOWN_STATES);
		setAccountType(ACCOUNT_OPTIONS[0]);
		closeActiveForms();

	}, [closeActiveForms]);

	/**
	 * Submit handler
	 */
	const handleSubmit = useCallback(( e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const amount = parseFloat( inputNumValue );
		if ( amount === 0 || isNaN(amount) ) return;

		addExpense(dayID, {
			id: crypto.randomUUID(),
			amount,
			description: inputDescValue,
			account_type: accountType.value as AccountType,
			frequency: frequency.value as FrequencyType,
			date: day.date,
			day
		});

		resetForm();

	}, [addExpense, accountType, day, dayID, frequency, inputDescValue, inputNumValue, resetForm]);

	/**
	 * Render functions
	 */
	const renderFormHeader = (): JSX.Element => (
		<>
			<h4 className={styles['eyebrow']}>{day.monthString} {day.number}</h4>
			
			<button
				className={clsx( styles['btn'], styles['close'] )}
				onClick={closeActiveForms}
				aria-label="Close form"
			>
				<span className={styles['accessibility']}>Close</span>
				<span className={styles['icon']}></span>
			</button>
		</>
	);

	const renderFormControls = (): JSX.Element => (
		<>
			<div className={styles['form-row']}>
				<CustomSelect
					label="Account Type"
					name="account-type"
					options={ACCOUNT_OPTIONS}
					value={accountType}
					onChange={setAccountType}
					dropdownOpen={dropdownStates.accountType}
					setDropdownOpen={(value) => handleDropdownStates('accountType', value)}
				/>
			</div>

			<div className={styles['form-row']}>
				<CustomSelect
					label="Frequency"
					name="frequency"
					options={FREQUENCY_OPTIONS}
					value={frequency}
					onChange={setFrequency}
					dropdownOpen={dropdownStates.frequency}
					setDropdownOpen={(value) => handleDropdownStates('frequency', value)}
				/>
			</div>

			<div className={clsx( styles['form-row'], styles['dollar-amount'] )}>
				<label htmlFor={inputNumID} className={clsx( styles['eyebrow'], styles['small'] )}>Amount</label>
				<input
					className={styles['small']}
					type="number"
					id={inputNumID}
					value={inputNumValue}
					step=".01"
					min="0"
					// required
					onChange={(e) => setInputNumValue(e.target.value)}
				/>
			</div>

			<div className={styles['form-row']}>
				<label htmlFor={inputDescID} className={clsx( styles['eyebrow'], styles['small'] )}>Description</label>
				<input
					className={styles['small']}
					type="text"
					id={inputDescID}
					placeholder="Description"
					value={inputDescValue}
					onChange={(e) => setInputDescValue(e.target.value)}
				/>
			</div>
		</>
	);

	return (
		<div
			id={styles[dayID]}
			className={clsx( styles['popup'], styles['expense-form-popup'], isActive && styles['active'] )}
			data-group={dayID}
			style={position ? {
				left: position.left_position,
				top: position.top_position
			} : {}}
		>
			{renderFormHeader()}

			<form className={styles['expense-form']} onSubmit={handleSubmit}>
				{renderFormControls()}
				<button className={clsx( styles['btn'], styles['small'], styles['submit'] )} type="submit">Add</button>
			</form>
		</div>
	);

}

export default ExpenseFormPopup;