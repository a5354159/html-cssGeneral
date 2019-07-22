$.ajax({
    url: "data.json",
    success: function(res) {
        render(res)
    }
})

function render(data) {
    var html = "";
    if (data.code == 0) {
        $.each(data.result, function(i, v) {
            html += `<li  data-name="${i}">${v.title}</li>`
        });
        $('.left>ul').append(html);
        var st = "";
        $.each(data.result, function(i, v) {
            console.log(v.data[0].img)
            st += `<li><img src="${v.data[0].img}" alt=""><span>${v.data[0].name}</span></li>`

        })
        $('.right>ul').append(st)
        $('.left>ul').on('click', 'li', function() {
            $('.right>ul').html("")
            var str = "";
            var name = $(this).data('name');
            var dat = data.result[name].data;
            $.each(dat, function(i, v) {
                str += `<li><img src="${v.img}" alt=""><span>${v.name}</span></li>`
            })
            $(str).appendTo('.right>ul')
            $(this).addClass("bg").siblings().removeClass('bg');
        })
    }
}