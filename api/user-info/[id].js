module.exports = (req, res) => {
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
const { id } = req.query;
    const idNum = Number(id);
    if (!Number.isInteger(idNum) || idNum < 1) {
        return res.status(400).json({ error: "ID inválido" });
    }

    const student = students[idNum];
    if (!student) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    return res.status(200).json(student);
};
