$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    console.log(el)
    var dest = el.attr('href'); // получаем направление
    console.log(dest)
    if(dest !== undefined && dest !== '') { // проверяем существование
        console.log(dest)
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 2000 // скорость прокрутки
        );
    }
    return false;
});