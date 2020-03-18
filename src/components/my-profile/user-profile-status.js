import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Grid, 
    Box, 
    Button, 
    withStyles,
    Divider
} from '@material-ui/core';

import UserProfileStatusStepper from './user-profile-status-stepper';

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


const UserProfileStatus = () => {
    const history = useHistory();

    const onChange = (e) => {
        let files = e.target.files;
    };

    const routeChange = () => {
        history.push('/complete-profile');
    };
    
    return (
        <div>
            <Grid container
                alignItems="center"
                xs={12} item>
                <Grid item xs={12}>
                    <Box m={1} fontWeight={300} component="h4">
                        PROFILE STATUS
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <UserProfileStatusStepper />
                </Grid>

                <Grid item xs={12} sm={7} md={7}>
                    <Box m={1} fontWeight={300} component="h4">
                        Continue where you left off
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={5}> 
                    <CustomButton variant="contained" onClick={routeChange}>COMPLETE PROFILE</CustomButton>
                </Grid>
            </Grid>

            <Box mt={3} mb={3}>
                <Divider />
            </Box>
            
            <Grid container
                alignItems="center"
                xs={12} item>
                <Grid item xs={12}>
                    <Box m={1} fontWeight={600} component="h5">
                        DOCUMENTS
                    </Box>
                </Grid>
                <Grid container
                    direction="column"
                    alignItems="flex-start"
                    xs={12} sm={7} md={7} item>
                    <Box m={1} mt={2} fontWeight={300} component="h5">
                        ID / PASSPORT
                    </Box>
                    <Box mb={5}>
                        <CustomButton variant="contained" component="label"> 
                            UPLOAD
                            <input type="file" onChange={(e)=>this.onChange(e)} style={{ display: "none" }}/>
                        </CustomButton>    
                    </Box> 
                </Grid>
                <Grid container
                    direction="column"
                    alignItems="flex-start"
                    xs={12} sm={5} md={5} item>
                    <Box m={1} mt={2} fontWeight={300} component="h5">
                        ADDRESS
                    </Box>
                    <Box mb={5}> 
                        <CustomButton variant="contained" component="label">
                            UPLOAD
                            <input type="file" onChange={(e)=>this.onChange(e)} style={{ display: "none" }}/>
                        </CustomButton>
                    </Box> 
                </Grid>
            </Grid>
        </div>
          
    );
}
export default UserProfileStatus;