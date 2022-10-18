import { ComponentPropsWithoutRef, forwardRef } from "react";
import cn from "classnames";

export interface EmailInputProps extends ComponentPropsWithoutRef<"input"> {
	type?: "email";
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
	(
		{
			type = "email",
			name = "email",
			id = name,
			placeholder = "hello@world.test",
			className,
			...props
		},
		ref
	) => {
		return (
			<input
				ref={ref}
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				className={cn(
					"text-dark-he placeholder:text-dark-le dark:text-light-he dark:placeholder:text-light-le w-full border-none bg-transparent py-2 px-3 ring-0 focus:border-none focus:ring-0",
					className
				)}
				{...props}
			/>
		);
	}
);

export default EmailInput;
