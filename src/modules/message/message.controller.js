import { Message } from "../../../DataBase/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";
import appError from "../../utils/appError.js";


export const sendMessage = catchError(async (req, res) => {
    const newMessage = await Message.create(req.body);
    return res.status(201).json({message:"message sent successfully"});
})

export const getMessages = async (req, res) => {
    const messages = await Message.find({ receiver: req.user._id }).populate("receiver", "userName email");
    return res.json(messages);
};


export const deleteMessage = async (req, res,next) => {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
        next(new appError("no message found",404))
    }
    return res.json({message:"message deleted successfully"});
}