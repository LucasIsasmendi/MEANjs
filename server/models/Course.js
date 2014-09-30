var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'BI for Managers', featured: true, published: new Date('10/5/2014'), tags: ['BI']});
      Course.create({title: 'BI for CEOs', featured: true, published: new Date('10/12/2014'), tags: ['BI']});
      Course.create({title: 'Personal Dashboard Process', featured: false, published: new Date('10/1/2014'), tags: ['BI']});
      Course.create({title: 'Advantages of Social Analytics', featured: false, published: new Date('7/12/2014'), tags: ['BI']});
      Course.create({title: '20 Key Metrics for my business', featured: true, published: new Date('1/1/2014'), tags: ['BI']});
      Course.create({title: 'A Survival Guide to non BI minds', featured: true, published: new Date('10/13/2014'), tags: ['BI']});
      Course.create({title: 'BI for Fun and Profit', featured: true, published: new Date('3/1/2014'), tags: ['BI']});
      Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2014'), tags: ['Coding']});
      Course.create({title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2014'), tags: ['Misc']});
      Course.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2014'), tags: ['Management']});
      Course.create({title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2014'), tags: ['Misc']});
      Course.create({title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2014'), tags: ['Coding']});
      Course.create({title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2014'), tags: ['Coding']});
      Course.create({title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2014'), tags: ['Misc']});
      Course.create({title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2014'), tags: ['Coding', 'Misc']});

    }
  })
}

exports.createDefaultCourses = createDefaultCourses;