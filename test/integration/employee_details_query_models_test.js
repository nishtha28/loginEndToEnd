'use strict'
const EmployeeDetailsQueryModel = require('../../query_models/employee_details_query_model')
const EmployeeDetails = require('../../model/employee_details')
const knexFile = require('../../knexfile')
const config = knexFile['test'];
var knex = require("knex")(config);

describe('.EmployeeDetails', () => {
    beforeEach(function (done) {
        done()
    })
afterEach((done) => {
    done()
})
before((done) => {
    knex("employee_details")
.truncate()
    .then((collection, err) => {
    console.log('came here data deleted')
    knex("employee_details")
.insert({ 'employee_name': 'Dineshkumar', 'ntid': 'dsuve' })
    .then((collection, err) => {
})
.catch(err => {
    console.error(err)
}).finally(() => {

});
})
.catch(err => {
    console.error(err)
})
.finally(() => {
    done()
});
});
after((done) => {
    done()
});
describe('fetchEmployeeByNtid()', function () {
    it('should give employe deetails when ntid exist in db', async function () {
        EmployeeDetailsQueryModel.fetchEmployeeByNtid("ntid", (data) => {
            console.log("data-------->", data.attributes.employee_name)
            expect(data.attributes.employee_name).to.equal('Dineshkumar')
    })

    })
})
})