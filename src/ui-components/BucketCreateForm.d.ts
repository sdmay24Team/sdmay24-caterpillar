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
export declare type BucketCreateFormInputValues = {
    Notes?: string;
};
export declare type BucketCreateFormValidationValues = {
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BucketCreateFormOverridesProps = {
    BucketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BucketCreateFormProps = React.PropsWithChildren<{
    overrides?: BucketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BucketCreateFormInputValues) => BucketCreateFormInputValues;
    onSuccess?: (fields: BucketCreateFormInputValues) => void;
    onError?: (fields: BucketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BucketCreateFormInputValues) => BucketCreateFormInputValues;
    onValidate?: BucketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BucketCreateForm(props: BucketCreateFormProps): React.ReactElement;
