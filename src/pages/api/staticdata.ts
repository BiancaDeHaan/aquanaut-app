import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";

const numChapters = 2;

export default async function handler(req : NextApiRequest, res :NextApiResponse) {
  //Find the absolute path of the json directory
  const { query } = req.query;
  const jsonDirectory = path.join(process.cwd(), 'src/chapters');
  //Read the json data file data.json
  var fileContents;
  try {
    fileContents = await fs.readFile(jsonDirectory + '/' + query + '.json', 'utf8');
  } catch (err) {
    // File not found error 
     res.status(200).json({ state: 'game_over' });
     return;
  }  
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}