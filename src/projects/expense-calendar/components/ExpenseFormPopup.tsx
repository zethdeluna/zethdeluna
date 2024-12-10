import { useState, useEffect } from "react";
import CustomSelect from "./CustomSelect";
import { Expense, ExpenseGroups, PopupPosition } from "./Calendar";
import { CalendarDay } from "./CalendarDays";

export interface SelectOption {
	value: string;
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
	accountType: string;
	frequency: string;
}

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
	const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
		accountType: '',
		frequency: ''
	});
	const [accountType, setAccountType] = useState<SelectOption>({ value: 'expense', label: 'Expense' });
	const [frequency, setFrequency] = useState<SelectOption>({ value: 'monthly', label: 'Monthly' });

	const inputNumID = `amount-${dayID}`;
	const inputDescID = `description-${dayID}`;

	const accountOptions: SelectOption[] = [
		{ value: 'expense', label: 'Expense' },
		{ value: 'income', label: 'Income' }
	];

	const frequencyOptions: SelectOption[] = [
        { value: 'one-time', label: 'One-time' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'bi-weekly', label: 'Bi-weekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'annually', label: 'Annually' }
    ];

	useEffect(() => {
		if ( expenseGroups && dayID in expenseGroups ) {
			setInputNumValue(expenseGroups[dayID][0].amount.toString());
		}
	}, [expenseGroups, dayID]);

	const handleDropdownStates = (selectName: keyof DropdownStates, value: string): void => {
		setDropdownStates(prev => ({
			...prev,
			[selectName]: value
		}));
	};

	const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ): void => {
		e.preventDefault();

		if ( parseFloat(inputNumValue) === 0 ) return;

		addExpense(dayID, {
			id: crypto.randomUUID(),
			amount: parseFloat(inputNumValue),
			description: inputDescValue,
			account_type: accountType.value as 'expense' | 'income',
			frequency: frequency.value as 'one-time' | 'weekly' | 'bi-weekly' | 'monthly' | 'annually',
			date: day.date,
			day: day
		});

		// reset form
		setInputNumValue('');
		setInputDescValue('');
		setDropdownStates({
			accountType: '',
			frequency: ''
		});
		setAccountType(accountOptions[0]);
		closeActiveForms();
	};

	return (
		<div
			id={dayID}
			className={`popup expense-form-popup ${isActive ? 'active' : ''}`}
			data-group={dayID}
			style={position ? {
				left: position.left_position,
				top: position.top_position
			} : {}}
		>
			<h4 className="eyebrow">{day.monthString} {day.number}</h4>
			<button className="btn close" onClick={closeActiveForms}>
				<span className="accessibility">Close</span>
				<span className="icon"></span>
			</button>

			<form className="expense-form" onSubmit={handleSubmit}>
				<div className="form-row">
					<CustomSelect
						label="Account Type"
						name="account-type"
						options={accountOptions}
						value={accountType}
						onChange={setAccountType}
						dropdownOpen={dropdownStates.accountType}
						setDropdownOpen={(value) => handleDropdownStates('accountType', value)}
					/>
				</div>

				<div className="form-row">
                    <CustomSelect
                        label="Frequency"
                        name="frequency"
                        options={frequencyOptions}
                        value={frequency}
                        onChange={setFrequency}
                        dropdownOpen={dropdownStates.frequency}
                        setDropdownOpen={(value) => handleDropdownStates('frequency', value)}
                    />
                </div>

				<div className="form-row dollar-amount">
                    <label htmlFor={inputNumID} className="eyebrow small">Amount</label>
                    <input
                        className="small"
                        type="number"
                        id={inputNumID}
                        value={inputNumValue}
                        step=".01"
                        onChange={(e) => setInputNumValue(e.target.value)}
                    />
                </div>

				<div className="form-row">
                    <label htmlFor={inputDescID} className="eyebrow small">Description</label>
                    <input 
                        className="small"
                        type="text"
                        id={inputDescID}
                        placeholder="Description"
                        value={inputDescValue}
                        onChange={(e) => setInputDescValue(e.target.value)}
                    />
                </div>

				<button className="btn small submit">Add</button>
			</form>
		</div>
	);
}

export default ExpenseFormPopup;