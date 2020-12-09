const express=require('express');
const bodyParser=require('body-parser');
const knex=require('knex')({
  client:'pg',
  connection: 'postgres://ocdlnqxr:3jP9oxE48hddqlbOsinSvMO33z08iITI@isilo.db.elephantsql.com:5432/ocdlnqxr'
});

const app=express();
app.use(bodyParser.json());

knex.schema.createTable('user', (table) => {
  table.increments('id')
  table.string('data')
}).then(()=>
{
  console.log("Table Created");
})
.catch((err)=>{
  console.log(err);
})

app.get('/',(req,res)=>{
  const {id}=req.body;
  knex.from('user')
    .select('*')
      .where({
        id:id
      })
  .then((result)=>{
    res.statusCode=200;
    res.json(result);
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.post('/',(req,res)=>{
  const {id,data}=req.body;
  knex('user')
  .insert({
    id:id,
    data:data
  })
  .then(()=>{
    res.statusCode=200;
    res.json("Successfull!")
  })
  .catch((err)=>{
    console.log(err);
  })
})

console.log("Working");

app.listen(process.env.PORT || 3000,()=>
{
  console.log('working');
})
