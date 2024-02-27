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
export declare type BucketUpdateFormInputValues = {
    Notes?: string;
};
export declare type BucketUpdateFormValidationValues = {
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BucketUpdateFormOverridesProps = {
    BucketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BucketUpdateFormProps = React.PropsWithChildren<{
    overrides?: BucketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bucket?: any;
    onSubmit?: (fields: BucketUpdateFormInputValues) => BucketUpdateFormInputValues;
    onSuccess?: (fields: BucketUpdateFormInputValues) => void;
    onError?: (fields: BucketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BucketUpdateFormInputValues) => BucketUpdateFormInputValues;
    onValidate?: BucketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BucketUpdateForm(props: BucketUpdateFormProps): React.ReactElement;
