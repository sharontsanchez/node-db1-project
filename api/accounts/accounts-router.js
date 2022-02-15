const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try{
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  } catch (err){
    next(err)
  }
})

router.get('/:id', md.checkAccountId,  async (req, res, next) => {
try{
  const account = await Account.getById(req.params.id)
  res.status(200).json(account)
} catch (err) {
  next(err)
}
})


router.post(
  '/',
 md.checkAccountPayload, 
 md.checkAccountNameUnique, 
 async (req, res, next) => {
  try{
    const newAccount = await Account.create({
      name : req.body.name.trim(), 
      budget: req.body.budget,
    })
    res.status(201).json(newAccount)
  } catch (err){
    next(err)
  }
})


router.put(
  '/:id', 
  md.checkAccountId,  
  md.checkAccountPayload, async (req, res, next) => {
    const { id } = req.params
    const { name, budget } = req.body
    try {
      const updatedAccount = await Account
        .updateById(id, { name: name.trim(), budget })
      res.status(200).json(updatedAccount)
    } catch (err) {
      next(err)
    }
  })
  

router.delete('/:id', md.checkAccountId,  async (req, res, next) => {
 
  try{
    await Account.deleteById(req.params.id)
    res.syayus(200).json(req.account)
  } catch (err){
    next(err)
  }
})


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })

})

module.exports = router;
