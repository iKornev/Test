import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

export default class RecordsService {
    async createRecord(body) {
        try {
            const record = {
                ...body,
                id: uuidv4(),
            }

            const dbResult = await this.getDataFromDB()
            const { records } = dbResult

            records.push(record)

            fs.writeFile('db.json', JSON.stringify(dbResult), (error) => {
                if(error) {
                    console.log(error.message)
                }
            })

            return record
        } catch (e) {
            console.log(e.message)
            throw new Error(e.message)
        }
    }

    async findRecords() {
        try {
            const { records } = await this.getDataFromDB()

            return records
        } catch (e) {
            console.log(e.message)
            throw new Error(e.message)
        }
    }

    getDataFromDB() {
        return new Promise((resolve, reject) => {
            fs.readFile('db.json','utf-8', (err, data) => {
                if (err) {
                    return reject(err);
                }

                return resolve(JSON.parse(data))
            } )
        })
    }
}