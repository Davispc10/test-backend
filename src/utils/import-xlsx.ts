import xlsx from 'xlsx/xlsx';
import {camelCase} from 'lodash/string'

class ImportXlsx {
  async handle(file: any): Promise<any> {
    var result = []
    var workbook = xlsx.readFile(file.path);
    var sheet_name_list = workbook.SheetNames;
    
    const json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
    
    json.forEach(element => {
      delete element.row;
      
      const camelCaseKeys = (obj) =>
      Object.keys(obj).reduce((ccObj, field) => ({
        ...ccObj,
        [camelCase(field)]: obj[field]
      }), {})
      
      const removeNumbers = (obj) =>
      Object.keys(obj).reduce((ccObj, field) => ({
        ...ccObj,
        [field.replace(/100/g, '')]: obj[field]
      }), {})
    
      
      const ok = removeNumbers(element)
      
      const camelCased = camelCaseKeys(ok)

        
      result.push(camelCased) 

    });

    return result
  }
}

export { ImportXlsx }
