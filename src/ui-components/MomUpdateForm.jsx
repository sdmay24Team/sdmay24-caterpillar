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
import { getMom } from "../graphql/queries";
import { updateMom } from "../graphql/mutations";
const client = generateClient();
export default function MomUpdateForm(props) {
  const {
    id: idProp,
    mom: momModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    NumEggs: "",
    DateFirstHatch: "",
    TotalHatched: "",
  };
  const [NumEggs, setNumEggs] = React.useState(initialValues.NumEggs);
  const [DateFirstHatch, setDateFirstHatch] = React.useState(
    initialValues.DateFirstHatch
  );
  const [TotalHatched, setTotalHatched] = React.useState(
    initialValues.TotalHatched
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = momRecord
      ? { ...initialValues, ...momRecord }
      : initialValues;
    setNumEggs(cleanValues.NumEggs);
    setDateFirstHatch(cleanValues.DateFirstHatch);
    setTotalHatched(cleanValues.TotalHatched);
    setErrors({});
  };
  const [momRecord, setMomRecord] = React.useState(momModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMom.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMom
        : momModelProp;
      setMomRecord(record);
    };
    queryData();
  }, [idProp, momModelProp]);
  React.useEffect(resetStateValues, [momRecord]);
  const validations = {
    NumEggs: [{ type: "Required" }],
    DateFirstHatch: [],
    TotalHatched: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          NumEggs,
          DateFirstHatch: DateFirstHatch ?? null,
          TotalHatched: TotalHatched ?? null,
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
            query: updateMom.replaceAll("__typename", ""),
            variables: {
              input: {
                id: momRecord.id,
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
      {...getOverrideProps(overrides, "MomUpdateForm")}
      {...rest}
    >
      <TextField
        label="Num eggs"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={NumEggs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              NumEggs: value,
              DateFirstHatch,
              TotalHatched,
            };
            const result = onChange(modelFields);
            value = result?.NumEggs ?? value;
          }
          if (errors.NumEggs?.hasError) {
            runValidationTasks("NumEggs", value);
          }
          setNumEggs(value);
        }}
        onBlur={() => runValidationTasks("NumEggs", NumEggs)}
        errorMessage={errors.NumEggs?.errorMessage}
        hasError={errors.NumEggs?.hasError}
        {...getOverrideProps(overrides, "NumEggs")}
      ></TextField>
      <TextField
        label="Date first hatch"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={DateFirstHatch && convertToLocal(new Date(DateFirstHatch))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              NumEggs,
              DateFirstHatch: value,
              TotalHatched,
            };
            const result = onChange(modelFields);
            value = result?.DateFirstHatch ?? value;
          }
          if (errors.DateFirstHatch?.hasError) {
            runValidationTasks("DateFirstHatch", value);
          }
          setDateFirstHatch(value);
        }}
        onBlur={() => runValidationTasks("DateFirstHatch", DateFirstHatch)}
        errorMessage={errors.DateFirstHatch?.errorMessage}
        hasError={errors.DateFirstHatch?.hasError}
        {...getOverrideProps(overrides, "DateFirstHatch")}
      ></TextField>
      <TextField
        label="Total hatched"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalHatched}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              NumEggs,
              DateFirstHatch,
              TotalHatched: value,
            };
            const result = onChange(modelFields);
            value = result?.TotalHatched ?? value;
          }
          if (errors.TotalHatched?.hasError) {
            runValidationTasks("TotalHatched", value);
          }
          setTotalHatched(value);
        }}
        onBlur={() => runValidationTasks("TotalHatched", TotalHatched)}
        errorMessage={errors.TotalHatched?.errorMessage}
        hasError={errors.TotalHatched?.hasError}
        {...getOverrideProps(overrides, "TotalHatched")}
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
          isDisabled={!(idProp || momModelProp)}
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
              !(idProp || momModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
