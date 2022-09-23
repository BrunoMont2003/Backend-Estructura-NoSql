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
    token: {
      secret: process.env.TOKEN_SECRET,
      expiresIn: '1d'
    }
  }
}

export default config
