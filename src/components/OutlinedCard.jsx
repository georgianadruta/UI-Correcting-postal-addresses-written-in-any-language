import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function capitalizeWords(arr) {
  return arr.map(element => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase() + ' ';
  })
}

export default function OutlinedCard({element}) {
  return (
    <Card sx={{ minWidth: 275, width: '50vw', textAlign: 'justified', padding: '5px', margin: '5px' }}>
      <CardContent>
        <Typography variant="body2" sx={{ fontSize: '20px' }}>
          Street: {element.street ? capitalizeWords(element.street.split(" ")) : ''}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '20px' }}>
          Zip Code: {element.zipCode ? capitalizeWords(element.zipCode.split(" ")) : ''}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '20px' }}>
          State: {capitalizeWords(element.county.split(" "))}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '20px' }}>
          City: {capitalizeWords(element.city.split(" "))}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '20px' }}>
          Country: {capitalizeWords(element.country.split(" "))}
        </Typography>
      </CardContent>
    </Card>
  );
}