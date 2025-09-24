import * as React from "react";
import { FormProvider, useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  const methods = useFormContext();
  return (
    <form {...props} className={cn("space-y-6", props.className)}>
      {children}
    </form>
  );
}

export function FormProviderWrapper({ children, ...props }: { children: React.ReactNode }) {
  const methods = useFormContext();
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function FormField({ name, control, render }: any) {
  return <Controller name={name} control={control} render={render} />;
}

export function FormItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

export function FormLabel({ children, className, ...props }: any) {
  return (
    <label className={cn("block text-sm font-medium text-foreground", className)} {...props}>
      {children}
    </label>
  );
}

export function FormControl({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function FormDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-xs text-muted-foreground", className)}>{children}</p>;
}

export function FormMessage({ children, className }: { children?: React.ReactNode; className?: string }) {
  if (!children) return null;
  return <p className={cn("text-xs text-destructive", className)}>{children}</p>;
}
