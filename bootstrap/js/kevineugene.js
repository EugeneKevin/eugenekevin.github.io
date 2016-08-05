//Sticky Navbar
var ch = $(".chapters");

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        ch.addClass("chapters-scrolled");
    }
    else {
        ch.removeClass("chapters-scrolled");
    }
});

//Scrollspy
var sections = [];
var id = false;

$(".chapters a").each(function(){
    sections.push($($(this).attr('href')));
});

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()+35;
    for(var i in sections){
        var section = sections[i];
        if(scrollTop > section.offset().top){
            id = section.attr('id');
        }
    }
    $('a', ch).removeClass('current');
    $('a[href="#'+id+'"]', ch).addClass('current');
});

//Smooth Scroll
$(".chapters a").click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    
    $('html, body').animate({
        scrollTop: $(target).offset().top-34
    },'slow');
});

$(".chapters a").mouseup(function(){
    $(this).blur();
});

//Navbar Collapse
$('.handle').on('click',function(){
    $('nav ul').toggleClass("showing");
});

$('.chapters a').on('click', function(){
    $('nav ul').toggleClass("showing");
});

$('.handle').on('click', function(){
    $('.handle').toggleClass("dropped-down");
});

$('.chapters a').on('click', function(){
    $('.handle').toggleClass("dropped-down");
});
