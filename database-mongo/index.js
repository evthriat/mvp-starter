var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var QuizSchema = mongoose.Schema( {
  Subject: String,
  Questions: Array,
  Answers: Array,

} )

var Quiz = mongoose.model('Item', QuizSchema);

//-----------------


let BeeQuiz = {
  Subject: 'Bees! bzzzzzzz',
  Questions: ['How many bees are there in the world?',
              'Are honeybees going extinct?',
              'How many times can honeybees sting you?',
              'Wasps are ...',
              'How are bees from a hive related to each other?',
              'What is Honey made from?',
              'how many bees are in a hive?'
              ],
  Answers: [{1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
            {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
            {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
            {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
            {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
            {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4}
            ]
}

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany(BeeQuiz, function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var BeeData = new Quiz(BeeQuiz);

BeeData.save(function (err, BeeData) {
  if (err) return console.error(err);
});


//-----------

var selectAll = function(callback) {
  Quiz.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;