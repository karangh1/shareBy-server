import  express  from "express";
import bodyParser from "body-parser"
import routes from "./routes/routes.js";
import cors from 'cors'
import mongoose from "mongoose";
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use('/',routes);

const MONGO_URl='mongodb+srv://karan:karan143@cluster0.65ry3nx.mongodb.net/ShareBy?retryWrites=true&w=majority'
mongoose.connect(MONGO_URl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(8000,console.log("listing on port 8000"));
}).catch((err)=>{console.log(err)})


