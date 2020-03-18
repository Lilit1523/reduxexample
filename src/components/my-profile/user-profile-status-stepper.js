import React from 'react';
import { 
    Grid, 
    Step,
    Stepper,
    StepLabel
} from '@material-ui/core';

const pdRL = {
    paddingLeft: '0',
    paddingRight: '0'
};

const getSteps = () => {
    return ['Complete Profile', 'Open Account', 'Make Deposit', 'Start Trading'];
}

const UserProfileStatusStepper = () => {
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();
    return (
        <Stepper alternativeLabel activeStep={activeStep} style={pdRL}>
            {steps.map(label => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
    );
}
export default UserProfileStatusStepper;