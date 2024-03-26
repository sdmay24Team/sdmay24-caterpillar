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
    IndividualID?: string;
    CreatedBy?: string;
    DateFound?: string;
    SiteFound?: string;
    LocationFound?: string;
    TimeFound?: string;
    HostPlant?: string;
    CollectedBy?: string;
    Stage?: string;
    Slot?: string;
    DateEclosed?: string;
    DateReleased?: string;
    RegionReleased?: string;
    LocationReleased?: string;
    Cage?: string;
};
export declare type CaterpillarCreateFormValidationValues = {
    IndividualID?: ValidationFunction<string>;
    CreatedBy?: ValidationFunction<string>;
    DateFound?: ValidationFunction<string>;
    SiteFound?: ValidationFunction<string>;
    LocationFound?: ValidationFunction<string>;
    TimeFound?: ValidationFunction<string>;
    HostPlant?: ValidationFunction<string>;
    CollectedBy?: ValidationFunction<string>;
    Stage?: ValidationFunction<string>;
    Slot?: ValidationFunction<string>;
    DateEclosed?: ValidationFunction<string>;
    DateReleased?: ValidationFunction<string>;
    RegionReleased?: ValidationFunction<string>;
    LocationReleased?: ValidationFunction<string>;
    Cage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaterpillarCreateFormOverridesProps = {
    CaterpillarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    IndividualID?: PrimitiveOverrideProps<TextFieldProps>;
    CreatedBy?: PrimitiveOverrideProps<TextFieldProps>;
    DateFound?: PrimitiveOverrideProps<TextFieldProps>;
    SiteFound?: PrimitiveOverrideProps<TextFieldProps>;
    LocationFound?: PrimitiveOverrideProps<TextFieldProps>;
    TimeFound?: PrimitiveOverrideProps<TextFieldProps>;
    HostPlant?: PrimitiveOverrideProps<TextFieldProps>;
    CollectedBy?: PrimitiveOverrideProps<TextFieldProps>;
    Stage?: PrimitiveOverrideProps<TextFieldProps>;
    Slot?: PrimitiveOverrideProps<TextFieldProps>;
    DateEclosed?: PrimitiveOverrideProps<TextFieldProps>;
    DateReleased?: PrimitiveOverrideProps<TextFieldProps>;
    RegionReleased?: PrimitiveOverrideProps<TextFieldProps>;
    LocationReleased?: PrimitiveOverrideProps<TextFieldProps>;
    Cage?: PrimitiveOverrideProps<TextFieldProps>;
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
