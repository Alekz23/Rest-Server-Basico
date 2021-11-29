
const {Router}= require('express');


const{usuariosGet, usuariosPost, usuariosPut, usuariosDelete} = require('../controllers/usuarios');
const router = Router();


router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);



/* router.put('/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'put api'
    });
});


router.post('/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'post api'
    });
});


router.delete('/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'delte api'
    });
}) */;




module.exports= router;