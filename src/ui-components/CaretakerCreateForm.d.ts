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
export declare type CaretakerCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Initials?: string;
};
export declare type CaretakerCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Initials?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaretakerCreateFormOverridesProps = {
    CaretakerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Initials?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaretakerCreateFormProps = React.PropsWithChildren<{
    overrides?: CaretakerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaretakerCreateFormInputValues) => CaretakerCreateFormInputValues;
    onSuccess?: (fields: CaretakerCreateFormInputValues) => void;
    onError?: (fields: CaretakerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaretakerCreateFormInputValues) => CaretakerCreateFormInputValues;
    onValidate?: CaretakerCreateFormValidationValues;
} & React.CSSProperties>;
export default function CaretakerCreateForm(props: CaretakerCreateFormProps): React.ReactElement;
