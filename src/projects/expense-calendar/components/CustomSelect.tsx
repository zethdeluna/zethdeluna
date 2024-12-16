import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
import { useCallback, type JSX } from 'react';
import { SelectOption } from "./ExpenseFormPopup";

interface CustomSelectProps {
	label: string;
	name: string;
	options: SelectOption[];
	value: SelectOption;
	onChange: (option: SelectOption) => void;
	dropdownOpen: string;
	setDropdownOpen: (value: string) => void;
}

const DROPDOWN_STATES = {
	OPEN: 'active',
	CLOSED: ''
} as const;

const CustomSelect: React.FC<CustomSelectProps> = ({
	label,
	name,
	options,
	value,
	onChange,
	dropdownOpen,
	setDropdownOpen
}) => {

	const toggleDropdown = useCallback((): void => {
		setDropdownOpen(dropdownOpen === DROPDOWN_STATES.CLOSED
			? DROPDOWN_STATES.OPEN
			: DROPDOWN_STATES.CLOSED
		);
	}, [dropdownOpen, setDropdownOpen]);

	const handleOptionClick = useCallback(( option: SelectOption ): void => {
		onChange(option);
		toggleDropdown();
	}, [onChange, toggleDropdown]);

	const renderLabel = (): JSX.Element => (
		<label htmlFor={name} className={clsx( styles['eyebrow'], styles['small'] )}>{label}</label>
	);

	const renderSelectButton = (): JSX.Element => (
		<button
			type="button"
			className={clsx( styles['btn'], styles['select'], styles['small'] )}
			onClick={toggleDropdown}
			aria-label={`Select ${label.toLowerCase()}`}
			aria-expanded={dropdownOpen === DROPDOWN_STATES.OPEN}
		>
			{value?.label || 'Select an option'}
		</button>
	);

	const renderOptions = (): JSX.Element => (
		<ul
			className={clsx( styles['options'], styles['small'] )}
			role="listbox"
			aria-label={`${label} options`}
		>
			{
				options?.map((option) => (
					<li key={option.value} role="option" aria-selected={option.value === value.value}>
						<button
							type="button"
							className={clsx( styles['btn'], styles['small'] )}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</button>
					</li>
				))
			}
		</ul>
	);

	return (
		<div className={clsx( styles['custom-select'], dropdownOpen === DROPDOWN_STATES.OPEN && styles[DROPDOWN_STATES.OPEN] )}>
			{renderLabel()}
			{renderSelectButton()}
			{renderOptions()}
		</div>
	);
}

export default CustomSelect;