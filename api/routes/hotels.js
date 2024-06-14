import express from 'express'
import {
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from '../controller/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//create
router.post('/', verifyAdmin, createHotel)
//update
router.put('/:id', verifyAdmin, updateHotel)
//delete
router.delete('/:id', verifyAdmin, deleteHotel)
//get
router.get('/find/:id', getHotel)
//getAll
router.get('/', getAllHotel)

router.get('/countByCity', countByCity)
router.get('/countByType', getAllHotel)


export default router
