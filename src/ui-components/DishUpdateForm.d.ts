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
export declare type DishUpdateFormInputValues = {
    Notes?: string;
};
export declare type DishUpdateFormValidationValues = {
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DishUpdateFormOverridesProps = {
    DishUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DishUpdateFormProps = React.PropsWithChildren<{
    overrides?: DishUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dish?: any;
    onSubmit?: (fields: DishUpdateFormInputValues) => DishUpdateFormInputValues;
    onSuccess?: (fields: DishUpdateFormInputValues) => void;
    onError?: (fields: DishUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DishUpdateFormInputValues) => DishUpdateFormInputValues;
    onValidate?: DishUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DishUpdateForm(props: DishUpdateFormProps): React.ReactElement;
