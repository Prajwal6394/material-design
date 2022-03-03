import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
//import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import NoteCard from "../Cards/NoteCard";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes" + id, {
      method: "DELETE"
    })

    const newNotes = notes.filter(notes => notes.id !== id);
    setNotes(newNotes);
  }
  return (
    <div>
      <Container>
        {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid xs={12} sm={6}  md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid xs={12} sm={6}  md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid xs={12} sm={6}  md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item key={note.id} xs={12} md={4} sm={6}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Notes;
