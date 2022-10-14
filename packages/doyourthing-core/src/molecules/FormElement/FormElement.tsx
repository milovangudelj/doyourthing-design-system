import { default as NextLink } from "next/link";
import { forwardRef } from "react";
import { FormInput, FormInputProps, InputLabel, Link } from "../../atoms";

type FormElementType = "email" | "password" | "text";

type FormElementProps = {
	label?: string;
	forgettable?: boolean;
} & FormInputProps;

const types: {
	[Key in FormElementType]: {
		name: string;
		label: string;
	};
} = {
	email: {
		label: "Email",
		name: "email",
	},
	password: {
		label: "Password",
		name: "password",
	},
	text: {
		label: "Text",
		name: "text",
	},
};

export const FormElement = forwardRef<HTMLInputElement, FormElementProps>(
	({ type, label, forgettable = false, ...props }, ref) => {
		return (
			<div className="flex w-full flex-col space-y-2">
				<div className="flex justify-between">
					<InputLabel
						htmlFor={props?.name ?? types[type].name}
						label={label ?? types[type].label}
					/>
					{type === "password" && forgettable && (
						<NextLink href="/forgot-password" passHref>
							<Link>Forgot password?</Link>
						</NextLink>
					)}
				</div>
				<FormInput type={type} {...props} ref={ref} />
			</div>
		);
	}
);
