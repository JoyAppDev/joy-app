import * as React from 'react';
import Container from '@mui/material/Container';
import {Stack} from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignInForm from "../signin-form";
import {useState} from "react";
import {CustomButton} from "../button";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";

const INITIAL_DATA = {
  email: "",
  password: "",
  nameSurname: "",
  address: "",
  idNumber: "",
  paymentInfo: "",
}

const steps = ['Step 1', 'Final step'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  // const [isValidForm, setIsValidForm] = useState(false);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SignInForm
            {...data}
            updateFields={updateFields}
            //setIsValidForm={setIsValidForm}
        />;
      case 1:
        return 'Registration Page 2';
      default:
        throw new Error('Unknown step');
    }
  }

  function updateFields(fields) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  //const handleBack = () => {
  //  setActiveStep(activeStep - 1);
  //};

  const handle = () => {
    if(activeStep !== steps.length - 1) return handleNext();
    alert(JSON.stringify(data));
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map(label => (
          <Step key={label}>
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


            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handle}
              sx={{ mt: 3, ml: 1 }}
            >
                {activeStep === steps.length - 1 ? 'Complete account' : 'SIGN IN'}
            </Button>
             </Box>
             */}

          <Stack spacing={2} mt={4}>
            <CustomButton
                type="submit"
                onClick={handle}
                //disabled={!isValidForm}
            >
              {activeStep === steps.length - 1 ? 'Complete account' : 'SIGN IN'}
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
                  to="/signup"
              >
                LOG IN.
              </Link>
            </Typography>
          </Stack>

        </React.Fragment>
      )}
    </Container>
  );
}
