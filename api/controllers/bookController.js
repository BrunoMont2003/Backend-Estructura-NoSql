import { Book } from "../models/index.js";

const create = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.json({
      msg: "Libro creado satisfactoriamente",
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al intentar crear libro",
      error,
    });
  }
};

const getAll = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: "Libros encontrados",
      books,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al consultar libros",
      error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.json({
      msg: "Libro encontrado",
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al consultar libro",
      error,
    });
  }
};
const updateById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Libro actualizado",
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actualizar libro",
      error,
    });
  }
};
const deleteById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    return res.json({
      msg: "Libro eliminado",
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al eliminar libro",
      error,
    });
  }
};

export { create, getAll, getById, updateById, deleteById };
