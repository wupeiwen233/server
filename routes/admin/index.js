module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Menulist = require('../../models/Menulist')
  const Namelist = require('../../models/Namelist')
  const Foodlist = require('../../models/Namelist')
  router.post('/menulist', async (req, res) => {
    const model = await Menulist.update(
      { name: 'menu' },
      { $set: req.body },
      {
        new: true,
        rawResult: true,
        upsert: true,
      }
    )
    res.send(model)
  })
  router.get('/menulist',async(req,res)=>{
    const model = await Menulist.find({ name: 'menu' })
    res.send(model)
  })


  router.post('/namelist', async (req, res) => {
    const model = await Namelist.update(
      { name: 'name' },
      { $set: req.body },
      {
        new: true,
        rawResult: true,
        upsert: true,
      }
    )
    res.send(model)
  })
  router.get('/namelist',async(req,res)=>{
    const model = await Namelist.find({ name: 'name' })
    res.send(model)
  })


  router.post('/foodlist', async (req, res) => {
    const model = await Foodlist.update(
      { name: 'food' },
      { $set: req.body },
      {
        new: true,
        rawResult: true,
        upsert: true,
      }
    )
    res.send(model)
  })
  router.get('/foodlist',async(req,res)=>{
    const model = await Foodlist.find({ name: 'food' })
    res.send(model)
  })
  
  app.use('/admin/api', router)
}
