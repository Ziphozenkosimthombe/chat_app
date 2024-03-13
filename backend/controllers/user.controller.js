import User from "../models/User.model.js";

export const getUserForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        console.log(loggedInUserId);

        const allUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(allUser);
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}