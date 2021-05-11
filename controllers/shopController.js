const Product = require("../models/product");

exports.getHomePage = (req,res,next) => {
     res.render("pages/index");
}

exports.getCategoryPage = (req,res,next) => {
     Product.findAll()
     .then((products) =>{
          res.render("pages/category", {
               products: products,
          });
     })
     .catch(err => console.log(err));
}
exports.getBlogPage = (req,res,next) => {
     res.render("pages/blog");
}
exports.getCartPage = (req,res,next) => {
     res.render("pages/cart");
}
exports.getContactPage = (req,res,next) => {
     res.render("pages/contact");
}

exports.getCheckoutPage = (req,res,next) => {
     res.render("pages/checkout");
}
exports.getConfirmationPage = (req,res,next) => {
     res.render("pages/confirmation");
}
exports.getLoginPage= (req,res,next) => {
     res.render("pages/login");
}
exports.getRegisterPage= (req,res,next) => {
     res.render("pages/register");
}
exports.getSingleblogPage= (req,res,next) => {
     res.render("pages/single-blog");
}
exports.getSingleproductPage= (req,res,next) => {
     res.render("pages/single-product");
}
exports.getProduct = (req,res,next ) => {
     const productId = req.params.productId;
     Product.findByPk(productId)
     .then((product) => {
         res.render("pages/single-product", {
             product: product
         })
     })
     .catch(err => console.log(err))
 }
 exports.getNewProductPage = (req, res, next) => {
     res.render("pages/addNewProduct.ejs");
 }
 exports.postNewProductPage = (req, res, next) => {
     const title = req.body.title;
     const price = req.body.price;
     const image = req.body.image;
     const description = req.body.description;

     Product.create({
          title: title,
          price: price,
          image: image,
          description: description
     })
     .then((result) => {
          console.log("Product created");
          return res.redirect ("/category");
     })
     .catch(err => console.log(err));
}
exports.deleteProduct = (req,res,next) => {
     const productId = req.params.id;
     Product.destroy({
          where: {
              id: productId
          }
      })
      .then((product) => {
          res.redirect("/category");
      })
      .catch((err) => console.log(err));
}
exports.updateProduct = (req, res, next) => {
     const id = req.params.id;
     Product.findByPk(id)
     .then((product) => {
         res.render("pages/updateProduct", {
             product: product
         })
     })
     .catch(err => console.log(err));
 }
exports.postUpdateProduct = (req, res, next) => { 
     const id = req.params.id;
     const title = req.body.title;    
     const price = req.body.price;
     const image = req.body.image;
     const description = req.body.description;

     const newProduct = {
         title: title,        
         price: price,
         image: image,
         description: description
     }
 
     Product.update(newProduct, {
         where: {
             id: id
         }
     })
     .then((result) => {
         res.redirect("/category");
     })
     .catch(err => console.log(err));
 }
exports.getTrackingorderPage= (req,res,next) => {
     res.render("pages/tracking-order");
}
exports.get404 = (req,res,next) => {
    res.status(404).render("pages/404");
};

