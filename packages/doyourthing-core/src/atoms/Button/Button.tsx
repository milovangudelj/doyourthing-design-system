import {
	ReactNode,
	forwardRef,
	ComponentPropsWithoutRef,
	ComponentProps,
	ElementType,
} from "react";
import cn from "classnames";
import { Icon } from "phosphor-react";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "primary" | "accent" | "red" | "blue" | "zinc";

interface Props extends ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
	fullWidth?: boolean;
	rightIcon?: ReactNode | Icon | any;
	leftIcon?: ReactNode | Icon | any;
	children: ReactNode;
}

const base = {
	enabled: (darker: boolean) => {
		return {
			filled: {
				background: darker
					? "bg-skin-700 hover:bg-skin-600 active:bg-skin-800"
					: "bg-skin-500 hover:bg-skin-400 active:bg-skin-600",
				border: darker
					? "border-skin-700 hover:border-skin-600 active:border-skin-800"
					: "border-skin-500 hover:border-skin-400 active:border-skin-600",
				text: "text-white",
			},
			outlined: {
				background: darker
					? "bg-transparent hover:bg-skin-700/5 active:bg-skin-700/10"
					: "bg-transparent hover:bg-skin-500/5 active:bg-skin-500/10",
				border: darker ? "border-skin-700" : "border-skin-500",
				text: darker ? "text-skin-700" : "text-skin-500",
			},
			text: {
				background: darker
					? "bg-transparent hover:bg-skin-700/5 active:bg-skin-700/10"
					: "bg-transparent hover:bg-skin-500/5 active:bg-skin-500/10",
				border: "border-transparent",
				text: darker ? "text-skin-700" : "text-skin-500",
			},
		};
	},
	disabled: (darker: boolean) => {
		return {
			filled: {
				background: darker ? "bg-skin-500" : "bg-skin-300",
				border: darker ? "bg-skin-500" : "border-skin-300",
				text: "text-white",
			},
			outlined: {
				background: "bg-transparent",
				border: darker ? "bg-skin-500" : "border-skin-300",
				text: darker ? "bg-skin-500" : "text-skin-300",
			},
			text: {
				background: "bg-transparent",
				border: "border-transparent",
				text: darker ? "bg-skin-500" : "text-skin-300",
			},
		};
	},
};

const colors: { [Key in ButtonColor]: string } = {
	primary: "",
	accent: "theme-accent",
	blue: "theme-blue",
	red: "theme-red",
	zinc: "theme-zinc",
};

const sizes = {
	btn: {
		sm: "py-1 px-1.5",
		md: "py-1.5 px-2",
		lg: "py-2 px-2.5",
	},
	text: {
		sm: "px-1 text-sm leading-4",
		md: "px-1 text-base leading-5",
		lg: "px-1.5 text-lg leading-6",
	},
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			variant = "filled",
			size = "lg",
			color = "primary",
			fullWidth = false,
			leftIcon,
			rightIcon,
			disabled = false,
			className,
			children,
			...props
		},
		ref
	) => {
		const LIcon = leftIcon as ElementType;
		const RIcon = rightIcon as ElementType;

		return (
			<button
				ref={ref}
				className={cn(
					sizes.btn[size],
					base[disabled ? "disabled" : "enabled"](color === "zinc")[
						variant
					].background,
					base[disabled ? "disabled" : "enabled"](color === "zinc")[
						variant
					].border,
					base[disabled ? "disabled" : "enabled"](color === "zinc")[
						variant
					].text,
					colors[color],
					"flex h-min items-center justify-center rounded border-2 font-medium transition",
					{ "w-full": fullWidth },
					className
				)}
				{...props}
			>
				{leftIcon && (
					<LIcon
						width={20}
						height={20}
						weight="bold"
						className="h-5 w-5"
					/>
				)}
				<span className={cn(sizes.text[size])}>{children}</span>
				{rightIcon && (
					<RIcon
						width={20}
						height={20}
						weight="bold"
						className="h-5 w-5"
					/>
				)}
			</button>
		);
	}
);

export type ButtonProps = ComponentProps<typeof Button>;
