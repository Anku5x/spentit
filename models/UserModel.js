import mongoose from "mongoose";
//user model schema design objects should be named exactly the same in userController and Frontend Login/Register form
//Schema Design consists of object with parameters, there are three common parameters:
//type: string, number, boolean, float etc.
//required: true or false,
//unique: true or false,
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true, //mongose schema comes with a timestamp feature which tells you at what time it was created.
  }
);
//export
const userModel = mongoose.model("users", userSchema);
export default userModel;
