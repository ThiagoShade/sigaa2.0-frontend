// src/components/Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Sigaa 2.0" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Semestre" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Definir calendário" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Turmas" />
        </ListItem>
        <ListItem button component={Link} to="/create-class">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Criar turma" />
        </ListItem>
        <ListItem button component={Link} to="/edit-class">
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Editar turma" />
        </ListItem>
        <ListItem button component={Link} to="/view-classes">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Consultar turmas" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
