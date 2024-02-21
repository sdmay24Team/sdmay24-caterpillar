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
export declare type Test3CreateFormInputValues = {
    content?: string;
};
export declare type Test3CreateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test3CreateFormOverridesProps = {
    Test3CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test3CreateFormProps = React.PropsWithChildren<{
    overrides?: Test3CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Test3CreateFormInputValues) => Test3CreateFormInputValues;
    onSuccess?: (fields: Test3CreateFormInputValues) => void;
    onError?: (fields: Test3CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test3CreateFormInputValues) => Test3CreateFormInputValues;
    onValidate?: Test3CreateFormValidationValues;
} & React.CSSProperties>;
export default function Test3CreateForm(props: Test3CreateFormProps): React.ReactElement;
