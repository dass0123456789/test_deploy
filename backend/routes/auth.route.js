import express from "express"
import {register,getAllUser} from "../controllers/auth.controller.js"
const route =express.Router()

route.get('/listalluer',getAllUser)
route.post('/register',register)




export default route