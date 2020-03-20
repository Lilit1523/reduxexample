import React from 'react';
import { 
    Grid, 
    Box, 
    Button,
    Container,
    makeStyles,
    Checkbox,
    GridList,
    GridListTile,
    Divider,
    Link
} from '@material-ui/core';

const UserCards = ['images/Card1.png', 'images/Card2.png'];

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '2em',
    },
    boxBorder: {
        border: '1px solid rgba(0, 0, 0, 0.42)',
        borderRadius: '15px',
        padding: '15px 25px',
    },
    gridList: {
        '& figure': {
            margin: '30px 0',
        },
    },
    btn: {
        width: '180px',
        borderRadius: '18px',
    }
}));

const MyMoney = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.root}>
            <Grid container
                alignItems="center"
                justify="space-between"
                xs={12} sm={12} md={12} item>
                    <Grid item xs={12}>
                        <Box m={1} mt={5} mb={3} fontWeight={600} component="h1">
                            My Money
                        </Box>
                    </Grid>                    
                    <Grid item xs={12} sm={12} md={8}>
                        <Box className={classes.boxBorder}>
                            <Box m={0} fontWeight={700} component="h5">
                                LAST PAYMENT USED
                            </Box>
                            <Grid container
                                alignItems="center"
                                justify="space-between"
                                xs={12} sm={12} md={12} item>
                                <Grid item xs={6}>
                                    <Box mt={1}>Visa</Box>                                                                     
                                </Grid>
                                <Grid item xs={6}>
                                    <Box textAlign="right" mt={1}>edit</Box>                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <Box mt={1}>************564</Box>                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <Box textAlign="right" mt={1}>add new payment method</Box>                                    
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className={classes.boxBorder}>
                            <Box m={0} fontWeight={700} component="h5">
                                VERIFY PAYMENT
                            </Box>
                            <Box m={0} mt={2} fontWeight={700} component="h5">
                                Verified
                                <Checkbox
                                    defaultChecked
                                    color="default"
                                />
                            </Box>                             
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <GridList className={classes.gridList} cols={3}>
                            {UserCards.map((card, index) => (
                                <GridListTile key={index}>
                                    <a href="#"><figure><img src={card} alt="Client-Cards" height="150" width="auto"/></figure></a>
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box className={classes.boxBorder} mt={4}>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                item xs={12} sm={12} md={12}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box m={0} fontWeight={700} component="h5">
                                        ACCOUNT No 6422123
                                    </Box>
                                    <Box mt={2} mb={1}>
                                        Balance:
                                        <Box component="span" style={{ float: 'right' }}>$0.00</Box>
                                    </Box>
                                    <Divider />
                                    <Box mt={1} mb={4} fontWeight={700}>
                                        Profit / PnL:
                                        <Box component="span" style={{ float: 'right' }}>$0.00</Box>
                                    </Box>
                                    <Box textAlign="center" fontWeight={600} component="h5">
                                        <Link href="#" color="inherit">DOWNLOAD REPORT</Link>
                                    </Box>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box mt={2} mb={1} textAlign="center">
                                        <Button variant="contained" className={classes.btn} disabled>
                                            Transfer
                                        </Button>
                                    </Box>
                                    <Box mt={2} mb={2} textAlign="center">                
                                        <Button variant="contained" className={classes.btn}>Withdraw</Button>
                                    </Box>
                                    <Box mt={1} mb={1} textAlign="center">
                                        <Button variant="contained" className={classes.btn} color="primary">
                                            Deposit
                                        </Button>
                                    </Box>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid item xs={12} sm={6} md={3}>

                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default MyMoney;