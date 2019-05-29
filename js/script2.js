$(document).ready(function(){ 
    $('.download').click(function () {
        codes = ['4WL9CZFR', 'Q6BALKY5', 'HT86TYV9', 'K5LQN8WN', 'M5233AJC', 'UHK8QWXL', 'U9VLZDRG', 'GWXLFN9A', 'E83J6N8U', 'GEGZCD6P', 'VHMFY2FW', '9H9NE8QC', '7JY2M5Z3', 'QQM5GUL3', 'F8H83J66'];
        if(jQuery.inArray($('.code').val(), codes) != -1) {
            window.location.href = 'http://runforcover.uchicago.edu/downloads/dncs.wav';
        } else {
            $('.invalid').html("Invalid code. Please try again.");
        }
    });

    $('.menu-item').click(function () {
        window.location.href = 'http://runforcover.uchicago.edu/';
    });
});