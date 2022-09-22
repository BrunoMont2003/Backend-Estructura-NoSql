import { BookFactory } from '../factories/book.factory.js'

export class BookSeeder {
  async seed () {
    for (let i = 0; i < 100; i++) {
      await BookFactory.createBook()
    }
  }
}
