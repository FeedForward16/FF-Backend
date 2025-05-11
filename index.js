const express=require("express");
const app=express();

const port=5000;

app.use(express.json());
app.use("/user",require("./routes/userRoutes"));
app.listen(port,()=>{
    console.log("server running on port ",port);
});
