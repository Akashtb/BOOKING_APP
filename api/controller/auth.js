import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin:req.body.isAdmin
    })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return next(createError(404, 'user not found!'))

    const isPassword = await bcrypt.compare(req.body.password, user.password)
    if (!isPassword) return next(createError(400, 'password is incorrect!'))

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    )

    const { isAdmin, password, ...otherDetails } = user._doc

    res.cookie('access_token', token,   
      {
        httpOnly: true,
      })
      .status(200)
      .json({ otherDetails })
  } catch (error) {
    next(error)
  }
}
 