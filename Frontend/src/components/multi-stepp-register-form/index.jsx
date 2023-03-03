import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

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

import { register, resetData } from '../../slices/auth-slice';

const steps = ['Step 1', 'Final step'];

const defaultValues = {
  email: '',
  password: '',
  termsCheck: false,
  name: '',
  address: '',
  idNumber: '',
  paymentInfo: 'credit',
  paypal: '',
};

export default function MultiStepRegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  const validationSchema = [
    yup.object({
      email: yup
        .string()
        .trim()
        .email('Please enter a valid email format.')
        .required('E-mail is required'),
      password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(3, '​Password must contain at least 3 characters'),
      termsCheck: yup
        .boolean()
        .oneOf([true], 'Please accept Terms of service')
        .required('Terms of use is required'),
    }),

    yup.object({
      name: yup.string().trim().required(),
      address: yup.string().trim().required(),
      idNumber: yup.string().trim().required(),
      paymentInfo: yup.string().oneOf(['paypal', 'credit']),
      paypal: yup.string().when('paymentInfo', {
        is: val => val === 'paypal',
        then: yup.string().required(),
      }),
    }),
  ];

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    trigger,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = data => {
    const { email, password, name, address, idNumber, paymentInfo, paypal } =
      data;

    const userData = {
      email,
      password,
      name,
      address,
      idNumber,
      paymentInfo,
      paypal,
    };

    dispatch(register(userData));
    reset();
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/');
    }

    dispatch(resetData());
  }, [user, isError, isSuccess, message, navigate, dispatch, reset]);

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <RegistrationStepFirst />;
      case 1:
        return <RegistrationStepFinal />;
      default:
        return null;
    }
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
          <FormProvider {...methods}>
            <form>
              {getStepContent()}

              <Stack spacing={2} mt={4}>
                {activeStep === steps.length - 1 ? (
                  <CustomButton
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}
                  >
                    COMPLETE ACCOUNT
                  </CustomButton>
                ) : (
                  <CustomButton
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!isValid}
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
            </form>
          </FormProvider>
        </React.Fragment>
      )}
    </Box>
  );
}
