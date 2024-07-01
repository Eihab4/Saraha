import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken.js";
import { deleteMessage, getMessages, sendMessage } from "./message.controller.js";
import { validate } from "../../middleware/validate.js";
import { sendMessageValidation } from "./message.validation.js";


export const messageRouter = Router()

messageRouter.post("/sendMessage", validate(sendMessageValidation),sendMessage)
messageRouter.get("/getMessages",verifyToken ,getMessages)
messageRouter.delete("/deleteMessage/:id", verifyToken, deleteMessage)
