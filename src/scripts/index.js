var GET = require('./app/ajax');
GET({url: 'public/bd/en.json'}).then(function() {console.log('success', arguments)})
    .fail(function() {console.log('error', arguments);});