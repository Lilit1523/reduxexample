import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const product = {
	margin: '20px',
	textAlign: 'center',
	border: '1px solid #cccccc',
	padding: '0 0 30px',
	width: '30%'
}

const useStyles = makeStyles({
  productsLists: {
  		'& > div': {
  			display: 'flex',
  			alignItems: 'flex-end',
  		},
  		'& > div > div > *': {
  			padding: '10px',
  		},
  		'& > div > div > figure': {
  			padding: '0',
  			margin: '0',
  		},
  		'& > div > div > figure > img': {
  			maxWidth: '100%',
  		},
  		'& > div > div > h3': {
  			marginBottom: '0',
  		},
  		'& > div > div > p': {
  			display: 'table-cell',
  			verticalAlign: 'middle',
  			height: '160px',
  		},
  	},
});

function Product(props) {
  const content = props.productsLists.map((lists) =>
    <div key={lists.id} style={product}>
    	<figure>
    		<img src={lists.src} alt={lists.title} />
    	</figure>
      	<h3>{lists.title}</h3>
      	<p>{lists.content}</p>
      	<Button  variant="contained" color="secondary" type="submit">View Products</Button>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

const productsLists = [
  {id: 1, src:'images/block_1.jpg', title: 'Temperature Controllers', content: 'Temperature Meters, Temperature Regulators And Meters,Temperature Regualtors'},
  {id: 2, src: 'images/block_2.jpg', title: 'Electrical Safety Devices', content: 'Low Voltage Detectors, High Voltage Detectors, Insulating Sticks, Portable Earthing Devices, Accessories And Units'},
  {id: 3, src: 'images/block_3.jpg', title:'Clampmeters, Multimeters', content: 'Multimeters, Digital Clampmeters, Analog Clampmeters'}
];

function About() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="md">
			<Typography component="h1" variant="h1">
				About
			</Typography>
			<div className={classes.productsLists}>
				<Product productsLists={productsLists} />
			</div>
		</Container>
	)
}

export default About;