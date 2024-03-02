const express = require("express");
const path = require("path");
const Router = require("./routes");
const cors = require("cors");
const asyncErrors = require("express-async-errors");
const CONNECT_DB = require("./ConnectDB");
const CartRouter = require("./CartService/CartRoutes/cartRoutes");
const FilteringRoutes = require("./ProductsFiteringRoutes/ProductsFilteringRoutes");
const SavedRouter = require("./SavedLater/SaveLaterRoutes/cartRoutes");
const AddProductRouter = require("./AddingProducts/AddingProductRoutes/AddingProductsRoutes");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({ limit: '500mb' })); 
app.use(express.raw({ limit: '500mb', type: 'application/octet-stream' })); 
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
console.log(__dirname)
app.use(Router);
app.use(CartRouter);
app.use(FilteringRoutes);
app.use(AddProductRouter);
app.use(SavedRouter);


app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/h", (req, res) => {
  res.send("hello");
});

const start = async (req, res) => {
  try {
    await CONNECT_DB();
    app.listen(3000, () => {
      console.log("The server is listening on the port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();


// const express = require("express");
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.listen(3000,()=>{
//     console.log("the server is started")
// })