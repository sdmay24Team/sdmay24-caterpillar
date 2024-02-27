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
export declare type JarUpdateFormInputValues = {
    Notes?: string;
};
export declare type JarUpdateFormValidationValues = {
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JarUpdateFormOverridesProps = {
    JarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JarUpdateFormProps = React.PropsWithChildren<{
    overrides?: JarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jar?: any;
    onSubmit?: (fields: JarUpdateFormInputValues) => JarUpdateFormInputValues;
    onSuccess?: (fields: JarUpdateFormInputValues) => void;
    onError?: (fields: JarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JarUpdateFormInputValues) => JarUpdateFormInputValues;
    onValidate?: JarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JarUpdateForm(props: JarUpdateFormProps): React.ReactElement;
