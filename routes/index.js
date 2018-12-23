var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/VC');
var suggest = db.get('suggestion');
var log = db.get('login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET block page. */
router.get('/block', function(req, res, next) {
  res.render('block', { title: 'Express' });
});



/* vc login page.*/
router.get('/vclogin', function(req, res, next) {
  res.render('vclogin');
});

/* AEC PRINCIPAL LOGIN PAGE.*/
router.get('/aecprincipal', function(req, res, next) {
  res.render('aecprincipal');
});
/* ACET PRINCIPAL LOGIN PAGE.*/
router.get('/acetprincipal', function(req, res, next) {
  res.render('acetprincipal');
});
/* ACOE PRINCIPAL LOGIN PAGE.*/
router.get('/acoeprincipal', function(req, res, next) {
  res.render('acoeprincipal');
});
/* vc view page.*/
router.get('/view', function(req, res, next) {
	suggest.find({}, function(err, data){
	 res.locals.data=data;
    res.render('view');
  });
});
/* form posting */
router.post('/SuggestionForm', function(req, res, next) {
   console.log(req.body);
   console.log(req.body.College);
   console.log(req.body.Year);
   console.log(req.body.Department);
   console.log(req.body.Section);
   console.log(req.body.Complaint);
   var data={
   	College : req.body.College,
   	Year : req.body.Year,
   	Department : req.body.Department,
   	Section : req.body.Section,
   	Complaint : req.body.Complaint
   }
   suggest.insert(data);
   res.render('index');
});

/* login page */
router.post('/login', function(req, res, next) {
	console.log(req.body.username);
	console.log(req.body.password);
	log.findOne({"username":req.body.username, "password":req.body.password}, function(err,data){
		if(!data){
			res.render('vclogin',{err:'Invalid Login Credentials'});
		}
		else{
			res.redirect('/view');
		}
	})
});

//post function to delete
router.post('/delete', function(req,res){
  console.log(req.body.val);
  suggest.remove({"Complaint":req.body.val},function(err,data){
  	res.send(data);
  });

});



module.exports = router;
