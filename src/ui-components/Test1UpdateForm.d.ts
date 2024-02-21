/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Test1 } from "../models";
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
export declare type Test1UpdateFormInputValues = {
    name?: string;
};
export declare type Test1UpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test1UpdateFormOverridesProps = {
    Test1UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test1UpdateFormProps = React.PropsWithChildren<{
    overrides?: Test1UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test1?: Test1;
    onSubmit?: (fields: Test1UpdateFormInputValues) => Test1UpdateFormInputValues;
    onSuccess?: (fields: Test1UpdateFormInputValues) => void;
    onError?: (fields: Test1UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test1UpdateFormInputValues) => Test1UpdateFormInputValues;
    onValidate?: Test1UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Test1UpdateForm(props: Test1UpdateFormProps): React.ReactElement;
