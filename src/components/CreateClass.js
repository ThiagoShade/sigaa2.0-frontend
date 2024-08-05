// src/components/CreateClass.js
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  FormControl,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const CreateClass = () => {
  const [materia, setmateria] = useState("");
  const [horario, sethorario] = useState("");
  const [capacidade, setcapacidade] = useState("");
  const [professor, setProfessor] = useState("");
  const [rooms, setRooms] = useState([{ id: 1, horario: "", numero: "" }]);

  const handleSubmit = async () => {
    const payload = {
      materia,
      horario,
      capacidade,
      professor,
      salas: rooms.map(({ horario, numero }) => ({ horario, numero })), // Enviar horários e salas como um array de objetos
    };

    try {
      const response = await fetch("http://127.0.0.1:3333/turmas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Turma criada com sucesso!");
        // Você pode adicionar lógica adicional aqui, como limpar o formulário ou exibir uma mensagem de sucesso.
      } else {
        console.error("Erro ao enviar dados:", response.statusText);
        alert("Erro ao criar a turma!");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const handleRoomChange = (id, key, value) => {
    setRooms(
      rooms.map((room) => (room.id === id ? { ...room, [key]: value } : room))
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, horario: "", numero: "" }]);
  };

  const removeRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
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
        Criar turma
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Matéria"
          value={materia}
          onChange={(e) => setmateria(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Horário"
          value={horario}
          onChange={(e) => sethorario(e.target.value)}
        />
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        label="Capacidade de alunos"
        value={capacidade}
        onChange={(e) => setcapacidade(Number(e.target.value))}
      />
      <FormControl fullWidth margin="normal">
        <TextField
          label="Professor"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
        />
      </FormControl>
      <Typography variant="h6" gutterBottom>
        Salas
      </Typography>
      {rooms.map((room) => (
        <Box
          key={room.id}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: 1,
          }}
        >
          <TextField
            label={`Horário ${room.id}`}
            value={room.horario}
            onChange={(e) =>
              handleRoomChange(room.id, "horario", e.target.value)
            }
            sx={{ flex: 1, marginRight: 1 }}
          />
          <TextField
            label={`Sala ${room.id}`}
            value={room.numero}
            onChange={(e) =>
              handleRoomChange(room.id, "numero", e.target.value)
            }
            sx={{ flex: 1, marginRight: 1 }}
          />
          <IconButton
            onClick={() => removeRoom(room.id)}
            disabled={rooms.length === 1}
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button onClick={addRoom} startIcon={<Add />} sx={{ marginBottom: 2 }}>
        Adicionar Sala
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Salvar
      </Button>
    </Box>
  );
};

export default CreateClass;
