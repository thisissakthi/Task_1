const express =require('express')
const {sequelize,users}=require('../models')
const usersrouter=express()
usersrouter.use(express.json())

usersrouter.get('/',async(req,res)=>{
  const{user_id}=req.body
  try{
    const user=await users.findAll({
      where:{user_id}})
    return res.json(user)
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json(err)
  }
})

usersrouter.put('/',async(req,res)=>{
  const{user_id,email}=req.body
  try{
    await users.update({
      email
    },{where:{
      user_id
    }});
    return res.status(200).json('updated')
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json(err)
  }
})


usersrouter.post('/',async(req,res)=>{
  const {name,email}=req.body
  try{
    const user=await users.create({name,email})
    return res.json(user)
  }
  catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

usersrouter.delete('/',async(req,res)=>{
  const {user_id}=req.body
  try{
    await users.destroy({where:{user_id}});
    return res.status(200).json('deleted')
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json(err)
  }
})
module.exports=usersrouter;
