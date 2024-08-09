const{Router}= require('express');

const router= Router();

const compraCtr1= require('../controllers/compra.controller');

router.get('/compra/hello',(req,res)=>res.send('hola son las compras!!'));

router.get('/compra/:id', compraCtr1.getCompra);

router.get('/compra', compraCtr1.getCompra);

router.post('/compra', compraCtr1.createCompra);

router.delete('/compra/:id', compraCtr1.deleteCompra);

router.put('/compra/:id', compraCtr1.editCompra);

module.exports= router;