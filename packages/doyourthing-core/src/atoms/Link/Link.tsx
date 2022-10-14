import { ComponentPropsWithoutRef, forwardRef } from "react";
import cn from "classnames";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
	styled?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({ styled = true, className, children, ...props }, ref) => {
		return (
			<a
				ref={ref}
				className={cn(
					{
						"text-primary-500 underline transition hover:text-primary-400 active:text-primary-600":
							styled,
					},
					className
				)}
				{...props}
			>
				{children}
			</a>
		);
	}
);
