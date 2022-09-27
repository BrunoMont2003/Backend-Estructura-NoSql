import { User } from '../models/index.js'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'
import config from '../../config/index.js'
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
const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) return res.status(404).json({ msg: 'Credenciales inválidas' })
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(401).json({ msg: 'Credenciales inválidas' })
    const payload = {
      id: user.id
    }
    const token = jwt.encode(payload, config.security.token.secret)
    res.status(200).json({ msg: 'Bienvenido', token })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ msg: 'Error al iniciar sesión' })
  }
}

export { register, login }
