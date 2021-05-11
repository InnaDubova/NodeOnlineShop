const shopController = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", shopController.getHomePage) 
router.get("/blog", shopController.getBlogPage)
router.get("/cart", shopController.getCartPage)
router.get("/contact", shopController.getContactPage)
router.get("/category", shopController.getCategoryPage)
router.get("/checkout", shopController.getCheckoutPage)
router.get("/confirmation", shopController.getConfirmationPage)
router.get("/login", shopController.getLoginPage)
router.get("/register", shopController.getRegisterPage)
router.get("/single-blog", shopController.getSingleblogPage)
router.get("/single-product", shopController.getSingleproductPage)
router.get("/tracking-order",shopController.getTrackingorderPage)
router.get("/products/:productId", shopController.getProduct)
router.get("/add-product", shopController.getNewProductPage)
router.post("/add-product", shopController.postNewProductPage)
router.get("/update-product/:id", shopController.updateProduct);
router.post("/update-product/:id", shopController.postUpdateProduct);
router.get("/delete-product/:id", shopController.deleteProduct);
router.get("*", shopController.get404)

module.exports = router;