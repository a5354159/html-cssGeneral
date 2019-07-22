var ls = window.localStorage;
var arr = JSON.parse(ls.getItem('list')) || [];
var html = '';
$.each(arr, function(i, v) {
    html += `<li>${v}</li>`
})
$('.list').html(html);
$('#search').on('tap', function() {
    var val = $('#name').val();
    if (!val) {
        return;
    }

    if ($.inArray(val, arr) == -1) {
        arr.unshift(val);
        ls.setItem('list', JSON.stringify(arr));
        window.location.href = "http://www.baidu.com";
    }

    console.log(arr)
})

$("#delet").on('click', function() {
    $('.mask').show();

})

$('.yes').on('click', function() {
    $(".mask").hide();
    ls.removeItem('list');
})

$('.no').on('click', function() {
    $(".mask").hide();

})