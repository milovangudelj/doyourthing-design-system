import React, { forwardRef, Suspense } from "react";

import { EmailInputProps, PasswordInputProps, TextInputProps } from "../";

import { EmailInput } from "../";
const TextInput = React.lazy(() => import("../TextInput/TextInput"));
const PasswordInput = React.lazy(
	() => import("../PasswordInput/PasswordInput")
);

type TypeMap = {
	email: EmailInputProps;
	password: PasswordInputProps;
	text: TextInputProps;
};

type GenerateCombos<T> = {
	[K in keyof T]: {
		type: K;
	} & T[K];
}[keyof T];

export type FormInputProps = GenerateCombos<TypeMap>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	({ type, ...props }, ref) => {
		const element: {
			[K in keyof TypeMap]: JSX.Element;
		} = {
			email: <EmailInput {...props} ref={ref} />,
			password: <PasswordInput {...props} ref={ref} />,
			text: <TextInput {...props} ref={ref} />,
		};

		return (
			<div className="form-input flex w-full items-center rounded border-zinc-300 bg-transparent p-0 transition focus-within:border-primary-500 focus-within:bg-zinc-800 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 hover:bg-zinc-800 dark:border-zinc-600 focus-within:dark:border-primary-400 focus-within:dark:ring-primary-400">
				<Suspense fallback={<EmailInput />}>{element[type]}</Suspense>
			</div>
		);
	}
);
