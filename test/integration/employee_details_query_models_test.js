'use strict'

describe('.EmployeeDetailsQueryModel',()=>{
    describe('fetchEmployeeByNtid()',()=>{
        it('should give employe deetails when ntid exist in db',(done)=>{
            EmployeeDetailsQueryModel.fetchEmployeeByNtid("ntid",(data)=>{
                done()
             })
            
        })
    })
})

