var Deffered = require('./Deffered');
module.exports = function (options) {
    var xmlhttp, deffered = new Deffered();

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function (ev) {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                if (options.success != null && typeof options.success === 'function') {
                    options.success.call(this.response, this, ev);
                }
                deffered.resolve(this.response, this, ev)
            } else {
                if (options.error != null && typeof options.error === 'function') {
                    options.error.apply(this, arguments)
                }
                deffered.reject(new Error(xmlhttp.message || 'some trouble with ajax'))
            }
        }
    };

    xmlhttp.open("GET", options.url, true);
    xmlhttp.send();
    return deffered.promise()
};