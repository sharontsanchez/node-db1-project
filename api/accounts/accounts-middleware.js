const Account = require('./accounts-model')
const db = require('../../data/db-config')


exports.checkAccountPayload = (req, res, next) => {
  if (!req.body.name || req.body.budget === undefined) {
    next({ status: 400, message: "name and budget are required" });
  } else if (typeof req.body.name !== "string") {
    next({ status: 400, message: "name of account must be a string" });
  } else if (typeof req.body.budget !== "number") {
    next({ status: 400, message: "budget of account must be a number" });
  } else if (!req.body.name.trim()) {
    next({ status: 400, message: "name and budget are required" });
  } else if (3 > req.body.name.trim().length  || req.body.name.trim().length > 100) {
    next({ status: 400, message: "name of account must be between 3 and 100" });
  } else if(req.body.budget < 0 || req.body.budget >1000000){
    next({ status: 400, message: "budget of account is too large or too small"  });
  } else if(req.body.name && typeof req.body.budget === 'number') {
    req.validatedAccount = {
      ...req.body,
      name: req.body.name.trim()
    }
    next()
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  try{
    const existing = await db('accounts')
    .where('name', req.body.name.trim())
    .first()

    if(existing){
      next ({status: 400, message: 'that name is taken'})
    } else{
      next()
    }
  } catch (err){
    next(err)
  }
}

exports.checkAccountId =  async (req, res, next) => {
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({
        status: 404, message: 'account not found'
      })
    } else {
      req.account = account
      next()
    }
  } catch(err){
    next(err)
  }
}
