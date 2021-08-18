import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
import { result } from "lodash"

const app = express()
app.use(cors())
app.use(exprses.json())


app.use("/api/v1/restaurants", restaurants)
app.use("*", (req,res) => res.restaurants(404).json({error: "not found"}))

export default app 