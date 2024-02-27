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
export declare type MomUpdateFormInputValues = {
    NumEggs?: number;
    DateFirstHatch?: string;
    TotalHatched?: number;
};
export declare type MomUpdateFormValidationValues = {
    NumEggs?: ValidationFunction<number>;
    DateFirstHatch?: ValidationFunction<string>;
    TotalHatched?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MomUpdateFormOverridesProps = {
    MomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NumEggs?: PrimitiveOverrideProps<TextFieldProps>;
    DateFirstHatch?: PrimitiveOverrideProps<TextFieldProps>;
    TotalHatched?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MomUpdateFormProps = React.PropsWithChildren<{
    overrides?: MomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mom?: any;
    onSubmit?: (fields: MomUpdateFormInputValues) => MomUpdateFormInputValues;
    onSuccess?: (fields: MomUpdateFormInputValues) => void;
    onError?: (fields: MomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MomUpdateFormInputValues) => MomUpdateFormInputValues;
    onValidate?: MomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MomUpdateForm(props: MomUpdateFormProps): React.ReactElement;
