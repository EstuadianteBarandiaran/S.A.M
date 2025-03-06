const express = require('express');
const path = require('path');
const ejs=require('ejs')

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
            res.render('MedicoControl/indexControl.ejs');
        });
        this.app.get('/CRUDUsuarios', (req, res) => {
            res.render('MedicoControl/CRUDUsuarios.ejs');
        });
        this.app.get('/ControlConsulta', (req, res) => {
            res.render('MedicoControl/ControlConsulta.ejs');
        });
        this.app.get('/Medicos', (req, res) => {
            res.MedicoControl('MedicoControl/Medicos.ejs');
        });
        this.app.get('/Registro', (req, res) => {
            res.render('MedicoControl/Registro.ejs');
        });
        
        //TODOS
        this.app.get('/ContactoControl', (req, res) => {
            res.render('MedicoControl/Contacto.ejs');
        });

        //Medicos Especiales
        this.app.get('/indexMedico', (req, res) => {
            res.render('MedicosEspeciales/Consultas.ejs');
        });
        this.app.get('/ContactoMedico', (req, res) => {
            res.render( 'MedicosEspeciales/Contacto.ejs');
        });
        
        this.app.get('/ConsultaP', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/ConsultaP.html'));
        });
        
        
        this.app.get('/indexPaciente', (req, res) => {
            res.render('Pacientes/Consulta.ejs');
        });

        this.app.get('/HistorialMedico', (req, res) => {
            res.render('Pacientes/HistorialMedico.ejs');
        });
        //TODOS
        this.app.get('/ContactoPaciente', (req, res) => {
            res.render('Pacientes/Contacto.ejs');
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
