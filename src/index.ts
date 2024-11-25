import dotenv from 'dotenv'; 
import app from './middlewares/expressMiddleware';
import { ConnectToDb } from './config/dbConfig';

dotenv.config();

const db_uri: string = process.env.MONGO_DB_URL || '';  
const port: number = parseInt(process.env.PORT || '5000', 10);  

if (!db_uri) {
    throw new Error('MONGO_DB_URL is not defined in the .env file');
  }


(async()=>{
  try{
   await ConnectToDb(db_uri)
   app.listen(port,()=>console.log(`Server running on port ${port}`))
  }catch(ex){
    console.error(`Error ${ex}`)
  }
})();  