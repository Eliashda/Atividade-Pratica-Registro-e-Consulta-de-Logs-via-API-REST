
import { rejects } from 'assert'
import express from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
const app = express()
const PORT = 8000
app.use(express.text())

function readFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, data, 'utf-8', (err) => {
            if (err) return reject(err)
            resolve(data)
        })
    }

    )
}

function writeFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, data, 'utf-8', (err) => {
            if (err) return reject(err)
            resolve(null)
        })
    }

    )
}
const logsPath = "logs.txt"
async function newLog(name) {
    const date = Date.now()
    const uuid = uuidv4()
    const log = `${uuid}- ${date}- ${name}`

    const allLogs = await readFile(logsPath)
    await writeFile(logsPath, allLogs + "\n" + log)
    return log
}
app.post('logs', (req, res) => {
    if (!req.body) return res.status(400).send("voce ja passou seu nome no corpo")

    newLog(req.body).then(log => {
        res.status(204).send()
    }).catch(err =>
        res.status(500).send(err)
    )
}
)