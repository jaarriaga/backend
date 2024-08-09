const{Router}= require('express');

const router= Router();

const empleadosCtrl= require('../controllers/empleados.controller');

router.get('/empleados/saludo',(req,res)=>res.send('hola es martes y ya casi son vavaciones'));

router.get('/empleados/:id', empleadosCtrl.getEmpleado);
/*

router.get('/empleados', mascotasCtr1.getMascotas);

router.post('/mascotas', mascotasCtr1.createMascota);

router.delete('/mascotas/:id', mascotasCtr1.deleteMascota);

router.put('/mascotas/:id', mascotasCtr1.editMascota);
*/

module.exports= router;