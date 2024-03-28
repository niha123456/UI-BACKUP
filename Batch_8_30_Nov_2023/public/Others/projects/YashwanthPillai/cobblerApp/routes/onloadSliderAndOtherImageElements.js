var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    var onLoadDetails = {
        sliderImages : ["/images/slider_img1.jpg","/images/slider_img2.webp","/images/slider_img3.jpg","/images/slider_img4.jpg","/images/slider_img5.jpg","/images/slider_img6.jpg","/images/slider_img7.jpg","/images/slider_img8.jpg"],
        
    
    }

    res.send(JSON.stringify(onLoadDetails.sliderImages))
    
});

module.exports = router;