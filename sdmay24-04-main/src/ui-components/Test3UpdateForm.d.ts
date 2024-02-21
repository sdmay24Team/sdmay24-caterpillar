/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Test3 } from "../models";
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
export declare type Test3UpdateFormInputValues = {
    content?: string;
};
export declare type Test3UpdateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test3UpdateFormOverridesProps = {
    Test3UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test3UpdateFormProps = React.PropsWithChildren<{
    overrides?: Test3UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test3?: Test3;
    onSubmit?: (fields: Test3UpdateFormInputValues) => Test3UpdateFormInputValues;
    onSuccess?: (fields: Test3UpdateFormInputValues) => void;
    onError?: (fields: Test3UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test3UpdateFormInputValues) => Test3UpdateFormInputValues;
    onValidate?: Test3UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Test3UpdateForm(props: Test3UpdateFormProps): React.ReactElement;
