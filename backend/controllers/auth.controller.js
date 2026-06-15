import createError from "../utils/createError.js" 
import prisma from "../config/prisma.js"
import bcrypt from "bcrypt"
export const register = async(req, res, next) => {
  try {
    const {Email,Username,Password}=req.body
    const user=await prisma.users.findFirst({
      where:{
        email:Email
      }
    })
    if(user){
      createError(400,"Email already exsist!!")
    }
    const hashpass=bcrypt.hashSync(Password,10)
    await prisma.users.create({
      data:{
        email:Email,
        username:Username,
        pass_hash:hashpass
      }
    })
    res.json({msg:"register success"})
  }

  catch (err) {
    next(err)
  }
}
export const getAllUser=async(req,res,next)=>{
  try {
    const results=await prisma.users.findMany({
      select:{
        username:true,
        email:true
      }
    })
    res.json({msg:results})
  } catch (err) {
    next(err)
  }
}