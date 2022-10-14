import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { Eye, EyeClosed } from "phosphor-react";
import cn from "classnames";

export interface PasswordInputProps extends ComponentPropsWithoutRef<"input"> {
	type?: "password";
	show?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	(
		{
			type = "password",
			name = "password",
			id = name,
			placeholder = "••••••••",
			show = false,
			className,
			...props
		},
		ref
	) => {
		const [visible, setVisible] = useState(show);

		const toggle = () => {
			setVisible((current) => !current);
		};

		return (
			<>
				<input
					ref={ref}
					type={visible ? "text" : type}
					name={name}
					id={id}
					placeholder={placeholder}
					className={cn(
						"w-full border-none bg-transparent py-2 pl-3 pr-0 text-dark-he ring-0 placeholder:text-dark-le focus:border-none focus:ring-0 dark:text-light-he dark:placeholder:text-light-le",
						className
					)}
					{...props}
				/>
				<button
					type="button"
					onClick={toggle}
					className="p-2.5 text-dark-me transition hover:text-dark-he dark:text-light-me dark:hover:text-light-he"
				>
					{visible ? (
						<Eye className="h-5 w-5" />
					) : (
						<EyeClosed className="h-5 w-5" />
					)}
				</button>
			</>
		);
	}
);

export default PasswordInput;
