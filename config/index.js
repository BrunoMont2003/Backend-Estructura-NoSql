import dotenv from 'dotenv'

dotenv.config()

const config = {
  server: {
    port: 3000
  },
  database: {
    uri: process.env.DB_URI
  },
  app: {
    url: process.env.APP_URL
  },
  security: {
    attempts: 5
  }
}

export default config
