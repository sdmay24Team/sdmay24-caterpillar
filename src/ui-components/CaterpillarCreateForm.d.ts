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
export declare type CaterpillarCreateFormInputValues = {
    IDCaterpillar?: string;
    Notes?: string;
};
export declare type CaterpillarCreateFormValidationValues = {
    IDCaterpillar?: ValidationFunction<string>;
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaterpillarCreateFormOverridesProps = {
    CaterpillarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    IDCaterpillar?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaterpillarCreateFormProps = React.PropsWithChildren<{
    overrides?: CaterpillarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaterpillarCreateFormInputValues) => CaterpillarCreateFormInputValues;
    onSuccess?: (fields: CaterpillarCreateFormInputValues) => void;
    onError?: (fields: CaterpillarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaterpillarCreateFormInputValues) => CaterpillarCreateFormInputValues;
    onValidate?: CaterpillarCreateFormValidationValues;
} & React.CSSProperties>;
export default function CaterpillarCreateForm(props: CaterpillarCreateFormProps): React.ReactElement;
