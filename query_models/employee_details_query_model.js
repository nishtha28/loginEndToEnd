'use strict'
const EmployeeDetailsModel = require('../model/employee_details')

class EmployeeDetailsQueryModel {
    static fetchEmployeeByNtid(ntid,cb) {
        EmployeeDetailsModel.query(function(qb){
        }).fetch().then(data => {
            cb(data)
        })

    }
}
module.exports = EmployeeDetailsQueryModel