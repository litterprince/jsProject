define(function (require, exports, module) {
    var $ = require("./lib/jquery");
    var desc = require("./script/desc");
    $("#contentBtn").on('click', function () {
        $('#messagebox').html(desc.desc);
    });
});