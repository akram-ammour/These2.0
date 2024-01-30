"use server"
import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/file.json');
  
  try {
    // Read the json file with utf-8 encoding
    const jsonData = await fsPromises.readFile(filePath, 'utf-8');
    // Parse data as json
    const {data} = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    throw error; 
  }
}