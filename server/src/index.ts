import express from "express"
import {schema} from './Schema'
import { graphqlHTTP } from "express-graphql"
import cors from "cors"
import {createConnection} from "typeorm"
import { Users } from "./Entities/Users"

const main = async () => {

    await createConnection({
        type:"mysql",
        database:"cruddb",
        username:"root",
        password: "q1w2e3r4t5y6",
        logging: true,
        synchronize: false,
        entities: [Users],

    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(
        "/graphql",graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(3001,()=>{
        console.log('server running on port 3001')
    } )
}


main().catch((err) => {
    console.log(err)
})