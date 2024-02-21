/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Test2CreateFormInputValues = {
    title?: string;
};
export declare type Test2CreateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test2CreateFormOverridesProps = {
    Test2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test2CreateFormProps = React.PropsWithChildren<{
    overrides?: Test2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Test2CreateFormInputValues) => Test2CreateFormInputValues;
    onSuccess?: (fields: Test2CreateFormInputValues) => void;
    onError?: (fields: Test2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test2CreateFormInputValues) => Test2CreateFormInputValues;
    onValidate?: Test2CreateFormValidationValues;
} & React.CSSProperties>;
export default function Test2CreateForm(props: Test2CreateFormProps): React.ReactElement;
