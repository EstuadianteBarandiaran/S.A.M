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
        //MEDICO DE CONTROL
        this.app.get('/indexMedicoControl', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/MedicoControl/indexControl.ejs'));
        });
        this.app.get('/CRUDUsuarios', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/CRUDUsuarios.ejs'));
        });
        this.app.get('/CRUDUsuarios', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/indexControl.ejs'));
        });
        this.app.get('/Medicos', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/Medicos.ejs'));
        });

        //Medicos Especiales
        this.app.get('/indexMedico', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/MedicoEspecialista/Consultas.ejs'));
        });
        
        
        this.app.get('/indexPaciente', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/Pacientes/Consulta.ejs'));
        });
        this.app.get('/HistorialMedico', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/Pacientes/HistorialMedico.ejs'));
        });
        //TODOS
        this.app.get('/Contacto', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/Contacto.ejs'));
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
