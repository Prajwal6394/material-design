import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: "10px solid red",
    // backgroundColor: 'blue',
  },
});
export default function Create() {
  const classes = useStyles();
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

      <form noValidate autoComplete="off">
        <TextField
          className={classes.root}
          label="Note Here"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
      </form>

      <Button
        className={classes.root}
        color="primary"
        variant="contained"
        onClick={() => console.log("You clicked Here")}
        endIcon={<DoubleArrowIcon />}
      >
        SUBMIT
      </Button>
      <br />
      {/* <FitbitIcon/>
      <FitbitIcon color = 'secondary' fontSize="large"/>
      <FitbitIcon color = "Disabled"/> */}
    </Container>
  );
}
