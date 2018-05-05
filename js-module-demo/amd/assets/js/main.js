require.config({
    paths: {
        'jquery': 'lib/jquery',
        'desc' : 'script/desc'
    }
});
require(['jquery','desc'], function ($, desc) {
    $("#contentBtn").on('click', function () {
        $('#messagebox').html(desc.desc);
    });
});