var db = require('../config/db');

var EmployeeDetailsModel = db.Model.extend({
  tableName: 'employee_details'
});

module.exports = EmployeeDetailsModel;