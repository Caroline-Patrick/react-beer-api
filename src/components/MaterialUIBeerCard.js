import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blueGrey, deepOrange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MaterialUIBeerCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {name, abv, tagline, description, image_url, first_brewed} = props.beer
//   const {hops, malt, yeast} = props.beer.ingredients

// console.log(props)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, bgcolor: blueGrey[200]}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepOrange[500], width: 70}} aria-label="abv" variant="square" >
            {`${abv}%`}
          </Avatar>
        }
       
        title={name}
        subheader={`First Brew: ${first_brewed}`}
      />
      <div style={{display: 'flex', justifyContent: 'center'}}><CardMedia
        component="img"
        sx={{
            height: 400,
            width: 250,
            maxHeight: { xs: 233, md: 500 },
            maxWidth: { xs: 350, md: 120 },
          }}
        image={image_url}
        alt={`${name}'s bottle label`}
      /></div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tagline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon /> */}
        {/* </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
         
          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}