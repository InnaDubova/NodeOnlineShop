const { getHomePage,getBlogPage,getCartPage,getContactPage,getCategoryPage,getCheckoutPage,getConfirmationPage,
    getProduct,getLoginPage,getRegisterPage,getSingleblogPage,getSingleproductPage,getTrackingorderPage,get404 } = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", getHomePage) 
router.get("/blog", getBlogPage)
router.get("/cart", getCartPage)
router.get("/contact", getContactPage)
router.get("/category", getCategoryPage)
router.get("/checkout", getCheckoutPage)
router.get("/confirmation", getConfirmationPage)
router.get("/login", getLoginPage)
router.get("/register", getRegisterPage)
router.get("/single-blog", getSingleblogPage)
router.get("/single-product", getSingleproductPage)
router.get("/tracking-order", getTrackingorderPage)
router.get("/products/:productId", getProduct)
router.get("*", get404)

module.exports = router;