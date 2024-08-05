// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CreateClass from "./components/CreateClass";
import EditClass from "./components/EditClass";
import ViewClasses from "./components/ViewClasses";
import Calendar from "./components/Calendar";
import { CssBaseline, Box, Toolbar, AppBar, Typography } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Sigaa 2.0
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/create-class" element={<CreateClass />} />
            <Route path="/edit-class" element={<EditClass />} />
            <Route path="/view-classes" element={<ViewClasses />} />
            <Route path="/calendar" element={<Calendar />} />

            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
