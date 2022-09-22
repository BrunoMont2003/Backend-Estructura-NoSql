import { AuthorFactory } from '../factories/author.factory.js'

export class AuthorSeeder {
  async seed () {
    for (let i = 0; i < 100; i++) {
      await AuthorFactory.createAuthor()
    }
  }
}
