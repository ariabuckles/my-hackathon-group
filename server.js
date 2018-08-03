require('mongoose');
require('express');

// .....
//
// hi!

let app = express();

let models = require('./models');

app.get('/', function() { });
app.post('/hi', function() { });


