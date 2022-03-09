import React from "react";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppBar } from "@mui/material";
import Toolbar from "@material-ui/core/Toolbar";
import { styled } from '@mui/material/styles';
import {format} from 'date-fns';
import { Avatar } from "@mui/material";

const drawerWidth = 240;
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Layout({ children }) {
  const history = useHistory();

  const menuItems = [
    {
      text: "My Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "./",
    },
    {
      text: "Create Note",
      icon: <SubjectOutlined color="secondary" />,
      path: "./Create",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
       <div>
      <AppBar position="fixed"  style={{marginBottom : "40px"}}>
        <Toolbar>
          <Typography style={{flexGrow :"1"}}>
         Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar  src = "AvatarImage.png" style={{marginLeft : "8px"}}/>
        </Toolbar>
      </AppBar>
      <Offset />
    </div>
      <Drawer style={{paddingTop: "50px"}}
        variant="permanent"
        anchor="left"
        sx={{
          mt: 50,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <div>
          <Typography variant="h5" >Super Notes</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div style={{ background: "#f9f9f9", width: "100%" }}>
        
          {children}
          
      </div>
    </div>
  );
}

export default Layout;
