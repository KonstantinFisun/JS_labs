$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this); //Получаем данный элемент
    var dest = el.attr('href'); // получаем его направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 2000 // скорость прокрутки
        );
    }
    return false;
}
);