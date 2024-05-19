// o	Someone can add, edit, or delete designs that designers upload.
// o	They can also check new designs before they go live on the site.
// o	Contents: 
// 	List of uploaded designs with thumbnail images and brief descriptions.
// 	Options to add new designs, edit existing designs, or delete designs.
// 	Review queue for new design submissions with options for approval or rejection.

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button'
const DesignManagement = () => {
  return (
    <div className='d-flex align-items-center'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://as1.ftcdn.net/v2/jpg/02/30/34/24/1000_F_230342432_uLKJ2Ynp75DumP6IhzzvgFl5RVv7Ul4F.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ADD DESIGNS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         TO ADD DESIGN PLEASE CLICK BELOW BUTTON
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="primary">ADD</Button>
        
      </CardActions>
    </Card>   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://cdn-icons-png.flaticon.com/512/32/32355.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          EDIT DESIGNS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         TO EDIT DESIGN PLEASE CLICK BELOW BUTTON
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="primary">EDIT</Button>
        
      </CardActions>
    </Card>  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUR6VeByiCaGUJlbTpKhvDjORw4jMvYxZ-zE7HOcEsBg&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DELETE DESIGNS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         TO DELETE DESIGN PLEASE CLICK BELOW BUTTON
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="primary">DELETE</Button>
        
      </CardActions>
    </Card>  
    </div>
  )
}

export default DesignManagement