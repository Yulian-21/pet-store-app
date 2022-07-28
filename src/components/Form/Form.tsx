import * as React from "react";
import {
    useForm,
    UseFormReturn,
    UseFormProps,
    FormProvider,
    FieldValues
} from "react-hook-form";

type FormProps = {
    onSubmit: any;
    children:
    | React.ReactNode
    | ((methods: UseFormReturn<FieldValues>) => React.ReactNode);
    options?: UseFormProps<FieldValues>;
    id?: string;
};

export const Form = ({
    onSubmit,
    children,
    options,
    id,
}: FormProps) => {
    const methods = useForm({
        ...options
    });
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
                {typeof children === "function" ? children(methods) : children}
            </form>
        </FormProvider>
    );
};