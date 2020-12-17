const express=require('express');
const {sequelize}=require('./models');
const Users=require('./routes/user')
const Application=require('./routes/application')
const app=express();
app.use(express.json());

app.use('/users',Users);
app.use('/app',Application)
app.listen(process.env.PORT || 3000,async ()=>
{
  await sequelize.sync()
  console.log('working');
})
