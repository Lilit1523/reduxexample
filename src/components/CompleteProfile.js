import React from 'react';
import { 
    Grid, 
    Box, 
    Button,
    Container, 
    withStyles,
    makeStyles,
    TextField,
    FormControlLabel,
    Typography
} from '@material-ui/core';
import UserProfileStatusStepper from './my-profile/user-profile-status-stepper';

const CustomButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '8px 15px',
        minWidth: '160px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#d1d3d6',
        borderColor: '#a0a1a2',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: '#c5c5c5',
          borderColor: '#92969c',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#c5c5c5',
          borderColor: '#92969c',
        },
    },
})(Button)

const useStyles = makeStyles(theme => ({
    root: {
        margin: '3em auto',
        borderRadius: '18px',
        border: '1px solid rgba(0, 0, 0, 0.42)',
        '& > div': {
            margin: 'auto',
        },
    },
}));

const CompleteProfile = () => {
    const classes = useStyles();
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const handleNext = () => {

    };
    return (
        <Container component="main" maxWidth="sm" className={classes.root}>
            <UserProfileStatusStepper />
            <Grid container
                alignItems="center"
                xs={12} sm={12} md={8} item>
                    <Grid item xs={12}>
                        <Box m={1} mt={5} fontWeight={400} component="h3">
                            COMPLETE YOUR PROFILE
                        </Box>
                        <Box m={1} fontWeight={400} component="h5">
                            (VERIFY PROFESSIONAL CLIENTA QUESTIONS)
                        </Box>
                    </Grid>
                    <form onSubmit={onSubmit} style={{ width: '100%' }}>
                        <TextField 
                            id="standard-full-width" 
                            label="Gender" 
                            fullWidth
                            style={{ margin: '20px 0' }}
                        />
                        <TextField 
                            id="standard-full-width" 
                            label="Place of Birth"
                            fullWidth
                            style={{ margin: '20px 0' }}
                        />
                        <TextField 
                            id="standard-full-width"  
                            label="CitizenShip" 
                            fullWidth
                            style={{ margin: '20px 0' }}
                        />
                        <Box mt={-1}>
                            <Typography component="p" align="center">
                                You can save your answers and continue any time later
                            </Typography>
                        </Box>
                        <Box mt={7} mb={5}>
                            <Grid container
                                alignItems="center"
                                justify="space-between"
                                xs={12} item>
                                    <CustomButton variant="contained" type="submit">SAVE</CustomButton>
                                    <CustomButton variant="contained" onClick={handleNext}>NEXT</CustomButton>
                            </Grid>
                        </Box>                        
                    </form>                
            </Grid>
        </Container>
    );
}
export default CompleteProfile;