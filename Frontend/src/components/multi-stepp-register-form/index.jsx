import * as React from 'react';
import {useState} from "react";
import {Link as RouterLink} from "react-router-dom";

import {Box, Stack} from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

import {CustomButton} from "../button";
import RegistrationStepFirst from "../registration-step-first";
import RegistrationStepFinal from "../registration-step-final";
import {theme} from "../../styles/theme";

const INITIAL_DATA = {
  email: "",
  password: "",
  name: "",
  address: "",
  idNumber: "",
  paymentInfo: "",
  payPal: "",
}

const steps = ['Step 1', 'Final step'];

export default function MultiStepRegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  const [isValidForm, setIsValidForm] = React.useState(false);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RegistrationStepFirst
            {...data}
            updateFields={updateFields}
            setIsValidForm={setIsValidForm}
        />;
      case 1:
        return <RegistrationStepFinal
            {...data}
            updateFields={updateFields}
        />
      default:
        throw new Error('Unknown step');
    }
  }

  function updateFields(fields) {
    setData(prev => {
      return {...prev, ...fields}
    })
    console.log(isValidForm);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handle = () => {
    if(activeStep !== steps.length - 1) return handleNext();
    alert(JSON.stringify(data));
  }

  return (
    <Box
        component="main"
        maxWidth="sm"
        sx={{
          mb: 4,
          ml: 0,
          padding: 0,
          maxWidth: '458px',
          width: '100%',
        }}
    >
      <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 2,
            maxWidth: '252px',
      }}
      >
        {steps.map(label => (
          <Step key={label}
                sx={{
                  "& .MuiStepIcon-root.Mui-active": {
                    color: theme.palette.custom.orange
                  },
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: theme.palette.custom.orange
                  }
                }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Thank you for your registration.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}

          <Stack spacing={2} mt={4}>
            <CustomButton
                type="submit"
                onClick={handle}
                disabled={!isValidForm}
            >
              {activeStep === steps.length - 1 ? 'COMPLETE ACCOUNT' : 'SIGN IN'}
            </CustomButton>

            <Typography>
              If you already have an account, you can
              <Link
                  sx={{
                    textDecorationColor: 'rgba(55, 103, 226, 1)',
                    color: 'rgba(55, 103, 226, 1)',
                    marginLeft: '4px',
                  }}
                  component={RouterLink}
                  to="/"
              >
                LOG IN.
              </Link>
            </Typography>
          </Stack>

        </React.Fragment>
      )}
    </Box>
  );
}
