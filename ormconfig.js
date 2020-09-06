require('dotenv').config()

module.exports = {
  name: 'default',
  type: "mongodb",
  url: String(process.env.MONGO_DB_URL),
  host: process.env.DB_HOST,
  port: Number(process.env.MONGO_DB_PORT),
  username: String(process.env.MONGO_DB_USER),
  password: String(process.env.MONGO_DB_PASSWORD),
  database: String(process.env.MONGO_DB_NAME),
  useUnifiedTopology: true,
  entities: [
    "./dist/modules/**/infra/typeorm/schemas/*.js"
  ]
}
