const express=require('express');
const router=express.Router();
const {createcubage,getCubage,EditCubage,DeleteCubage}=require('../controllers/CubageControllers');

router.post('/ajouter-elem-cubage',createcubage);
router.get('/getcubage',getCubage);
router.delete('/DeleteCubage',DeleteCubage);









module.exports=router;