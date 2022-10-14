import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

export default class RecordsService {
    createRecord(body) {
        try {
            const record = {
                ...body,
                id: uuidv4(),
            }

            const db = JSON.parse(fs.readFileSync('db.json', "utf-8"))
            const { records } = db
            records.push(record)

            fs.writeFile('db.json', JSON.stringify(db), (error) => {
                if(error) {
                    console.log('Failed to save data')
                }
            })

            return record
        } catch (e) {
            console.log(e.message)
        }
    }

    findRecords() {

        try {
            const db = fs.readFileSync('db.json', "utf-8")
            const { records } = JSON.parse(db);

            return records
        } catch (e) {
            console.log(e.message)
        }
    }
}