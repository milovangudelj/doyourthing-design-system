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
					"w-full border-none bg-transparent py-2 px-3 text-dark-he ring-0 placeholder:text-dark-le focus:border-none focus:ring-0 dark:text-light-he dark:placeholder:text-light-le",
					className
				)}
				{...props}
			/>
		);
	}
);

export default TextInput;
