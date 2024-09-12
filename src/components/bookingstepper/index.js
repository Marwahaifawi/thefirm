import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonApp from "../../shared/button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
const steps = [
  {
    label: "Additional Personal Info",
    fields: [
      { name: "phone", label: "Phone", type: "phone" },
      { name: "role", label: "Role", type: "text" },
    ],
    menuItems: [
      { value: "Employee", label: "Employee" },
      { value: "Manager", label: "Manager" },
      { value: "Student", label: "Student" },
      { value: "Entrepreneur", label: "Entrepreneur" },
    ],
  },
  {
    label: "Appointment Details",
    fields: [
      { name: "date", label: "Date", type: "date" },
      { name: "time", label: "Time", type: "time" },
      { name: "instructorName", label: "Instructor Name", type: "text" },
    ],
    menuItems: [
      { value: "Marah Najjar", label: "Marah Najjar" },
      { value: "Marwa Salah", label: "Marwa Salah" },
      { value: "Misk Sawalha", label: "Misk Sawalha" },
    ],
  },
  {
    label: "Finish",
    fields: [
      { name: "additionalInfo", label: "Additional Information", type: "text" },
    ],
  },
];

const BookingStepper = ({ onClose, solutionTitle, setOpen , user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const [appointmentData, setAppointmentData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const handleNext = () => {
    const currentStepFields = steps[activeStep].fields;
    const errors = {};
    currentStepFields.forEach((field) => {
      if (field.name !== "additionalInfo" && !appointmentData[field.name]) {
        errors[field.name] = "This field is required";
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
    } else {
      setFieldErrors({});
      if (activeStep === steps.length - 1) {
        createAppointment(appointmentData)
          .then(() => {
            // Successful API call, perform any necessary actions (e.g., show a success message)
            setOpen(true);
            onClose();
          })
          .catch((error) => {
            // Error handling (e.g., show an error message)
          });
      } else {
        // Proceed to the next step
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      solutionTitle: solutionTitle,
      [name]: value,
    }));
  };

  const createAppointment = (appointmentData) => {
    const apiUrl = "http://localhost:3006/appointments";
    const headers = {
      "Content-Type": "application/json",
    };

    // Add the solutionTitle to the appointmentData object
    appointmentData = {
      ...appointmentData,
      solutionTitle: solutionTitle,
      name: user.name, // Assuming the user object contains the name
      email: user.email, // Assuming the user object contains the email
    };
  
    return axios.post(apiUrl, appointmentData, { headers });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isMobile ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.fields.map((field) =>
                  field.name === "instructorName" || field.name === "role" ? (
                    <FormControl key={field.name} fullWidth margin="normal">
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        value={appointmentData[field.name] || ""}
                        onChange={handleInputChange}
                        name={field.name}
                      >
                        {step.menuItems.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <TextField
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      type={field.type}
                      value={appointmentData[field.name] || ""}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      error={!!fieldErrors[field.name]}
                      helperText={fieldErrors[field.name]}
                    />
                  )
                )}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <ButtonApp
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </ButtonApp>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <ButtonApp
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </ButtonApp>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      ) : (
        <>
          <Stepper activeStep={activeStep} orientation="horizontal">
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you're finished
              </Typography>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              {steps[activeStep].fields.map((field) =>
                field.name === "instructorName" || field.name === "role" ? (
                  <FormControl key={field.name} fullWidth margin="normal">
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                      value={appointmentData[field.name] || ""}
                      onChange={handleInputChange}
                      name={field.name}
                    >
                      {steps[activeStep].menuItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={appointmentData[field.name] || ""}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    error={!!fieldErrors[field.name]}
                    helperText={fieldErrors[field.name]}
                  />
                )
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <ButtonApp
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </ButtonApp>
                <ButtonApp
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </ButtonApp>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default BookingStepper;
