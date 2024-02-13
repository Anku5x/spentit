import userModel from "../models/UserModel.js"
//login controller requesting email and password from body and checking it with mongodb
//email and password labels should be spelled exactly the same in userModel,userControllers, and frontend form labels.
const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({$and: [{email} , {password}]});
        if(!user){
            return res.status(404).send('User Not Found!');
        }else{
            res.status(200).json({user, success: true,});
        }
    }catch(error){
        res.status(400).json({
            success: false,
            error,
        })
    }
}
//register, Saving from website body, rest is similar to login above.
const registerController = async (req, res) =>{
    try{
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser,
        })
    }catch(error){
        res.status(400).json({
            success: false,
            error,
        })
    }

}
export{ loginController, registerController };