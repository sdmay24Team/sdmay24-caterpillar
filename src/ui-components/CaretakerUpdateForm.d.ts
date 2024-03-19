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
export declare type CaretakerUpdateFormInputValues = {
    Name?: string;
    Email?: string;
    Initials?: string;
};
export declare type CaretakerUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Initials?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaretakerUpdateFormOverridesProps = {
    CaretakerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Initials?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaretakerUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaretakerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caretaker?: any;
    onSubmit?: (fields: CaretakerUpdateFormInputValues) => CaretakerUpdateFormInputValues;
    onSuccess?: (fields: CaretakerUpdateFormInputValues) => void;
    onError?: (fields: CaretakerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaretakerUpdateFormInputValues) => CaretakerUpdateFormInputValues;
    onValidate?: CaretakerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaretakerUpdateForm(props: CaretakerUpdateFormProps): React.ReactElement;
