import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DeleteOutlined } from "@mui/icons-material";



export default function NoteCard({ note , handleDelete}) {
  return (
    <div>
      <Card elevation={1} style = {{marginTop:"70px"}}>
        <CardHeader

       
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <MoreVertIcon />
              <DeleteOutlined/>
            </IconButton>
          }

          title={note.title}
          subheader={note.categories}
        />

        <CardContent>
            <Typography variant = "body2" color="textSeconadary">
                {note.details}
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
