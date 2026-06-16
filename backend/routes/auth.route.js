import express from "express"
import {register,getAllUser} from "../controllers/auth.controller.js"
import uploads from "../middleware/upload.js"
const route =express.Router()

route.get('/listalluer',getAllUser)
route.post('/register',register)
route.post('/uploads',uploads,(req,res,next)=>{res.json({msg:"uploads success"})})

export default route