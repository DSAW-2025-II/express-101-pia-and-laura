const express = require("express");
const app = express();
const students = {
    2: {
        "name": "Laura Catalina",
        "lastName": "Hernández Rodríguez",
        "email": "lauraherrod@unisabana.edu.co",
        "id": "0000337853"
    }
};  
app.get("/user-info/:id", (req, res) => {
    const { id } = req.params;
    const idValue = Number (id);
    if (!Number.isInteger(idValue) || idValue < 1 || idValue > 2) {
        return res.status(400).json({ error: "ID inválido. Debe ser 1 o 2." });
    }
    if (students[idValue]){
        return res.json(students[idValue]);
    }
    return res.status(404).json({ error: "Estudiante no encontrado." });
});

module.exports = app;
