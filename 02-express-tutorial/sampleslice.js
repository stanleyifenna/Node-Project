 const express = require("express");
 const { products } = require("./data");

 const app = express()

// setup static and middleware
 //app.use(express.static('./public'))

 app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">click for products</a>')
 })

 app.get('/api/products/:productID', (req, res) => {
//    const newProducts = products.map((product) => {
//     const {id,name,image} = product;
//     return {id,name,image}
//    })
   // console.log(req.params);
    const { productID } = req.params
     const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct) {
      return res.status(404).send('Request not found!')
    }

    res.json(singleProduct)
 })

 app.get('./api/v1/query', (req, res) => {
   //console.log(req.query);
   const { search, limit } = req.query
   let sortedProducts = [...products]
    //console.log(sortedProducts);
   if(search) {
    sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
    })
   }

   if(limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
   }
   res.status(200).json(sortedProducts)
   //res.send('Hello World')
 })

 app.listen(5000, () => {
    console.log('I am running on port 500...');
 })













// const { readFileSync } = require("fs");

// // get all files
// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImages = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   //console.log(req.method);
//   const url = req.url;
//   // home page
//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   }
//   // styles
//   else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   }
//   // images
//   else if (url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImages);
//     res.end();
//   }
//   // logic
//   else if (url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   }
//   // 404
//   else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>Page not found</h1>");
//     res.end();
//   }
// });

// server.listen(5000);
