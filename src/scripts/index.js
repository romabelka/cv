var GET = require('./app/ajax'),
    View = require('./components/main'),
    setLang = (new Bacon.Bus),
    language, view;
language = setLang.flatMapLatest(getLang).merge(getLang('ua'));

window.setLang = setLang;
/*
view = React.render(<View />, document.body);
language.onValue(view.setProps.bind(view));
*/


function getLang(lang) {
    return Bacon.fromPromise(GET({url: 'public/bd/'+lang+'.json'})).map(JSON.parse)
}