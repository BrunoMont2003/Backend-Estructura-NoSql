import { Author } from '../models/index.js'

const create = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    return res.json({
      msg: 'Autor creado satisfactoriamente',
      author
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al intentar crear autor',
      error
    })
  }
}

const getAll = async (_, res) => {
  try {
    const authors = await Author.find().populate('books')
    return res.json({
      msg: 'Autores encontrados',
      authors
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al consultar autores',
      error
    })
  }
}

const getById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books')
    return res.json({
      msg: 'Autor encontrado',
      author
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al consultar autor',
      error
    })
  }
}
const updateById = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).populate('books')
    return res.json({
      msg: 'Autor actualizado',
      author
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar autor',
      error
    })
  }
}
const deleteById = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id).populate('books')
    return res.json({
      msg: 'Autor eliminado',
      author
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error al eliminar autor',
      error
    })
  }
}

export { create, getAll, getById, updateById, deleteById }
