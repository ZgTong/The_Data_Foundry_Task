/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { ServiceRequest } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ServiceRequestUpdateForm(props) {
  const {
    id: idProp,
    serviceRequest: serviceRequestModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    creationDate: "",
    severity: "",
    resolutionDate: "",
    reporterName: "",
    contactInfo: "",
    location: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [creationDate, setCreationDate] = React.useState(
    initialValues.creationDate
  );
  const [severity, setSeverity] = React.useState(initialValues.severity);
  const [resolutionDate, setResolutionDate] = React.useState(
    initialValues.resolutionDate
  );
  const [reporterName, setReporterName] = React.useState(
    initialValues.reporterName
  );
  const [contactInfo, setContactInfo] = React.useState(
    initialValues.contactInfo
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = serviceRequestRecord
      ? { ...initialValues, ...serviceRequestRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setCreationDate(cleanValues.creationDate);
    setSeverity(cleanValues.severity);
    setResolutionDate(cleanValues.resolutionDate);
    setReporterName(cleanValues.reporterName);
    setContactInfo(cleanValues.contactInfo);
    setLocation(cleanValues.location);
    setErrors({});
  };
  const [serviceRequestRecord, setServiceRequestRecord] = React.useState(
    serviceRequestModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ServiceRequest, idProp)
        : serviceRequestModelProp;
      setServiceRequestRecord(record);
    };
    queryData();
  }, [idProp, serviceRequestModelProp]);
  React.useEffect(resetStateValues, [serviceRequestRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    creationDate: [{ type: "Required" }],
    severity: [{ type: "Required" }],
    resolutionDate: [],
    reporterName: [{ type: "Required" }],
    contactInfo: [{ type: "Required" }, { type: "Email" }],
    location: [{ type: "Required" }],
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
          name,
          description,
          creationDate,
          severity,
          resolutionDate,
          reporterName,
          contactInfo,
          location,
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
          await DataStore.save(
            ServiceRequest.copyOf(serviceRequestRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ServiceRequestUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              creationDate,
              severity,
              resolutionDate,
              reporterName,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              creationDate,
              severity,
              resolutionDate,
              reporterName,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Creation date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={creationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate: value,
              severity,
              resolutionDate,
              reporterName,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.creationDate ?? value;
          }
          if (errors.creationDate?.hasError) {
            runValidationTasks("creationDate", value);
          }
          setCreationDate(value);
        }}
        onBlur={() => runValidationTasks("creationDate", creationDate)}
        errorMessage={errors.creationDate?.errorMessage}
        hasError={errors.creationDate?.hasError}
        {...getOverrideProps(overrides, "creationDate")}
      ></TextField>
      <SelectField
        label="Severity"
        placeholder="Please select an option"
        isDisabled={false}
        value={severity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate,
              severity: value,
              resolutionDate,
              reporterName,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.severity ?? value;
          }
          if (errors.severity?.hasError) {
            runValidationTasks("severity", value);
          }
          setSeverity(value);
        }}
        onBlur={() => runValidationTasks("severity", severity)}
        errorMessage={errors.severity?.errorMessage}
        hasError={errors.severity?.hasError}
        {...getOverrideProps(overrides, "severity")}
      >
        <option
          children="Low"
          value="Low"
          {...getOverrideProps(overrides, "severityoption0")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "severityoption1")}
        ></option>
        <option
          children="High"
          value="High"
          {...getOverrideProps(overrides, "severityoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Resolution date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={resolutionDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate,
              severity,
              resolutionDate: value,
              reporterName,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.resolutionDate ?? value;
          }
          if (errors.resolutionDate?.hasError) {
            runValidationTasks("resolutionDate", value);
          }
          setResolutionDate(value);
        }}
        onBlur={() => runValidationTasks("resolutionDate", resolutionDate)}
        errorMessage={errors.resolutionDate?.errorMessage}
        hasError={errors.resolutionDate?.hasError}
        {...getOverrideProps(overrides, "resolutionDate")}
      ></TextField>
      <TextField
        label="Reporter name"
        isRequired={true}
        isReadOnly={false}
        value={reporterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate,
              severity,
              resolutionDate,
              reporterName: value,
              contactInfo,
              location,
            };
            const result = onChange(modelFields);
            value = result?.reporterName ?? value;
          }
          if (errors.reporterName?.hasError) {
            runValidationTasks("reporterName", value);
          }
          setReporterName(value);
        }}
        onBlur={() => runValidationTasks("reporterName", reporterName)}
        errorMessage={errors.reporterName?.errorMessage}
        hasError={errors.reporterName?.hasError}
        {...getOverrideProps(overrides, "reporterName")}
      ></TextField>
      <TextField
        label="Contact info"
        isRequired={true}
        isReadOnly={false}
        value={contactInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate,
              severity,
              resolutionDate,
              reporterName,
              contactInfo: value,
              location,
            };
            const result = onChange(modelFields);
            value = result?.contactInfo ?? value;
          }
          if (errors.contactInfo?.hasError) {
            runValidationTasks("contactInfo", value);
          }
          setContactInfo(value);
        }}
        onBlur={() => runValidationTasks("contactInfo", contactInfo)}
        errorMessage={errors.contactInfo?.errorMessage}
        hasError={errors.contactInfo?.hasError}
        {...getOverrideProps(overrides, "contactInfo")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              creationDate,
              severity,
              resolutionDate,
              reporterName,
              contactInfo,
              location: value,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
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
          isDisabled={!(idProp || serviceRequestModelProp)}
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
              !(idProp || serviceRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
