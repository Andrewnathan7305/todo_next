import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://andrewnathan0704:pxQszkmSz3CgvZ1K@cluster0.gna2c.mongodb.net/todo')
    console.log("db connected")
}
