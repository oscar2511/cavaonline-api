import mongoose from 'mongoose';

export class CategoryController {

  /**
  * GET - Return all categories
  */
  findAll(req, res) {
    mongoose.model('Category').find({},function(err, category) {
      if(err) res.send(500, err.message);
      console.log('GET /categories')
      res.status(200).jsonp(category);
   });
  };

  /**
  * Create a new category
  */
  add(req, res) {
   var Category = mongoose.model('Category')({
     name:        req.body.name,
     description: req.body.description,
     urlImg:      req.body.urlImg
   });
   Category.save(function(err, category) {
     if(err) return res.send(500, err.message);
     res.status(200).jsonp(category);
   })
 }

}
