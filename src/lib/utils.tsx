import mongoose from "mongoose";

interface ConnectionStatus {
  isConnected?: number;
}

const connection: ConnectionStatus = {}

export const connectToDb = async() => {
    try {
        if (connection.isConnected) {
            return
        }
        const db = await mongoose.connect(process.env.mongo as string);
        connection.isConnected = db.connections[0].readyState 
    } catch (error) {
      throw new Error("Unable to connect to database")
    }
}