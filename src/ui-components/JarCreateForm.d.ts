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
export declare type JarCreateFormInputValues = {
    Notes?: string;
};
export declare type JarCreateFormValidationValues = {
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JarCreateFormOverridesProps = {
    JarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JarCreateFormProps = React.PropsWithChildren<{
    overrides?: JarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JarCreateFormInputValues) => JarCreateFormInputValues;
    onSuccess?: (fields: JarCreateFormInputValues) => void;
    onError?: (fields: JarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JarCreateFormInputValues) => JarCreateFormInputValues;
    onValidate?: JarCreateFormValidationValues;
} & React.CSSProperties>;
export default function JarCreateForm(props: JarCreateFormProps): React.ReactElement;
