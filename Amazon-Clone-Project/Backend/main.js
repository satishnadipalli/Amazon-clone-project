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
const OrdersRouter = require("./UserOrders/OrdersRoutes/OrdersRoutes");


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
app.use(OrdersRouter);


app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/", (req, res) => {
  res.send("hello");
});


const start = async () => {
  try {
    await CONNECT_DB();
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("An error occurred while starting the server:", error);
    process.exit(1); 
  }
};


start();

