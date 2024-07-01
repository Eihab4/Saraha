import { connect } from "mongoose"


// Connect to MongoDB
export const dbConnection = connect("mongodb://localhost:27017/myDatabase", {
})
.then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error))