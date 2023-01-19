import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 0.9375rem;
  background-color: #ff8a00;
  padding: 0;
  border-radius: 4px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 12px 6px 20px -2px rgba(154, 154, 154, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  width: 460px;
  width: 100%;
  height: 42px;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`;

export const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};
