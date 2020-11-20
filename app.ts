import {createConnection, getConnectionOptions, ConnectionOptions} from "typeorm";
import {Alumno} from "./entity/Alumno";

import express from 'express'

const app:express.Application = express()
const port = 3000

try {
  console.debug('====================================================')
  console.debug('             Starting backend...')
  console.debug('====================================================')

  app.get('/', (req:any, res:any) => {
    res.send('Hello papichula!')
  })
  
  getConnectionOptions()
  .then((connectionOptions: ConnectionOptions) => {
    Object.assign(connectionOptions, { type: 'mysql' })
    Object.assign(connectionOptions, { host: 'localhost' })
    Object.assign(connectionOptions, { port: 3306 })
    Object.assign(connectionOptions, { username: 'root' })
    Object.assign(connectionOptions, { password: 'root' })
    Object.assign(connectionOptions, { database: 'escuelita' })
    Object.assign(connectionOptions, { entities: [Alumno, '/entity/*{.ts}'] })
    // create connection with database
    createConnection(connectionOptions)
      .then(async (connection) => {
        await connection.synchronize();
        console.log('Connected to database', connection.driver.database)
      })
      .catch((error) => {
        console.error('TypeORM connection error: ', error)
      })
  })
  .catch((err) => {
    console.error('Unable to set connection options: ', err)
  })

  app.listen(port, () => {
    console.log(`Exampleasas http://localhost:${port}`)
  })

} catch (error) {
  console.error(`Scheiße!!!! algo paso ${error}`)
}