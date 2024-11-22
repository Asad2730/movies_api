import mongoose from "mongoose";

export const ConnectToDb = async(db_uri:string)=>{
   try{
    const conn = await mongoose.connect(db_uri)
    return conn
   }catch(error){
      throw new Error(`Error astablishaing connection with database ${error}`)
   }
}
