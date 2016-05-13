// router.get('/categories', function(req, res){
//     res.send('api is working');
// });

// // Return Export
// module.exports = router;

module.exports = function (app) {
    //app.use('/api/product', require('./routes/signup'));
	app.use('/', require('./routes/home'));
	app.use('/api', require('./routes/category'));
	app.use('/api', require('./routes/product'));
};