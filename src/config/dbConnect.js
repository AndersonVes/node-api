import mongoose from "mongoose";

mongoose.connect("mongodb+srv://anderson:123@cluster0.xxcpq.mongodb.net/node-db")

let db = mongoose.connection;

export default db;