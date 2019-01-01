export const SELECT_COMPANY = 'SELECT_COMPANY'

export const selectCompany = function(company){
  return {
    type: SELECT_COMPANY,
    company: company
  }  
}