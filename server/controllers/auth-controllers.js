const User = require("../models/user-model");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// home 
 
const home = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send("Home page");
    } catch (error) { 
        console.log(error);
    }
}

// registertaion 


const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password,
        });

        res.status(201).json({ msg: userCreated,token: await userCreated.generateToken(),userId:userCreated._id.toString() });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
};


// login

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        
        // do this to make it working like a function
        const user = await userExist.comparePassword(password)
;        
        if (user) {
            res.status(200).json({
                msg: "Login successful", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Internal server error" });
    }
};


// sending user data and user logic

const user = async (req,res) =>{
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData})
    }catch(error){
        console.log(`error from the user route ${error}`)
    }
}



module.exports = { home,register,login,user };