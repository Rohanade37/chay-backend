import { asyncHandler } from "../utils/asynchendler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "rohan bhai ek top backend devloper"
    });
});

export {registerUser}
























