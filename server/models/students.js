const model = require('mongoose').model;

const schema = model('students').schema;

module.exports = mongoose.model('students', schema)