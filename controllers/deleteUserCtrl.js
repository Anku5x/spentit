import userModel from "../models/UserModel.js"
import transactionModel from "../models/transactionModel.js";
//user model saves the users in the user collection by using mongose.modal('user', user)
//transaction model saves transactions in the transaction collection by using mongose.modal('transactions', transactions)
//since we need these both routes to delete the user data, we need to import them both in the delete control. 
const  deleteUser = async (req, res) => {
    try{
      await userModel.deleteOne({_id: req.body._id}); //deleteone, because only one user needs to be deleted
      await transactionModel.deleteMany({userid: req.body.userid});//delete many, because many transactions of a single user need to be deleted. 
      res.status(200).send('user Deleted')
    }catch(error){
      console.log(error);
    }
  }

  export {deleteUser};