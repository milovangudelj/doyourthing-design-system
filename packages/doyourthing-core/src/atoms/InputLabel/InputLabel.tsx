import cn from "classnames";

interface FormLabelProps {
	htmlFor?: string;
	label?: string;
	className?: string;
}

export const InputLabel = ({
	htmlFor = "email",
	label = "Email",
	className,
}: FormLabelProps) => {
	return (
		<label
			htmlFor={htmlFor}
			className={cn(
				"font-medium text-dark-he dark:text-light-he",
				className
			)}
		>
			{label}
		</label>
	);
};
