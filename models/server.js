const express = require('express');
const cors= require('cors');


class Server{
    constructor(){
        this.app= express();
        this.port= process.env.PORT;
        this.usuariosPath= '/api/usuarios';
        //middleware
        this.middlewares();
        //rutas de mi app
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        // parseo y lectura del body cuando envian un json post
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports= Server;