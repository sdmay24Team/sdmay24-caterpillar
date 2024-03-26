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
    IndividualID: "",
    CreatedBy: "",
    DateFound: "",
    SiteFound: "",
    LocationFound: "",
    TimeFound: "",
    HostPlant: "",
    CollectedBy: "",
    Stage: "",
    Slot: "",
    DateEclosed: "",
    DateReleased: "",
    RegionReleased: "",
    LocationReleased: "",
    Cage: "",
  };
  const [IndividualID, setIndividualID] = React.useState(
    initialValues.IndividualID
  );
  const [CreatedBy, setCreatedBy] = React.useState(initialValues.CreatedBy);
  const [DateFound, setDateFound] = React.useState(initialValues.DateFound);
  const [SiteFound, setSiteFound] = React.useState(initialValues.SiteFound);
  const [LocationFound, setLocationFound] = React.useState(
    initialValues.LocationFound
  );
  const [TimeFound, setTimeFound] = React.useState(initialValues.TimeFound);
  const [HostPlant, setHostPlant] = React.useState(initialValues.HostPlant);
  const [CollectedBy, setCollectedBy] = React.useState(
    initialValues.CollectedBy
  );
  const [Stage, setStage] = React.useState(initialValues.Stage);
  const [Slot, setSlot] = React.useState(initialValues.Slot);
  const [DateEclosed, setDateEclosed] = React.useState(
    initialValues.DateEclosed
  );
  const [DateReleased, setDateReleased] = React.useState(
    initialValues.DateReleased
  );
  const [RegionReleased, setRegionReleased] = React.useState(
    initialValues.RegionReleased
  );
  const [LocationReleased, setLocationReleased] = React.useState(
    initialValues.LocationReleased
  );
  const [Cage, setCage] = React.useState(initialValues.Cage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = caterpillarRecord
      ? { ...initialValues, ...caterpillarRecord }
      : initialValues;
    setIndividualID(cleanValues.IndividualID);
    setCreatedBy(cleanValues.CreatedBy);
    setDateFound(cleanValues.DateFound);
    setSiteFound(cleanValues.SiteFound);
    setLocationFound(cleanValues.LocationFound);
    setTimeFound(cleanValues.TimeFound);
    setHostPlant(cleanValues.HostPlant);
    setCollectedBy(cleanValues.CollectedBy);
    setStage(cleanValues.Stage);
    setSlot(cleanValues.Slot);
    setDateEclosed(cleanValues.DateEclosed);
    setDateReleased(cleanValues.DateReleased);
    setRegionReleased(cleanValues.RegionReleased);
    setLocationReleased(cleanValues.LocationReleased);
    setCage(cleanValues.Cage);
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
    IndividualID: [{ type: "Required" }],
    CreatedBy: [{ type: "Required" }, { type: "Email" }],
    DateFound: [{ type: "Required" }],
    SiteFound: [{ type: "Required" }],
    LocationFound: [{ type: "Required" }],
    TimeFound: [{ type: "Required" }],
    HostPlant: [{ type: "Required" }],
    CollectedBy: [{ type: "Required" }],
    Stage: [{ type: "Required" }],
    Slot: [],
    DateEclosed: [],
    DateReleased: [],
    RegionReleased: [],
    LocationReleased: [],
    Cage: [],
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
          IndividualID,
          CreatedBy,
          DateFound,
          SiteFound,
          LocationFound,
          TimeFound,
          HostPlant,
          CollectedBy,
          Stage,
          Slot: Slot ?? null,
          DateEclosed: DateEclosed ?? null,
          DateReleased: DateReleased ?? null,
          RegionReleased: RegionReleased ?? null,
          LocationReleased: LocationReleased ?? null,
          Cage: Cage ?? null,
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
        label="Individual id"
        isRequired={true}
        isReadOnly={false}
        value={IndividualID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID: value,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
              IndividualID,
              CreatedBy: value,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
        label="Date found"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={DateFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound: value,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
      <TextField
        label="Site found"
        isRequired={true}
        isReadOnly={false}
        value={SiteFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound: value,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
        {...getOverrideProps(overrides, "SiteFound")}
      ></TextField>
      <TextField
        label="Location found"
        isRequired={true}
        isReadOnly={false}
        value={LocationFound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound: value,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound: value,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
        label="Host plant"
        isRequired={true}
        isReadOnly={false}
        value={HostPlant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant: value,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
      ></TextField>
      <TextField
        label="Collected by"
        isRequired={true}
        isReadOnly={false}
        value={CollectedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy: value,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage: value,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
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
      <TextField
        label="Slot"
        isRequired={false}
        isReadOnly={false}
        value={Slot}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot: value,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
            };
            const result = onChange(modelFields);
            value = result?.Slot ?? value;
          }
          if (errors.Slot?.hasError) {
            runValidationTasks("Slot", value);
          }
          setSlot(value);
        }}
        onBlur={() => runValidationTasks("Slot", Slot)}
        errorMessage={errors.Slot?.errorMessage}
        hasError={errors.Slot?.hasError}
        {...getOverrideProps(overrides, "Slot")}
      ></TextField>
      <TextField
        label="Date eclosed"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DateEclosed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed: value,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage,
            };
            const result = onChange(modelFields);
            value = result?.DateEclosed ?? value;
          }
          if (errors.DateEclosed?.hasError) {
            runValidationTasks("DateEclosed", value);
          }
          setDateEclosed(value);
        }}
        onBlur={() => runValidationTasks("DateEclosed", DateEclosed)}
        errorMessage={errors.DateEclosed?.errorMessage}
        hasError={errors.DateEclosed?.hasError}
        {...getOverrideProps(overrides, "DateEclosed")}
      ></TextField>
      <TextField
        label="Date released"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DateReleased}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased: value,
              RegionReleased,
              LocationReleased,
              Cage,
            };
            const result = onChange(modelFields);
            value = result?.DateReleased ?? value;
          }
          if (errors.DateReleased?.hasError) {
            runValidationTasks("DateReleased", value);
          }
          setDateReleased(value);
        }}
        onBlur={() => runValidationTasks("DateReleased", DateReleased)}
        errorMessage={errors.DateReleased?.errorMessage}
        hasError={errors.DateReleased?.hasError}
        {...getOverrideProps(overrides, "DateReleased")}
      ></TextField>
      <TextField
        label="Region released"
        isRequired={false}
        isReadOnly={false}
        value={RegionReleased}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased: value,
              LocationReleased,
              Cage,
            };
            const result = onChange(modelFields);
            value = result?.RegionReleased ?? value;
          }
          if (errors.RegionReleased?.hasError) {
            runValidationTasks("RegionReleased", value);
          }
          setRegionReleased(value);
        }}
        onBlur={() => runValidationTasks("RegionReleased", RegionReleased)}
        errorMessage={errors.RegionReleased?.errorMessage}
        hasError={errors.RegionReleased?.hasError}
        {...getOverrideProps(overrides, "RegionReleased")}
      ></TextField>
      <TextField
        label="Location released"
        isRequired={false}
        isReadOnly={false}
        value={LocationReleased}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased: value,
              Cage,
            };
            const result = onChange(modelFields);
            value = result?.LocationReleased ?? value;
          }
          if (errors.LocationReleased?.hasError) {
            runValidationTasks("LocationReleased", value);
          }
          setLocationReleased(value);
        }}
        onBlur={() => runValidationTasks("LocationReleased", LocationReleased)}
        errorMessage={errors.LocationReleased?.errorMessage}
        hasError={errors.LocationReleased?.hasError}
        {...getOverrideProps(overrides, "LocationReleased")}
      ></TextField>
      <TextField
        label="Cage"
        isRequired={false}
        isReadOnly={false}
        value={Cage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IndividualID,
              CreatedBy,
              DateFound,
              SiteFound,
              LocationFound,
              TimeFound,
              HostPlant,
              CollectedBy,
              Stage,
              Slot,
              DateEclosed,
              DateReleased,
              RegionReleased,
              LocationReleased,
              Cage: value,
            };
            const result = onChange(modelFields);
            value = result?.Cage ?? value;
          }
          if (errors.Cage?.hasError) {
            runValidationTasks("Cage", value);
          }
          setCage(value);
        }}
        onBlur={() => runValidationTasks("Cage", Cage)}
        errorMessage={errors.Cage?.errorMessage}
        hasError={errors.Cage?.hasError}
        {...getOverrideProps(overrides, "Cage")}
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
