$(document).ready(function () {
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    
    $(".grid")
        .on('mousedown', function () {
            if (isTouchDevice == false) {
                math = $(this).text();
                console.log(math);
                var ans = $(this).attr("value");
                console.log(ans);
                $(this).html(`<p style="color: white">${ans}</p>`);
                $(this).css('background-color', 'pink');
            }
        })
        .on('mouseup', function () {
            if (isTouchDevice == false) {
                $(this).css('background-color', 'white');
                $(this).html(`<p style="color: black">${math}</p>`);
            }
        })

    $(".grid")
        .on('touchstart', function () {
            if (isTouchDevice) {
                math = $(this).text();
                console.log(math);
                var ans = $(this).attr("value");
                console.log(ans);
                $(this).html(`<p style="color: white">${ans}</p>`);
                $(this).css('background-color', 'pink');
            }
        })
        .on('touchend', function () {
            if (isTouchDevice) {
                $(this).css('background-color', 'white');
                $(this).html(`<p style="color: black">${math}</p>`);
            }
        });
});


var math = "";

