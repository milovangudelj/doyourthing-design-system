import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from "react";
import cn from "classnames";

interface DividerProps extends ComponentPropsWithoutRef<"div"> {
	fullWidth?: boolean;
}

export const AuthDivider = forwardRef<HTMLDivElement, DividerProps>(
	({ fullWidth = true, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"my-8 flex items-center",
					{ "w-full": fullWidth },
					className
				)}
				{...props}
			>
				<div className="h-px w-full bg-zinc-300 dark:bg-zinc-700"></div>
				<span className="text-dark-le dark:text-light-le mx-2 inline-block flex-none text-sm">
					or
				</span>
				<div className="h-px w-full bg-zinc-300 dark:bg-zinc-700"></div>
			</div>
		);
	}
);

export type AuthDividerProps = ComponentProps<typeof AuthDivider>;
