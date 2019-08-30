var math = "";

$(".grid")
.on('mousedown', function(){
    math = $(this).text();
    console.log(math);
    var ans = $(this).attr("value");
    console.log(ans);
    $(this).html(`<p style="color: white">${ans}</p>`);
    $(this).css('background-color', 'pink');
})
.on('mouseup', function() {
    $(this).css('background-color', 'white');
    $(this).html(`<p style="color: black">${math}</p>`);
  })