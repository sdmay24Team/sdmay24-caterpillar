/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCaterpillar } from "../graphql/mutations";
const client = generateClient();
export default function CaterpillarCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    DateFound: "",
    SiteFound: undefined,
    LocationFound: "",
    TimeFound: "",
    IndividualID: "",
    CreatedBy: "",
    HostPlant: "",
    CollectedBy: "",
    Stage: "",
  };
  const [DateFound, setDateFound] = React.useState(initialValues.DateFound);
  const [SiteFound, setSiteFound] = React.useState(initialValues.SiteFound);
  const [LocationFound, setLocationFound] = React.useState(
    initialValues.LocationFound
  );
  const [TimeFound, setTimeFound] = React.useState(initialValues.TimeFound);
  const [IndividualID, setIndividualID] = React.useState(
    initialValues.IndividualID
  );
  const [CreatedBy, setCreatedBy] = React.useState(initialValues.CreatedBy);
  const [HostPlant, setHostPlant] = React.useState(initialValues.HostPlant);
  const [CollectedBy, setCollectedBy] = React.useState(
    initialValues.CollectedBy
  );
  const [Stage, setStage] = React.useState(initialValues.Stage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDateFound(initialValues.DateFound);
    setSiteFound(initialValues.SiteFound);
    setLocationFound(initialValues.LocationFound);
    setTimeFound(initialValues.TimeFound);
    setIndividualID(initialValues.IndividualID);
    setCreatedBy(initialValues.CreatedBy);
    setHostPlant(initialValues.HostPlant);
    setCollectedBy(initialValues.CollectedBy);
    setStage(initialValues.Stage);
    setErrors({});
  };
  const validations = {
    DateFound: [{ type: "Required" }],
    SiteFound: [{ type: "Required" }],
    LocationFound: [{ type: "Required" }],
    TimeFound: [{ type: "Required" }],
    IndividualID: [{ type: "Required" }],
    CreatedBy: [{ type: "Required" }, { type: "Email" }],
    HostPlant: [{ type: "Required" }],
    CollectedBy: [{ type: "Required" }],
    Stage: [{ type: "Required" }],
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
  React.useEffect(() => {}, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          DateFound,
          SiteFound,
          LocationFound,
          TimeFound,
          IndividualID,
          CreatedBy,
          HostPlant,
          CollectedBy,
          Stage,
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
            query: createCaterpillar.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CaterpillarCreateForm")}
      {...rest}
    >
      <TextField
        label="Date found"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={DateFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound: value,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.DateFound ?? value;
          }
          if (errors.DateFound?.hasError) {
            runValidationTasks("DateFound", value);
          }
          setDateFound(value);
        }}
        onBlur={() => runValidationTasks("DateFound", DateFound)}
        errorMessage={errors.DateFound?.errorMessage}
        hasError={errors.DateFound?.hasError}
        {...getOverrideProps(overrides, "DateFound")}
      ></TextField>
      <Autocomplete
        label="Site found"
        isRequired={true}
        isReadOnly={false}
        placeholder="Click to search or scroll"
        options={[
          {
            id: "Jakles Lagoon",
            label: "Jakles Lagoon",
          },
          {
            id: "Third Lagoon",
            label: "Third Lagoon",
          },
          {
            id: "Old Town Lagoon",
            label: "Old Town Lagoon",
          },
          {
            id: "Eagle Cove",
            label: "Eagle Cove",
          },
          {
            id: "Redoubt",
            label: "Redoubt",
          },
          {
            id: "Dunes",
            label: "Dunes",
          },
          {
            id: "Old Road Bed",
            label: "Old Road Bed",
          },
          {
            id: "NRCA",
            label: "NRCA",
          },
          {
            id: "South Beach",
            label: "South Beach",
          },
          {
            id: "Lambert #5",
            label: "Lambert #5",
          },
          {
            id: "Shrum",
            label: "Shrum",
          },
          {
            id: "Alaska Packers Rock",
            label: "Alaska Packers Rock",
          },
          {
            id: "Other",
            label: "Other",
          },
        ]}
        onSelect={({ id, label }) => {
          setSiteFound(id);
          runValidationTasks("SiteFound", id);
        }}
        onClear={() => {
          setSiteFound("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound: value,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.SiteFound ?? value;
          }
          if (errors.SiteFound?.hasError) {
            runValidationTasks("SiteFound", value);
          }
          setSiteFound(value);
        }}
        onBlur={() => runValidationTasks("SiteFound", SiteFound)}
        errorMessage={errors.SiteFound?.errorMessage}
        hasError={errors.SiteFound?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "SiteFound")}
      ></Autocomplete>
      <TextField
        label="Location found"
        descriptiveText="Enter the UTMs of the precise collection point"
        isRequired={true}
        isReadOnly={false}
        value={LocationFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound: value,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.LocationFound ?? value;
          }
          if (errors.LocationFound?.hasError) {
            runValidationTasks("LocationFound", value);
          }
          setLocationFound(value);
        }}
        onBlur={() => runValidationTasks("LocationFound", LocationFound)}
        errorMessage={errors.LocationFound?.errorMessage}
        hasError={errors.LocationFound?.hasError}
        {...getOverrideProps(overrides, "LocationFound")}
      ></TextField>
      <TextField
        label="Time found"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={TimeFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound: value,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.TimeFound ?? value;
          }
          if (errors.TimeFound?.hasError) {
            runValidationTasks("TimeFound", value);
          }
          setTimeFound(value);
        }}
        onBlur={() => runValidationTasks("TimeFound", TimeFound)}
        errorMessage={errors.TimeFound?.errorMessage}
        hasError={errors.TimeFound?.hasError}
        {...getOverrideProps(overrides, "TimeFound")}
      ></TextField>
      <TextField
        label="Individual id"
        isRequired={true}
        isReadOnly={false}
        value={IndividualID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID: value,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.IndividualID ?? value;
          }
          if (errors.IndividualID?.hasError) {
            runValidationTasks("IndividualID", value);
          }
          setIndividualID(value);
        }}
        onBlur={() => runValidationTasks("IndividualID", IndividualID)}
        errorMessage={errors.IndividualID?.errorMessage}
        hasError={errors.IndividualID?.hasError}
        {...getOverrideProps(overrides, "IndividualID")}
      ></TextField>
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={CreatedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy: value,
              HostPlant,
              CollectedBy,
              Stage,
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
      <SelectField
        label="Host plant"
        placeholder="Please select an option"
        isDisabled={false}
        value={HostPlant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant: value,
              CollectedBy,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.HostPlant ?? value;
          }
          if (errors.HostPlant?.hasError) {
            runValidationTasks("HostPlant", value);
          }
          setHostPlant(value);
        }}
        onBlur={() => runValidationTasks("HostPlant", HostPlant)}
        errorMessage={errors.HostPlant?.errorMessage}
        hasError={errors.HostPlant?.hasError}
        {...getOverrideProps(overrides, "HostPlant")}
      ></SelectField>
      <TextField
        label="Collected by"
        isRequired={true}
        isReadOnly={false}
        value={CollectedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy: value,
              Stage,
            };
            const result = onChange(modelFields);
            value = result?.CollectedBy ?? value;
          }
          if (errors.CollectedBy?.hasError) {
            runValidationTasks("CollectedBy", value);
          }
          setCollectedBy(value);
        }}
        onBlur={() => runValidationTasks("CollectedBy", CollectedBy)}
        errorMessage={errors.CollectedBy?.errorMessage}
        hasError={errors.CollectedBy?.hasError}
        {...getOverrideProps(overrides, "CollectedBy")}
      ></TextField>
      <TextField
        label="Stage"
        isRequired={true}
        isReadOnly={false}
        value={Stage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              IndividualID,
              CreatedBy,
              HostPlant,
              CollectedBy,
              Stage: value,
            };
            const result = onChange(modelFields);
            value = result?.Stage ?? value;
          }
          if (errors.Stage?.hasError) {
            runValidationTasks("Stage", value);
          }
          setStage(value);
        }}
        onBlur={() => runValidationTasks("Stage", Stage)}
        errorMessage={errors.Stage?.errorMessage}
        hasError={errors.Stage?.hasError}
        {...getOverrideProps(overrides, "Stage")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
