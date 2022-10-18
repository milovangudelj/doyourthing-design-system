import { ComponentPropsWithoutRef, forwardRef } from "react";
import cn from "classnames";

export interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
	type?: "text";
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	(
		{
			type = "text",
			name = "text",
			id = name,
			placeholder = "More text",
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

export default TextInput;
