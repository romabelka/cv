var GET = require('./app/ajax'),
    View = require('./components/main');

GET({url: 'public/bd.json'}).done(function(data) {
    React.render(<View bd= {JSON.parse(data)}/>, document.body)
});
