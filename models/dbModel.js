'use strict'

const mongoose = require('mongoose')

const dbModelSchema = mongoose.Schema({
  title: String,
  description: String,
})

const dbModel = mongoose.model('dbModel', dbModelSchema)
module.exports = dbModel