import * as React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={cn("space-y-6", props.className)}>
      {children}
    </form>
  );
}

import { useFormContext, FormProvider as RHFFormProvider } from "react-hook-form";
export function FormProviderWrapper({ children }: { children: React.ReactNode }) {
  const methods = useFormContext();
  return <RHFFormProvider {...methods}>{children}</RHFFormProvider>;
}

import { Control, FieldValues, Path, ControllerRenderProps } from "react-hook-form";
import { ReactElement } from "react";
export interface FormFieldProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  render: (props: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: import("react-hook-form").ControllerFieldState;
    formState: import("react-hook-form").FormState<T>;
  }) => ReactElement;
}
export function FormField<T extends FieldValues = FieldValues>({ name, control, render }: FormFieldProps<T>) {
  return <Controller name={name} control={control} render={render} />;
}

export function FormItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}
export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label className={cn("block text-sm font-medium text-foreground", className)} {...props}>
      {children}
    </label>
  );
}

export interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}
export function FormControl({ children, className }: FormControlProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export interface FormDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
export function FormDescription({ children, className }: FormDescriptionProps) {
  return <p className={cn("text-xs text-black", className)}>{children}</p>;
}

export interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}
export function FormMessage({ children, className }: FormMessageProps) {
  if (!children) return null;
  return <p className={cn("text-xs text-destructive", className)}>{children}</p>;
}
