import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h2"
        gutterButtom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        onClick= {() => console.log('You clicked Here')}
        endIcon = {<DoubleArrowIcon/>}
      >
        SUBMIT
      </Button>
      <br/>
      {/* <FitbitIcon/>
      <FitbitIcon color = 'secondary' fontSize="large"/>
      <FitbitIcon color = "Disabled"/> */}
    </Container>
  );
};

export default Create;
