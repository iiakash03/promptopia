import{Schema,model,models} from "mongoose";

const userSchema=new Schema({
    email:{
        type:String,
        required:[true,"Email is reuired"],
        unique:[true,"Email already exists"],
    },
    username:{
        type:String,
        required:[true,"username is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"username invalid"],

    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});

const User=models.User || model("User",userSchema);
export default User