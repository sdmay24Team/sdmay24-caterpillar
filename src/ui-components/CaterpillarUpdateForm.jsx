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
import { getCaterpillar } from "../graphql/queries";
import { updateCaterpillar } from "../graphql/mutations";
const client = generateClient();
export default function CaterpillarUpdateForm(props) {
  const {
    id: idProp,
    caterpillar: caterpillarModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    IDCaterpillar: "",
    Notes: "",
  };
  const [IDCaterpillar, setIDCaterpillar] = React.useState(
    initialValues.IDCaterpillar
  );
  const [Notes, setNotes] = React.useState(initialValues.Notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = caterpillarRecord
      ? { ...initialValues, ...caterpillarRecord }
      : initialValues;
    setIDCaterpillar(cleanValues.IDCaterpillar);
    setNotes(cleanValues.Notes);
    setErrors({});
  };
  const [caterpillarRecord, setCaterpillarRecord] =
    React.useState(caterpillarModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCaterpillar.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCaterpillar
        : caterpillarModelProp;
      setCaterpillarRecord(record);
    };
    queryData();
  }, [idProp, caterpillarModelProp]);
  React.useEffect(resetStateValues, [caterpillarRecord]);
  const validations = {
    IDCaterpillar: [{ type: "Required" }],
    Notes: [{ type: "Required" }],
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
          IDCaterpillar,
          Notes,
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
            query: updateCaterpillar.replaceAll("__typename", ""),
            variables: {
              input: {
                id: caterpillarRecord.id,
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
      {...getOverrideProps(overrides, "CaterpillarUpdateForm")}
      {...rest}
    >
      <TextField
        label="Id caterpillar"
        isRequired={true}
        isReadOnly={false}
        value={IDCaterpillar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IDCaterpillar: value,
              Notes,
            };
            const result = onChange(modelFields);
            value = result?.IDCaterpillar ?? value;
          }
          if (errors.IDCaterpillar?.hasError) {
            runValidationTasks("IDCaterpillar", value);
          }
          setIDCaterpillar(value);
        }}
        onBlur={() => runValidationTasks("IDCaterpillar", IDCaterpillar)}
        errorMessage={errors.IDCaterpillar?.errorMessage}
        hasError={errors.IDCaterpillar?.hasError}
        {...getOverrideProps(overrides, "IDCaterpillar")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={true}
        isReadOnly={false}
        value={Notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IDCaterpillar,
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
          isDisabled={!(idProp || caterpillarModelProp)}
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
              !(idProp || caterpillarModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
