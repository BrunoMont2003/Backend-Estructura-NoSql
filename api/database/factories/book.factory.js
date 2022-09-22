import { faker } from '@faker-js/faker'
import config from '../../../config/index.js'
import axios from 'axios'
export class BookFactory {
  static async createBook () {
    try {
      const { data: book } = await axios.post(`${config.app.url}/books`, {
        title: faker.lorem.words(3),
        isbn: faker.random.numeric(13),
        editorial: faker.company.name(),
        pages: faker.random.numeric(3),
        price: faker.random.numeric(3),
        publishDate: faker.date.past()
      })
      console.log('Libro creado', book)
      return book
    } catch (error) {
      console.log(error.message)
    }
  }
}
