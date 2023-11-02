import mongoose from "mongoose"

const users_schema = new mongoose.Schema({
    userId: { type:String, required: true},
    name : { type: String, required: true},
    email : { type: String, required: true},
    pw : { type: String, required: true},
})

export default mongoose.model("Defaults", users_schema)