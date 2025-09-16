const express = require("express");
const app = express();

const students = {
    1: {
        "name": "Pia",
        "lastName": "",
        "email": "@unisabana.edu.co",
        "id": ""
    },
    2: {
        "name": "Laura Catalina",
        "lastName": "Hernández Rodríguez",
        "email": "lauraherrod@unisabana.edu.co",
        "id": "0000337853"
    }
};

function getStudentByIdParam(idParam) {
    const idNum = Number(idParam);
    if (!Number.isInteger(idNum) || idNum < 1) return { error: "ID inválido" };
    const student = students[idNum];
    if (!student) return { error: "Estudiante no encontrado", notFound: true };
    return { student };
}

app.get("/user-info/:id", (req, res) => {
    const result = getStudentByIdParam(req.params.id);
    if (result.error && result.notFound) return res.status(404).json({ error: result.error });
    if (result.error) return res.status(400).json({ error: result.error });
    return res.json(result.student);
});

app.get("/api/user-info/:id", (req, res) => {
    const result = getStudentByIdParam(req.params.id);
    if (result.error && result.notFound) return res.status(404).json({ error: result.error });
    if (result.error) return res.status(400).json({ error: result.error });
    return res.json(result.student);
});

module.exports = app;