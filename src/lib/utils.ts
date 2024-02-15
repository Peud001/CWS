import mongoose from "mongoose";


const connection: any = {}

export const connectToDb = async() => {
    try {
        if (connection.isConnected) {
            console.log("conected");
            return
        }
        const db = await mongoose.connect(process.env.MONGO!);
        connection.isConnected = db.connections[0].readyState
        console.log("conected") 
    } catch (error) {
      throw new Error("Unable to connect to database")
    }
}