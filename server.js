require('mongoose');
require('express');

// .....
//
// hi! there~

let app = express();

let models = require('./models');

app.get('/', function() { });
app.post('/hi', function() { });


