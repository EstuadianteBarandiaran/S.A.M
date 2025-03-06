const express = require('express');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares() {
        this.app.use(express.static('./public'));
        this.app.use(express.json());
        this.app.set('view engine', 'ejs');
    }

    routes() {
        this.app.get('/indexMedicoControl', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/MedicoControl/indexControl.html'));
        });

        this.app.get('/indexMedico', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/MedicoEspecialista/indexMedico.html'));
        });

        this.app.get('/indexPaciente', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/Pacientes/indexPaciente.html'));
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
}

const server = new Server();
module.exports = Server;
