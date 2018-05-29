var express = require('express');
var router = express.Router();
var orders = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { orders });
});

router.get('/forms', function(req, res, next) {
	console.log(req.query)
  res.render('forms', {});
});

router.post('/forms', function(req, res, next){
	orders.push({
		food:req.body.foodName,
		name:req.body.client
	})

	res.render('forms', {})
})
module.exports = router;
