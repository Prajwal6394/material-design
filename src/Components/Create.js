import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const useStyles = makeStyles({
//   root: {
//     border: "10px solid red",
//     // backgroundColor: 'blue',
//   },
// });
export default function Create() {
  const [title, setTitle] = useState("");
  const history = useHistory()
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [categories, setCategories] = useState("");
  const [detaileError, setDetailsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch('http://localhost:8000/notes',{
        method : 'POST',
        headers: {"Content-type": "application/json"}
        ,body: JSON.stringify({title, details,categories})
      }).then (() => history.push('/'))
    }
  };

  return (
    <Container  style={{marginTop:'100px' }}>
      <Typography
        style={{ fontFamily: "BhuTuka Expanded One" }}
        variant="h3"
        component="h2"
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginTop: "20px", marginBottom: "20px" }}
          label="Note Here"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          style={{ marginTop: "20px", marginBottom: "20px" }}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detaileError}
        />
        <FormControl>
          <FormLabel style={{marginRight : "350px", marginBottom : "10px"}}>Note Categories </FormLabel>
          <RadioGroup
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<DoubleArrowIcon />}
          style = {{marginTop:"60px"}}
        >
          SUBMIT
        </Button>
      </form>

      <br />
      {/* <FitbitIcon/>
      <FitbitIcon color = 'secondary' fontSize="large"/>
      <FitbitIcon color = "Disabled"/> */}
    </Container>
  );
}
