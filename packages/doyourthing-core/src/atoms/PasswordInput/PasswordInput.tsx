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
						"text-dark-he placeholder:text-dark-le dark:text-light-he dark:placeholder:text-light-le w-full border-none bg-transparent py-2 pl-3 pr-0 ring-0 focus:border-none focus:ring-0",
						className
					)}
					{...props}
				/>
				<button
					type="button"
					onClick={toggle}
					className="text-dark-me hover:text-dark-he dark:text-light-me dark:hover:text-light-he p-2.5 transition"
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
