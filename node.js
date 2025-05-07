
import { rejects } from 'assert'
import express from 'express'
import fs from 'fs'
const app = express()
const PORT = 8000

function readFile(filepath){
    return new Promise((resolve, reject) =>{
        fs.readFile(filepath,data, 'utf-8', (err)=>{
            if (err) return reject(err)
                resolve(data)
        })
    }

    )
}

function writeFile(filepath){
    return new Promise((resolve, reject) =>{
        fs.writeFile(filepath,data, 'utf-8', (err)=>{
            if (err) return reject(err)
                resolve(null)
        })
    }

    )
}

app.get()