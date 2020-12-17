const express=require('express')
const {sequelize,applications,categories}=require('../models')
const approuter=express();
approuter.use(express.json())

approuter.get('/',async (req,res)=>{
  try{
    const app=await applications.findAll()
    return res.json(app)
  }
  catch(err)
  {
    return res.status(500).json(err)
  }
})

approuter.post('/',async(req,res)=>{
const {app_id,app_name,app_url,app_owner_id,category_id,rating}=req.body
  try {
    const app=await applications.create({app_id,app_name,app_url,app_owner_id,category_id,rating})
    return res.json(app)
  } catch (e) {
    return res.status(500).json(e)
  } finally {
    console.log('added')
  }
})

approuter.put('/',async(req,res)=>{
  const {app_url,app_name,category_id,app_id}=req.body
  try{
    await applications.update({
        app_url,app_name,category_id
      },{
        where:{app_id}
      })
      return res.status(200).json('Success')
  }catch(err){
    return res.status(500).json(err)
  }
})

approuter.delete('/',async(req,res)=>{
  const {app_id}=req.body
  try {
    await applications.destroy({where:{app_id}});
    return res.status(200).json('Success')
  } catch (e) {
    return res.status(500).json(e)
  } finally {
    console.log('Done!')
  }
})

approuter.get('/:category',async(req,res)=>{
try {
  const id=await categories.findAll({
    where:{category}
  })
  const app=await applications.findAll({
    where:{
      app_id:id.json().app_id
    }
  })
  return res.json(app)
} catch (e) {
  return res.status(500).json(e)
} finally {
console.log('Success')
}
})
module.exports=approuter;
