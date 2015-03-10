var GET = require('./app/ajax'),
    setLang = (new Bacon.Bus),
    language = setLang.flatMapLatest(function(lang) {
    return Bacon.fromPromise(GET({url: 'public/bd/'+lang+'.json'})).map(JSON.parse)
});
language.log();