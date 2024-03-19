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
export declare type MomCreateFormInputValues = {
    NumEggs?: number;
    DateFirstHatch?: string;
    TotalHatched?: number;
};
export declare type MomCreateFormValidationValues = {
    NumEggs?: ValidationFunction<number>;
    DateFirstHatch?: ValidationFunction<string>;
    TotalHatched?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MomCreateFormOverridesProps = {
    MomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NumEggs?: PrimitiveOverrideProps<TextFieldProps>;
    DateFirstHatch?: PrimitiveOverrideProps<TextFieldProps>;
    TotalHatched?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MomCreateFormProps = React.PropsWithChildren<{
    overrides?: MomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MomCreateFormInputValues) => MomCreateFormInputValues;
    onSuccess?: (fields: MomCreateFormInputValues) => void;
    onError?: (fields: MomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MomCreateFormInputValues) => MomCreateFormInputValues;
    onValidate?: MomCreateFormValidationValues;
} & React.CSSProperties>;
export default function MomCreateForm(props: MomCreateFormProps): React.ReactElement;
