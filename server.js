const express = require("express");
const app = express();

const students = {
    1: {
        "name": "Pia",
        "lastName": "Aroor",
        "email": "piaaroor@unisabana.edu.co",
        "id": "0000334335"
    },
    2: {
        "name": "Laura Catalina",
        "lastName": "Hernández Rodríguez",
        "email": "lauraherrod@unisabana.edu.co",
        "id": "0000337853"
    }
};

function getStudentById(idParam) {
    const idNum = Number(idParam);
    if (!Number.isInteger(idNum) || idNum < 1) {
        return { error: "ID inválido", status: 400 };
    }
    const student = students[idNum];
    if (!student) {
        return { error: "Estudiante no encontrado", status: 404 };
    }
    return { student, status: 200 };
}

app.get("/user-info/:id", (req, res) => {
    const result = getStudentById(req.params.id);
    if (result.error) {
        return res.status(result.status).json({ error: result.error });
    }
    return res.status(200).json(result.student);
});

module.exports = app;