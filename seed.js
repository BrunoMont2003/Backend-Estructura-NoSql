import { BookSeeder } from './api/database/seeders/book.seeder.js'
import { AuthorSeeder } from './api/database/seeders/author.seeder.js'

async function main () {
  // await new BookSeeder().seed()
  await new AuthorSeeder().seed()
}

await main()
