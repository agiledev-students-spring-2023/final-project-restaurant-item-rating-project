import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function suggestionsMapping (favorite) {
  console.log(favorite.id, favorite);
  return (
    <Card 
      key={favorite.id}
    >
    <Box
      sx={{
        display:'flex', 
        justifyContent:"center"
      }}
    >
      <CardMedia
        component="img"
        height="200"
        sx={{ 
          maxWidth:"200px",
          display:'flex', 
        }}
        src={"https://picsum.photos/200"}
        title={favorite.title}
        />
    </Box>
      <CardContent
        sx={{
          maxWidth:200
        }}
      >
        <Typography 
          gutterBottom 
          max
          variant="h6" 
        >
          {favorite.title.split(" ").slice(0,4).join(" ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export function Home() {

  const [suggestions, setSuggestions] = useState([]);

  // mocked api with mockaroo
  const apiUrl =  "https://my.api.mockaroo.com/suggestions?key=07b3ef90";
  useEffect( () => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setSuggestions(data.slice(0,3));
    });

  }, []
  )

  // this is what gets rendered in the React DOM. Must be one element at the top level
  return (
    <Box>      
      <Box
        sx={{ 
          margin: "auto 4% auto 4%",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {suggestions.map(suggestionsMapping)}
      </Box>

    </Box>
  );
}

