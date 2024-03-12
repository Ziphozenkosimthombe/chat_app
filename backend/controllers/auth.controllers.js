import User from '../models/User.model.js';

export const signup = async (req, res) => {
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword){
            return res.status(400).json({error: "Password does not match."});
        }

        const user = await User.findOne({ username });  

        if (user){
            return res.status(400).json({error: "Username already exists."});
        }

        // Hash the password

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;


        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic, 
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser ._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        })

    }
    catch(error){
        console.log(`Error in the signup controller, ${error.message}`);

        res.status(500).json({error: "Server Error"});
    }
}

export const login = (req, res) => {
    res.send('Login User');
}

export const logout = (req, res) => {
    res.send('Login User');
}