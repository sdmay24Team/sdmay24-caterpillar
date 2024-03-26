/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserSettings } from "../graphql/queries";
import { updateUserSettings } from "../graphql/mutations";
const client = generateClient();
export default function UserSettingsUpdateForm(props) {
  const {
    id: idProp,
    userSettings: userSettingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CreatedBy: "",
    Initials: "",
  };
  const [CreatedBy, setCreatedBy] = React.useState(initialValues.CreatedBy);
  const [Initials, setInitials] = React.useState(initialValues.Initials);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userSettingsRecord
      ? { ...initialValues, ...userSettingsRecord }
      : initialValues;
    setCreatedBy(cleanValues.CreatedBy);
    setInitials(cleanValues.Initials);
    setErrors({});
  };
  const [userSettingsRecord, setUserSettingsRecord] = React.useState(
    userSettingsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserSettings.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserSettings
        : userSettingsModelProp;
      setUserSettingsRecord(record);
    };
    queryData();
  }, [idProp, userSettingsModelProp]);
  React.useEffect(resetStateValues, [userSettingsRecord]);
  const validations = {
    CreatedBy: [{ type: "Required" }, { type: "Email" }],
    Initials: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          CreatedBy,
          Initials,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUserSettings.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userSettingsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserSettingsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={CreatedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedBy: value,
              Initials,
            };
            const result = onChange(modelFields);
            value = result?.CreatedBy ?? value;
          }
          if (errors.CreatedBy?.hasError) {
            runValidationTasks("CreatedBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("CreatedBy", CreatedBy)}
        errorMessage={errors.CreatedBy?.errorMessage}
        hasError={errors.CreatedBy?.hasError}
        {...getOverrideProps(overrides, "CreatedBy")}
      ></TextField>
      <TextField
        label="Initials"
        isRequired={true}
        isReadOnly={false}
        value={Initials}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedBy,
              Initials: value,
            };
            const result = onChange(modelFields);
            value = result?.Initials ?? value;
          }
          if (errors.Initials?.hasError) {
            runValidationTasks("Initials", value);
          }
          setInitials(value);
        }}
        onBlur={() => runValidationTasks("Initials", Initials)}
        errorMessage={errors.Initials?.errorMessage}
        hasError={errors.Initials?.hasError}
        {...getOverrideProps(overrides, "Initials")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userSettingsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userSettingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
