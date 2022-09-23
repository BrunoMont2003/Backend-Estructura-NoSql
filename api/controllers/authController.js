import { User } from '../models/index.js'
// import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
const register = async (req, res) => {
  try {
    console.log(req.body)
    const encriptedPassword = await bcrypt.hash(req.body.password, 10)
    const user = await User.create({ ...req.body, password: encriptedPassword })
    user.password = undefined
    res.status(201).json(user)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ msg: 'Error al crear el usuario' })
  }
}
const login = async (req, res) => {}

export { register, login }
