import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const MypostFeed = (props) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card sx={{ width: 200, height: 160, marginRight: 3 }}>
      <CardMedia
        component="img"
        height="100"
        image={props.image}
        alt="singer"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" fontSize="12px" marginTop="-5px" marginLeft="-5px">
         {props.title}
        </Typography>
      </CardContent>
      <CardActions
      sx={{
        marginTop:'-30px',
        marginLeft: '-7px'
      }}
      >
            <Checkbox {...label} 
            sx={{
            color: "#e64a3d",
            '&.Mui-checked': {
            color: "#e64a3d",
            },}}
            icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} />
            <ChatBubbleOutlineIcon
            sx={{ fontSize : '20px'}}
            ></ChatBubbleOutlineIcon>
      </CardActions>
    </Card>
  )
}

export default MypostFeed