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
import { getJar } from "../graphql/queries";
import { updateJar } from "../graphql/mutations";
const client = generateClient();
export default function JarUpdateForm(props) {
  const {
    id: idProp,
    jar: jarModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Notes: "",
  };
  const [Notes, setNotes] = React.useState(initialValues.Notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = jarRecord
      ? { ...initialValues, ...jarRecord }
      : initialValues;
    setNotes(cleanValues.Notes);
    setErrors({});
  };
  const [jarRecord, setJarRecord] = React.useState(jarModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getJar.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getJar
        : jarModelProp;
      setJarRecord(record);
    };
    queryData();
  }, [idProp, jarModelProp]);
  React.useEffect(resetStateValues, [jarRecord]);
  const validations = {
    Notes: [],
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
          Notes: Notes ?? null,
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
            query: updateJar.replaceAll("__typename", ""),
            variables: {
              input: {
                id: jarRecord.id,
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
      {...getOverrideProps(overrides, "JarUpdateForm")}
      {...rest}
    >
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={Notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Notes: value,
            };
            const result = onChange(modelFields);
            value = result?.Notes ?? value;
          }
          if (errors.Notes?.hasError) {
            runValidationTasks("Notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("Notes", Notes)}
        errorMessage={errors.Notes?.errorMessage}
        hasError={errors.Notes?.hasError}
        {...getOverrideProps(overrides, "Notes")}
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
          isDisabled={!(idProp || jarModelProp)}
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
              !(idProp || jarModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}