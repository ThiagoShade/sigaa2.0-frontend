import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function ViewClass() {
  const [materia, setmateria] = useState("");
  const [horario, sethorario] = useState("");
  const [capacidade, setcapacidade] = useState("");
  const [professor, setProfessor] = useState("");
  const [rooms, setRooms] = useState([{ id: 1, horario: "", numero: "" }]);
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3333/turmas", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(
          response.json().then((data) => {
            const subjects = data;
            console.log(...data);
          })
        );
        // Você pode adicionar lógica adicional aqui, como limpar o formulário ou exibir uma mensagem de sucesso.
      } else {
        console.error("Erro ao enviar dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Consultar turmas
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="subject-label">Matéria</InputLabel>
        <Select
          labelId="subject-label"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Salvar
      </Button>
    </Box>
  );
}

export default ViewClass;
