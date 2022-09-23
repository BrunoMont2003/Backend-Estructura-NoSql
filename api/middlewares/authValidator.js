import config from '../../config/index.js'
import jwt from 'jwt-simple'
const authValidator = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) return res.status(401).json({ msg: 'No se encontró La cabecera Authorization ' })
  try {
    const payload = jwt.decode(token, config.security.token.secret)
    req.user = payload
    next()
  } catch (error) {
    return res.status(401).json({ msg: 'Token inválido' })
  }
}
export default authValidator
