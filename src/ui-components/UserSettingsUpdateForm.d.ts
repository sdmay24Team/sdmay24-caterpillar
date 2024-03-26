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
export declare type UserSettingsUpdateFormInputValues = {
    CreatedBy?: string;
    Initials?: string;
};
export declare type UserSettingsUpdateFormValidationValues = {
    CreatedBy?: ValidationFunction<string>;
    Initials?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserSettingsUpdateFormOverridesProps = {
    UserSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CreatedBy?: PrimitiveOverrideProps<TextFieldProps>;
    Initials?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userSettings?: any;
    onSubmit?: (fields: UserSettingsUpdateFormInputValues) => UserSettingsUpdateFormInputValues;
    onSuccess?: (fields: UserSettingsUpdateFormInputValues) => void;
    onError?: (fields: UserSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserSettingsUpdateFormInputValues) => UserSettingsUpdateFormInputValues;
    onValidate?: UserSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserSettingsUpdateForm(props: UserSettingsUpdateFormProps): React.ReactElement;
