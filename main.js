     let elem1 = document.getElementById('tab1')
     let elem2 = document.getElementById('tab2')
     let elem3 = document.getElementById('tab3')
     let elem4 = document.getElementById('tab4')
     let elem5 = document.getElementById('tab5')
     let elem7 = document.getElementById('tab7')
     let elem8 = document.getElementById('tab8')
     let elem9 = document.getElementById('tab9')
     let elem10 = document.getElementById('tab10')
     
     /*Задание 1 - Дата/Время*/
     
     elem1.onclick = function() {
        let block = document.getElementById('task_1')
        
        if (block.className === "displayed tab-content-1"){
            block.setAttribute('class','hidden tab-content-1')
        }
        else{
            block.setAttribute('class', 'displayed tab-content-1')
            setInterval(my_date_time, 1000);
        }
    }
     
     //Если число меньше 10
     function below_10(number){
        if (number < 10)
            number = "0" + number
        return number
    }
       
     //Выставление времени    
     function my_date_time(){
        let now = new Date();
        days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        // Формат даты
        let dat =  below_10(now.getDate()).toString() + "-" + below_10(now.getMonth()).toString()  + "-" + now.getFullYear()
        
        // Формат времени
        let time = below_10(now.getHours()) + ":" + below_10(now.getMinutes()) + ":" + below_10(now.getSeconds()) 
        
        let res = dat + ", " + days[now.getDay()] + " " + time
        
        document.getElementById("task_1").innerHTML = res;
    }
       
    /*========================================================================*/    
        
     /*Задание 2 - Календарь*/
        
     elem2.onclick = function() {
        let block = document.getElementById('task_2')
        if (block.className === "displayed tab-content-2"){
            block.setAttribute('class','hidden tab-content-2')
        }
        else{
            block.setAttribute('class','displayed tab-content-2')
            let nowDate = new Date(), // создаем экземпляра объекта с текущей датой
            nowDateNumber = nowDate.getDate(), //Текущая дата
            nowMonth = nowDate.getMonth(), //Текущий месяц
            nowYear = nowDate.getFullYear(), //Тякущий год
                
            container = document.getElementById('month-calendar'),
            monthContainer = container.getElementsByClassName('month-name')[0],
            yearContainer = container.getElementsByClassName('year-name')[0],
            daysContainer = container.getElementsByClassName('days')[0],
            monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
            


            function setMonthCalendar(year,month) {
                let monthDays = new Date(year, month + 1, 0).getDate(),// возвращает количество дней в данном месяце

                monthPrefix = new Date(year, month, 0).getDay(),//первый день недели
                monthDaysText = '';

                monthContainer.textContent = monthName[month]; //Записываем месяц
                yearContainer.textContent = year; //Записываем год
                daysContainer.innerHTML = ''; //Создаем пустую строку
                
                
                //Убираем лишнии дни в начале
                if (monthPrefix > 0){
                    for (let i = 1  ; i <= monthPrefix; i++){
                        monthDaysText += '<li></li>';
                    }
                }
                
                let count = 0;
                let storage = [];
                
                //Записываем дни месяца
                for (let i = 1; i <= monthDays; i++){ 
                    monthDaysText += '<li>' + i + '</li>';
                    
                    //Определяем выходной ли это
                    if(checkDate(i,month,year)){
                        storage[count] = i;
                        count++;
                    }
                }
            
                daysContainer.innerHTML = monthDaysText;
            
                //Делаем текущую дату черной
                days = daysContainer.getElementsByTagName('li');
                days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
                
                for(let i = 0; i < storage.length; i++){
                    days[monthPrefix + storage[i] - 1].classList.add('weekend');
                }
                

            }
            
            //Проверка выходного
            function checkDate(day, month, year) {
                const date = new Date(year, month, day);
                
                return (date.getDay() == 0 || date.getDay() == 6);
            }

            setMonthCalendar(nowYear,nowMonth); //Вызов функции

        }
    }
     
/*=======================================================================*/
     
/*Задание 3 - Нахождение элементов в Dom*/

     elem3.onclick = function(){
        let block = document.getElementById('task_3')
        if (block.className === "displayed tab-content-3"){
            block.setAttribute('class', "hidden tab-content-3")
        }
        else{
            block.setAttribute('class', "displayed tab-content-3")
            block.innerHTML = "Количество элементов внутри формы: " + document.forms["Sel"].length;
        }
      }  
     



 /*=======================================================================*/
 
 /*Задание 4 - Изменение блока*/
 var timer1 = null; // Название таймера функции для раскраски

 elem4.onclick = function(){
     let block = document.getElementById('tab4');
     if (block.className == "displayed tab-content-4"){
         block.setAttribute('class', "hidden tab-content-4")
         clearInterval(timer1);
     }
     else{
         block.setAttribute('class', 'displayed tab-content-4')
         timer1 = setInterval(coloring, 150)
     }
 }
        
    // Раскраска блока
    function coloring(){
        //Получили количество блоков .tab
        var elements_length = document.querySelectorAll('.tab').length
    
        //Случайный блок
        let number_block = Math.round(Math.random() * (elements_length - 1) + 1)
    
        //Случайный цвет
        let color_block = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
        
        let str = "tab_" + number_block
        console.log(str)
        let lol = document.getElementById(str) //Получаем рандомный блок
        console.log(lol)
        
        lol.style.backgroundColor = color_block // Устанавливаем цвет
    }   
        
    /*==============================================================================*/
    
    /*Задание 5 - Создание элемента*/    
    
    elem5.onclick = function(){
        let block = document.getElementById('task_5')
        if (block.className === "displayed tab-content-5"){
            block.setAttribute('class', "hidden tab-content-5")
        }
        else{
            block.setAttribute('class', "displayed tab-content-5")
            let ulcontainer = document.getElementsByClassName('ul_task_5')[0]
            let ultext = ''
            var value = prompt("Введите содержимое пункта")
            while(value != null){
                ultext += '<li>' + value + '</li>'
                value = prompt("Введите содержимое пункта")
            }
            ulcontainer.innerHTML += ultext
        }
    }    
        
    /*==============================================================================*/     
/*==============================================================================*/
    
/*Задание 6 - Обработка событий*/
    
/*===========================================================================*/
    
    
/*Задание 7 - Обработка событий*/
 

let ending1 = document.getElementById('end_sweeties')
elem7.onclick = function(){
    var block = document.getElementById('task_7')
    if (block.className === "displayed tab-content-7"){
        block.setAttribute('class', "hidden tab-content-7")
    }
    else{
        block.setAttribute('class', "displayed tab-content-7")
        let menuElem = document.getElementById('sweeties')
        let titleElem = menuElem.querySelector('.title_menu')
        
        
        titleElem.onclick = function(){
            menuElem.classList.toggle('open');
        }
        
        let list1 = document.getElementById('list1')
        let list2 = document.getElementById('list2')
        let list3 = document.getElementById('list3')
        let list4 = document.getElementById('list4')
        let f1 = 0
        let f2 = 0
        let f3 = 0
        let f4 = 0
        
        
        
        
        list1.onclick = function(){
            list1.style.display = 'none';
            f1 = 1
            if(f1+f2+f3+f4 == 4){
                ending1.style.display = 'block';
            }
        }
        
        
        list2.onclick = function(){
            list2.style.display = 'none';
            f2 = 1
            if(f1+f2+f3+f4 == 4){
                ending1.style.display = 'block';
            }
        }
        
        
        list3.onclick = function(){
            list3.style.display = 'none';
            f3 = 1
            if(f1+f2+f3+f4 == 4){
                ending1.style.display = 'block';
            }
        }
        
        
        list4.onclick = function(){
            list4.style.display = 'none';
            f4 = 1
            if(f1+f2+f3+f4 == 4){
                ending1.style.display = 'block';
            }
        }
        
    }
}




/*===========================================================================*/

/*Задание 8 - Исчезающая картинка*/
var op = -1;
var imag = document.getElementById('Picture')
var text_under = document.getElementById('under_pic')
elem8.onclick = function(){
    var block = document.getElementById('task_8')
    if (block.className === "displayed tab-content-8"){
        block.setAttribute('class', "hidden tab-content-8")
        imag.style.opacity=0;
        op = -1;
    }
    else{
        block.setAttribute('class', "displayed tab-content-8")
        setOpacity()
        
//        let img = document.getElementById('Picture')
//        img.style.opacity = parseFloat(img.style.opacity) + 0.5;
//        timer2 = setInterval(loaded(img), 100)
        
        }
}

imag.onmouseover = function(){
    if( op > -1 ) {
        op -= 0.1;
        imag.style.opacity=op/10;
        text_under.style.opacity = 1 - op/10;
        setTimeout(imag.onmouseover, 20);
    }
}

imag.onmouseout = function(){
    text_under.style.opacity = 0;
    setOpacity()
}

function setOpacity() {
    if( op < 10 ) {
        op += 0.1;
        imag.style.opacity=op/10;
        timer2 = setTimeout(setOpacity, 20);
    }
}


//pict = document.getElementsByClassName('Picture')
//
//
//
//elem8.onclick = function(){
//    let block = document.getElementById('task_8')
//    if (block.className === "displayed tab-content-8"){
//        block.setAttribute('class', "hidden tab-content-8")
//    }
//    else{
//        block.setAttribute('class', "displayed tab-content-8")
//        }
//}
//
//pict.onmouseover = function(){
//    this.style.display = 'none';
//}
//   
//pict.onm
/*===========================================================================*/

/*Задание 9 - Анкета*/
 
elem9.onclick = function(){
    let block = document.getElementById('task_9')
    if (block.className === "displayed tab-content-9"){
        block.setAttribute('class', "hidden tab-content-9")
    }
    else{
        block.setAttribute('class', "displayed tab-content-9")  
        }
}


// Проверка Фамилии

function Valid()
{
    var output = "";
    
    var re_mail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i; // Регулярка почты
    var myMail = document.Sel.Id_Email.value;
    var valid_mail = re_mail.test(myMail);
    
    var re_phone = /^\d[\d\(\)\ -]{4,14}\d$/; // Регулярка телефона
    var myPhone = document.Sel.Id_Phone.value;
    var valid_phone = re_phone.test(myPhone);
    
    // Проверка имени
    if (document.Sel.Id_FIO.value == '') {
        output += 'Введите имя!\n';
        let fio = document.getElementById('FIO_right');
        fio.setAttribute('class', "right novalid")
    }
    else {    
        let fio = document.getElementById('FIO_right');
        fio.setAttribute('class', "right valid")
    }
    
    //Проверка пароля
    if(document.Sel.Pwd.value != document.Sel.Pwd1.value || document.Sel.Pwd.value == ''){
        let pas = document.getElementById('pas');
        pas.setAttribute('class', "right novalid")
    }
    else{
        let pas = document.getElementById('pas');
        pas.setAttribute('class', "right valid")
    }
    
    // Проверка почты
    if (valid_mail) {
        let mail = document.getElementById('Id_Email');
        mail.setAttribute('class', "valid")
    }
    else {
        output += 'Адрес электронной почты введен неправильно!\n';
        let mail = document.getElementById('Id_Email');
        mail.setAttribute('class', "novalid")
    }
   
    // Проверка телефона
    if (valid_phone) {
        let phone = document.getElementById('Id_Phone');
        phone.setAttribute('class', "valid")
        
    } 
    else {
        output += 'Номер телефона введен неправильно!\n';
        let phone = document.getElementById('Id_Phone');
        phone.setAttribute('class', "novalid")
    }
    
    let about = document.getElementById('textArea');
    // Проверка о себе
    if (about.value != '') {
        let about_right = document.getElementById('about_right');
        about_right.setAttribute('class', "right valid")
        
    } 
    else {
        output += 'Номер телефона введен неправильно!\n';
        let about_right = document.getElementById('about_right');
        about_right.setAttribute('class', "right novalid")
    }
      
}

/*===========================================================================*/

/*Задание 10 - Игра*/
var timer3;
elem10.onclick = function(){
    let block = document.getElementById('task_10')
    if (block.className === "displayed tab-content-10"){
        block.setAttribute('class', "hidden tab-content-10")
        clearInterval(timer3)
    }
    else{
        block.setAttribute('class', "displayed tab-content-10")
        Start()
        }
}

function Start(){
    clearInterval(timer3);
    if(confirm("Нажмите ОК, чтобы начать. Нажмите ОТМЕНА, чтобы выйти")){
            timer3 = setInterval(start_game, 10)
        }
        else{
            clearInterval(timer3);
            document.getElementById('task_10').setAttribute('class', "hidden tab-content-10");
        }
}

var block_game = document.getElementById("block")
var hole_game = document.getElementById("hole")
var character_game = document.getElementById("character")
var jumping = 0; //Прыжки
var counter = -1; //Очки


hole_game.addEventListener('animationiteration', () => {
    //Выбираем где будет располагаться отверстие
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole_game.style.top = -(top) + "px";
    counter++;
    
});

//Падение
function start_game(){
    //Узнаем координату птицы
    var characterTop = parseInt(window.getComputedStyle(character_game).getPropertyValue("top"));
    
    //Нет прыжка
    if(jumping == 0){
        character_game.style.top = (characterTop+3) + "px"; // Образуем падение
    }
    
    
    var blockLeft = parseInt(window.getComputedStyle(block_game).getPropertyValue("left"));
    
    var holeTop = parseInt(window.getComputedStyle(hole_game).getPropertyValue("top"));
    
    var cTop = -(500-characterTop);
    
    
    //Окончание игры
    if((characterTop > 500) || ((blockLeft < 20) && (blockLeft> -50) 
                                && ((cTop < holeTop) || (cTop > holeTop + 130)))){
        alert("Игра завершина! Очки: " + counter);
        character_game.style.top = 100 + "px";
        counter = 0;
        Start()
    }
    
    
    
};

//Прыжок птицы
function jump(){
    jumping = 1; //Прыжок
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        //Узнаем координату птицы
        var characterTop = parseInt(window.getComputedStyle(character_game).getPropertyValue("top"));
        character_game.style.top = (characterTop+3) + "px"; // Образуем падение
        
        //Совершаем прыжока если птица не вверху
        if((characterTop > 6) && (jumpCount < 15)){
            character_game.style.top = (characterTop-5) + "px"; // Образуем прыжок
        }
        
        //Сброс прыжков
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping = 0;
            jumpCount = 0
        }
        jumpCount++;
    }, 10)
}





