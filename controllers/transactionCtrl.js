import transactionModel from "../models/transactionModel.js";
import moment from 'moment'
//getting all transactions of the user:
const getAllTransactions = async (req, res) => {
  try {
    const {filterValues} = req.body;                                           //filter values applied here
    const transactions = await transactionModel.find({userid: req.body.userid,      //MongoDB applies to everything with ({}) nothing in brackets
    ...(filterValues === 'clear' ?{
      date: {
        $gt: moment().subtract(Number(365), 'd').toDate(),
    },
  } : {
      date: {
      $gt: moment().subtract(Number(filterValues.date), 'd').toDate(),
  },
  type: filterValues.type,
})
    });                                                                          
    res.status(200).json(transactions);                                          
  } catch (error) {
    console.log(error);
  }
};
//adding new transactions:
const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save(); //while using res keyword with a status code like (201), ->
    res.status(201).send("Transaction created"); // you cannot use res.send, you have to use res.status, or res.sendStatus
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
//deleting transactions 
const deleteTransactions = async (req, res) => {
  try{
    await transactionModel.findOneAndDelete({_id:req.body.transactionID});
    res.status(200).send('Transaction Deleted')
  }catch(error){
    console.log(error);
  }
}
export { getAllTransactions, addTransaction, deleteTransactions };
