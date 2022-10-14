import { Icon } from "phosphor-react";
import cn from "classnames";
import {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementType,
	forwardRef,
	ReactNode,
} from "react";
import { ButtonColor, ButtonSize, ButtonVariant } from "../Button";

interface Props extends ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	color?: ButtonColor;
	fullWidth?: boolean;
	icon: ReactNode | Icon | any;
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
	sm: "p-1",
	md: "p-1.5",
	lg: "p-2",
};

export const IconButton = forwardRef<HTMLButtonElement, Props>(
	(
		{
			variant = "filled",
			size = "lg",
			color = "primary",
			fullWidth = false,
			disabled = false,
			icon,
			className,
			...props
		},
		ref
	) => {
		const ButtonIcon = icon as ElementType;

		return (
			<button
				{...props}
				className={cn(
					sizes[size],
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
				ref={ref}
			>
				<ButtonIcon
					width={size === "sm" ? 16 : 20}
					height={size === "sm" ? 16 : 20}
					className={size === "sm" ? "h-4 w-4" : "h-5 w-5"}
				/>
			</button>
		);
	}
);

export type IconButtonProps = ComponentProps<typeof IconButton>;
