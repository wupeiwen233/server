module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Menulist = require('../../models/Menulist')
  router.post('/menulist', async (req, res) => {
    console.log(req.body)
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
    const model = await Menulist.find()
    res.send(model)
  })
  app.use('/admin/api', router)
}
