/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Test2 } from "../models";
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
export declare type Test2UpdateFormInputValues = {
    title?: string;
};
export declare type Test2UpdateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test2UpdateFormOverridesProps = {
    Test2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Test2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test2?: Test2;
    onSubmit?: (fields: Test2UpdateFormInputValues) => Test2UpdateFormInputValues;
    onSuccess?: (fields: Test2UpdateFormInputValues) => void;
    onError?: (fields: Test2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test2UpdateFormInputValues) => Test2UpdateFormInputValues;
    onValidate?: Test2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Test2UpdateForm(props: Test2UpdateFormProps): React.ReactElement;
