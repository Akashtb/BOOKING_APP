import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controller/user.js'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()
//create
router.post('/',createUser)

// router.get('/checkAuthentication',verifyToken,(req,res,next)=>{
//     res.json("hello user your are logged in")
// })
 
// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//   res.json('hello user your are logged in and you can delete the account')
// })

// router.get('/checkAdmin/:id', verifyUser, (req, res, next) => {
//   res.json('hello Admin your are logged in and you can delete all the account')
// })


//update
router.put('/:id', verifyUser, updateUser)
//delete 
router.delete('/:id',verifyUser, deleteUser)
//get
router.get('/:id',verifyUser,getUser)
//getAll
router.get('/', verifyAdmin, getAllUser)

export default router
