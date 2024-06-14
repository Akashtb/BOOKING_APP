import express from 'express'
import { verifyAdmin } from '../utils/verifyToken.js'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controller/room.js'
const router = express.Router()
//create
router.post('/:hotelId', verifyAdmin, createRoom)
//update
router.put('/:id', verifyAdmin, updateRoom)
//delete
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom)
//get
router.get('/:id', getRoom)
//getAll  
router.get('/', getAllRooms)
export default router
