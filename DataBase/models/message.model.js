import { Schema, model } from "mongoose"



const messageSchema = new Schema({
    content: { type: String, required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
})

export const Message = model("Message", messageSchema);