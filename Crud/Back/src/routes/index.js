const { Router } = require('express');
const router =  Router();

const { getUsers, createUser, getUsersById, deleteUser, updateUser } = require('../controllers/index.controller')

router.get('/getusers', getUsers);     
router.get('/usersid/:id', getUsersById);     
router.post('/createusers', createUser);
router.put('/updateusers/:id' , updateUser)
router.delete('/deleteusers/:id', deleteUser);


module.exports = router;