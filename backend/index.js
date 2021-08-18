import app from ".server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.Port || 800
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    poolSize: 50, /* total connections */
    wtimeout: 2500,
    useNewUrlParse: true
  }
)
.catch(err => {
  console.err(err.stack)
  process.exit(1)
})
.then(async client => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})