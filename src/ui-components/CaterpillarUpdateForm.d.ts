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
export declare type CaterpillarUpdateFormInputValues = {
    IDCaterpillar?: string;
    Notes?: string;
};
export declare type CaterpillarUpdateFormValidationValues = {
    IDCaterpillar?: ValidationFunction<string>;
    Notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaterpillarUpdateFormOverridesProps = {
    CaterpillarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    IDCaterpillar?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaterpillarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaterpillarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caterpillar?: any;
    onSubmit?: (fields: CaterpillarUpdateFormInputValues) => CaterpillarUpdateFormInputValues;
    onSuccess?: (fields: CaterpillarUpdateFormInputValues) => void;
    onError?: (fields: CaterpillarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaterpillarUpdateFormInputValues) => CaterpillarUpdateFormInputValues;
    onValidate?: CaterpillarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaterpillarUpdateForm(props: CaterpillarUpdateFormProps): React.ReactElement;
