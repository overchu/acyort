
// return summary and body

var marked = require('./marked');

module.exports = function(body) {

    var reg = '<!-- more -->';
    var summary = '';

    if (body.indexOf(reg) > -1) {
        summary = body.split(reg)[0]
    }

    return {
        summary: marked(summary),
        body: marked(body)
    }

}
