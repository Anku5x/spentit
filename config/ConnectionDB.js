import mongoose from "mongoose";
//connection to mongodb url with MONGO_URL env pakage: 
async function ConnectionDB()  {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
            console.log(error);
    }
}
export default ConnectionDB;



