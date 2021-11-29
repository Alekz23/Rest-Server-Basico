

const{ response }= require('express');

const usuariosGet= (req, res= response)=>{

    const {q, nombre='default', apikey, page=1}= req.query;

    res.json({
        msg: 'get api- controlador',
        q,
        nombre,
        apikey,
        page
    });
}

const usuariosPost= (req, res= response)=>{

    const {nombre, edad} = req.body;
    res.json({
        msg: 'post api- controlador',
        nombre, edad
    });
}

const usuariosPut= (req, res= response)=>{

    const {id}= req.params;

    res.json({
        msg: 'put api- controlador',
        id
    });
}

const usuariosDelete= (req, res= response)=>{
    res.json({
        msg: 'delete api- controlador'
    });
}



module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}