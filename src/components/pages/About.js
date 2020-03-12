import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const product = {
	margin: '20px',
	textAlign: 'center',
	border: '1px solid #cccccc',
	padding: '0 0 30px',
	width: '30%'
}

const mSpacing = {
	margin: '20px auto',
}

const textCenter = {
	textAlign: 'center',
}

const useStyles = makeStyles(theme => ({
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
  	clientList: {
  		listStyleType: 'none',
  		display: 'flex',
  		width: '100%',
  		flexWrap: 'wrap',
  		justifyContent: 'center',
  		padding: '0',
  		'& > li': {
  			padding: '10px',
  		}
  	},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    paddingBottom: '3em',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

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

const images = [
  {
    url: 'images/product1.jpg',
    title: 'FEATURE ELEMENTS',
    width: '40%',
  },
  {
    url: 'images/product2.jpg',
    title: 'PERGOLA KITS',
    width: '30%',
  },
  {
    url: 'images/product3.jpg',
    title: 'DESIGN CENTER',
    width: '30%',
  },
];

const clients = ['images/clients.png', 'images/clients.png', 'images/clients.png', 'images/clients.png','images/clients.png'];

function About() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="md">
			<Typography component="h1" variant="h3" style={{...textCenter, ...mSpacing}}>
				About
			</Typography>
			<div className={classes.productsLists}>
				<Product productsLists={productsLists} />
			</div>
			<Typography component="h1" variant="h3" style={{...textCenter, ...mSpacing}}>
				Our Happy Clients
			</Typography>
			<ul className={classes.clientList}>
				{clients.map(client => (
					<li>
						<a href="#"><figure><img src={client} alt="Clients" /></figure></a>
					</li>
				))}
			</ul>
			<Typography component="h1" variant="h3" style={{...textCenter, ...mSpacing}}>
				WHOLESALE TO THE PUBLIC
			</Typography>
			<div className={classes.root}>
		      {images.map(image => (
		        <ButtonBase
		          focusRipple
		          key={image.title}
		          className={classes.image}
		          focusVisibleClassName={classes.focusVisible}
		          style={{
		            width: image.width,
		          }}
		        >
		          <span
		            className={classes.imageSrc}
		            style={{
		              backgroundImage: `url(${image.url})`,
		            }}
		          />
		          <span className={classes.imageBackdrop} />
		          <span className={classes.imageButton}>
		            <Typography
		              component="span"
		              variant="subtitle1"
		              color="inherit"
		              className={classes.imageTitle}
		            >
		              {image.title}
		              <span className={classes.imageMarked} />
		            </Typography>
		          </span>
		        </ButtonBase>
		      ))}
		    </div>
		</Container>
	)
}

export default About;