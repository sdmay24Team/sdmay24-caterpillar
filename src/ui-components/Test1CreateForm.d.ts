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
export declare type Test1CreateFormInputValues = {
    name?: string;
};
export declare type Test1CreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test1CreateFormOverridesProps = {
    Test1CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test1CreateFormProps = React.PropsWithChildren<{
    overrides?: Test1CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Test1CreateFormInputValues) => Test1CreateFormInputValues;
    onSuccess?: (fields: Test1CreateFormInputValues) => void;
    onError?: (fields: Test1CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test1CreateFormInputValues) => Test1CreateFormInputValues;
    onValidate?: Test1CreateFormValidationValues;
} & React.CSSProperties>;
export default function Test1CreateForm(props: Test1CreateFormProps): React.ReactElement;
