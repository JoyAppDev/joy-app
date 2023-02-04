import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box, Stack } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { CustomButton } from '../button';
import RegistrationStepFirst from '../registration-step-first';
import RegistrationStepFinal from '../registration-step-final';
import { theme } from '../../styles/theme';
import Spinner from '../spinner';

import { register, reset } from '../../slices/auth-slice';

const INITIAL_DATA = {
  email: '',
  password: '',
  name: '',
  address: '',
  idNumber: '',
  paymentInfo: '',
  payPal: '',
};

const steps = ['Step 1', 'Final step'];

// validation schema
const Schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email.'),
});

export default function MultiStepRegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState(INITIAL_DATA);
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [isValidFinalForm, setIsValidFinalForm] = React.useState(false);

  const { email, password, name, address, idNumber, paymentInfo, payPal } =
    data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleRegister = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
      name,
      address,
      idNumber,
      paymentInfo,
      payPal,
    };

    dispatch(register(userData));
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <RegistrationStepFirst
            {...data}
            updateFields={updateFields}
            setIsValidForm={setIsValidForm}
          />
        );
      case 1:
        return (
          <RegistrationStepFinal
            {...data}
            updateFields={updateFields}
            setIsValidFinalForm={setIsValidFinalForm}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleTransition = () => {
    if (activeStep !== steps.length - 1) return handleNext();
    // alert(JSON.stringify(data));
  };

  if (isLoading) {
    return <Spinner />;
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
          <Step
            key={label}
            sx={{
              '& .MuiStepIcon-root.Mui-active': {
                color: theme.palette.custom.orange,
              },
              '& .MuiStepIcon-root.Mui-completed': {
                color: theme.palette.custom.orange,
              },
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
            {/* {isError && (
              <Typography sx={{ color: 'red' }}>
                Error: wrong data type
              </Typography>
            )} */}

            {activeStep === steps.length - 1 ? (
              <CustomButton
                type="submit"
                onClick={handleRegister}
                disabled={!isValidFinalForm}
              >
                COMPLETE ACCOUNT
              </CustomButton>
            ) : (
              <CustomButton
                type="submit"
                onClick={handleTransition}
                disabled={!isValidForm}
              >
                SIGN IN
              </CustomButton>
            )}

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
