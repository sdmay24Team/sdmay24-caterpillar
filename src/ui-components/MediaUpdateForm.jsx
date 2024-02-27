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
import { getMedia } from "../graphql/queries";
import { updateMedia } from "../graphql/mutations";
const client = generateClient();
export default function MediaUpdateForm(props) {
  const {
    id: idProp,
    media: mediaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CaterpillarID: "",
    BlobID: "",
  };
  const [CaterpillarID, setCaterpillarID] = React.useState(
    initialValues.CaterpillarID
  );
  const [BlobID, setBlobID] = React.useState(initialValues.BlobID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mediaRecord
      ? { ...initialValues, ...mediaRecord }
      : initialValues;
    setCaterpillarID(cleanValues.CaterpillarID);
    setBlobID(cleanValues.BlobID);
    setErrors({});
  };
  const [mediaRecord, setMediaRecord] = React.useState(mediaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMedia.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMedia
        : mediaModelProp;
      setMediaRecord(record);
    };
    queryData();
  }, [idProp, mediaModelProp]);
  React.useEffect(resetStateValues, [mediaRecord]);
  const validations = {
    CaterpillarID: [{ type: "Required" }],
    BlobID: [],
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
          CaterpillarID,
          BlobID: BlobID ?? null,
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
            query: updateMedia.replaceAll("__typename", ""),
            variables: {
              input: {
                id: mediaRecord.id,
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
      {...getOverrideProps(overrides, "MediaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Caterpillar id"
        isRequired={true}
        isReadOnly={false}
        value={CaterpillarID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CaterpillarID: value,
              BlobID,
            };
            const result = onChange(modelFields);
            value = result?.CaterpillarID ?? value;
          }
          if (errors.CaterpillarID?.hasError) {
            runValidationTasks("CaterpillarID", value);
          }
          setCaterpillarID(value);
        }}
        onBlur={() => runValidationTasks("CaterpillarID", CaterpillarID)}
        errorMessage={errors.CaterpillarID?.errorMessage}
        hasError={errors.CaterpillarID?.hasError}
        {...getOverrideProps(overrides, "CaterpillarID")}
      ></TextField>
      <TextField
        label="Blob id"
        isRequired={false}
        isReadOnly={false}
        value={BlobID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CaterpillarID,
              BlobID: value,
            };
            const result = onChange(modelFields);
            value = result?.BlobID ?? value;
          }
          if (errors.BlobID?.hasError) {
            runValidationTasks("BlobID", value);
          }
          setBlobID(value);
        }}
        onBlur={() => runValidationTasks("BlobID", BlobID)}
        errorMessage={errors.BlobID?.errorMessage}
        hasError={errors.BlobID?.hasError}
        {...getOverrideProps(overrides, "BlobID")}
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
          isDisabled={!(idProp || mediaModelProp)}
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
              !(idProp || mediaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
