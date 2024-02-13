import mongoose from 'mongoose'
//creating transaction schema
const transactionSchema = new mongoose.Schema({ 
    userid:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required: [true, 'category is required'],
    },
    discription:{
        type:String,
    },
    date:{
        type:Date,
        required:[true, 'date is required']
    },
    amount:{
        type:Number,
        required:[true, 'amount is required'],
    },
    textCol:{
        type:String,
    }
},{timestamps:true});
//creating transaction model in MongoDB and passing transaction schema in it. 
const transactionModel = mongoose.model('transactions', transactionSchema)
//exporting transaction model, you have to export and use Model function and not schema itself. 
export default transactionModel;