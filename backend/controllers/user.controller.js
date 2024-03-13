export const getUserForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        console.log(loggedInUserId);
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}