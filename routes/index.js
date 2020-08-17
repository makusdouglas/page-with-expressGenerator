var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */

  router.get('/', function(req,res,){
    res.render('index', { name: 'John' });
  });


router.get('/personal', function(req, res, next) {
  res.render('.personalPage/index');
});
router.get('/douglas', indexController.index);

module.exports = router;
