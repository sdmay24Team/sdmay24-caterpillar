/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    DateFound?: string;
    SiteFound?: string;
    LocationFound?: string;
    TimeFound?: string;
    IndividualID?: string;
    CreatedBy?: string;
    HostPlant?: string;
    CollectedBy?: string;
    Stage?: string;
};
export declare type CaterpillarCreateFormValidationValues = {
    DateFound?: ValidationFunction<string>;
    SiteFound?: ValidationFunction<string>;
    LocationFound?: ValidationFunction<string>;
    TimeFound?: ValidationFunction<string>;
    IndividualID?: ValidationFunction<string>;
    CreatedBy?: ValidationFunction<string>;
    HostPlant?: ValidationFunction<string>;
    CollectedBy?: ValidationFunction<string>;
    Stage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaterpillarCreateFormOverridesProps = {
    CaterpillarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    DateFound?: PrimitiveOverrideProps<TextFieldProps>;
    SiteFound?: PrimitiveOverrideProps<AutocompleteProps>;
    LocationFound?: PrimitiveOverrideProps<TextFieldProps>;
    TimeFound?: PrimitiveOverrideProps<TextFieldProps>;
    IndividualID?: PrimitiveOverrideProps<TextFieldProps>;
    CreatedBy?: PrimitiveOverrideProps<TextFieldProps>;
    HostPlant?: PrimitiveOverrideProps<SelectFieldProps>;
    CollectedBy?: PrimitiveOverrideProps<TextFieldProps>;
    Stage?: PrimitiveOverrideProps<TextFieldProps>;
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
