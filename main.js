let elem1 = document.getElementById('tab1')
     let elem2 = document.getElementById('tab2')
     let elem4 = document.getElementById('tab4')
     let elem5 = document.getElementById('tab5')
     let elem7 = document.getElementById('tab7')
     let elem8 = document.getElementById('tab8')
     
     
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
                const date = new Date(year, month - 1, day);

                return (date.getDay() == 0 || date.getDay() == 6);
            }

            setMonthCalendar(nowYear,nowMonth); //Вызов функции

        }
    }
     /*=======================================================================*/
     
     /*Задание 4 - Изменение блока*/
     var timer1 = null; // Название таймера функции для раскраски
    
     elem4.onclick = function(){
         let block = document.getElementById('tab4');
         if (block.className === "displayed tab-content-4"){
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

/*Задание 8 - Обработка событий*/
 
elem8.onclick = function(){
    let block = document.getElementById('task_8')
    if (block.className === "displayed tab-content-8"){
        block.setAttribute('class', "hidden tab-content-8")
    }
    else{
        block.setAttribute('class', "displayed tab-content-8")  
        }
    }
}    