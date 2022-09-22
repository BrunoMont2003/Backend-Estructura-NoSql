import { faker } from '@faker-js/faker'
import config from '../../../config/index.js'
import axios from 'axios'
import { shuffleArray } from '../../helpers/array.js'

export class AuthorFactory {
  static async getBooksIds (numberOfBooks) {
    try {
      const { data: { books } } = await axios.get(`${config.app.url}/books`)
      shuffleArray(books)
      console.log('books', books)
      const booksIds = books.slice(0, numberOfBooks).map(book => book._id)
      return booksIds
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createAuthor () {
    try {
      const numberOfBooks = faker.random.numeric(1)
      console.log('numberOfBooks', numberOfBooks)
      const bookIds = await this.getBooksIds(numberOfBooks)
      const { data: author } = await axios.post(`${config.app.url}/authors`, {
        name: faker.name.fullName(),
        birthDate: faker.date.past(),
        books: [...bookIds]
      })
      console.log('Author created', author)
      return author
    } catch (error) {
      console.log(error.message)
    }
  }
}
