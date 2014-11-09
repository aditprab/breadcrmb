var application_root = __dirname;

var express = require('express');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var moment = require('moment');

var app = express();

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, '/site')));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

mongoose.connect('mongodb://localhost/library_database');

/*
    Schema:  user --> tripName --> Photo
*/
var User = new mongoose.Schema({
    trip: [tripName]
    //likely some oauth shit. 
});

var tripName = new mongoose.Schema({
    photo: [Photo]
});

var Photo = new mongoose.Schema({
    image: Buffer,
    image_type: String,
    text: String,
    latitude: String,
    longitude: String
});


var photoModel = mongoose.model('Photo', Photo);
var userModel = mongoose.model('User', User);

app.get('/api/v1/User/:tripName', function (request, response) {
    //Get photos given a specific trip. 
    return userModel.find(function(err, request.params.tripName){
        if (!err) {
            return response.send(Photo);
        } else {
            return console.log(err);
        }
    });
   
});

// app.post('/api/v1/posts', function (request, response) {
//     var post = new postModel({
//         title: request.body.title,
//         summary: request.body.summary,
//         tags: request.body.tags,
//         date_created: request.body.date_created,
//         date_updated: moment().format()
//     });
//     post.save(function (err) {
//         if (!err) {
//             return console.log('created');
//         } else {
//             return console.log(err);
//         }
//     });
//     return response.send(post);
// });



// app.get('/api/v1/posts/:id', function (request, response) {
//     return postModel.findById(request.params.id, function (err, post) {
//         return response.send(post);
//     });
// });

// app.put('/api/v1/posts/:id', function (request, response) {
//     console.log('Updating post' + request.body.title);
//     return postModel.findById(request.params.id, function (err, post) {

//         post.title = request.body.title;
//         post.summary = request.body.summary;
//         post.tags = request.body.tags;
//         post.date_updated = moment().format();

//         console.log(request.body);

//         return post.save(function (err) {
//             if (!err) {
//                 console.log('Post updated');
//                 console.log(post);
//             } else {
//                 console.log(err);
//             }
//             return response.send(post);
//         });
//     });
// });

// app.delete('/api/v1/posts/:id', function (request, response) {
//     console.log('Deleting post with id: ' + request.params.id);
//     return postModel.findById(request.params.id, function (err, post) {
//         return post.remove(function (err) {
//             if (!err) {
//                 console.log('post removed');
//                 return response.send('');
//             } else {
//                 console.log(err);
//             }
//         });
//     });
// });

var port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode',
    port, app.settings.env);
});
