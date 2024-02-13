import mongoose from "mongoose";
//connection to mongodb url with MONGO_URL env pakage: 
async function ConnectionDB()  {
    try{
        await mongoose.connect(process.env.MONGO_URL); 
        console.log(`Mongo server running on ${mongoose.connection.host}`)
    } catch (error) {
            console.log(error);
    }
}
export default ConnectionDB;



