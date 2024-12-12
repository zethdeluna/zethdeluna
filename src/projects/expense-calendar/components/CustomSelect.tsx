import styles from '../ExpenseCalendar.module.css';
import clsx from 'clsx';
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

const CustomSelect: React.FC<CustomSelectProps> = ({
	label,
	name,
	options,
	value,
	onChange,
	dropdownOpen,
	setDropdownOpen
}) => {

	const toggleDropdown = (): void => {
		if ( dropdownOpen === '' ) {
			setDropdownOpen('active');
		} else {
			setDropdownOpen('');
		}
	};

	const handleClick = (option: SelectOption): void => {
		onChange(option);
		toggleDropdown();
	};

	return (
		<div
			className={clsx(
				styles['custom-select'],
				dropdownOpen === 'active' && styles[dropdownOpen]
			)}
		>
			<label
				htmlFor={name}
				className={clsx(
					styles['eyebrow'],
					styles['small']
				)}
			>
				{label}
			</label>
			<button
				type="button"
				className={clsx(
					styles['btn'],
					styles['select'],
					styles['small']
				)}
				onClick={toggleDropdown}
			>
				{value ? value.label : 'Select an option'}
			</button>
			<ul
				className={clsx(
					styles['options'],
					styles['small']
				)}
			>
				{options?.map((option) => (
					<li key={option.value}>
						<button
							type="button"
							className={clsx(
								styles['btn'],
								styles['small']
							)}
							onClick={() => handleClick(option)}
						>
							{option.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CustomSelect;