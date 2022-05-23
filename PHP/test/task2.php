<?php
session_start();
$answer1=$_POST['answer1'];
$_SESSION['answer1']= $answer1;
 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
     <meta charset="UTF-8">
     <title>Тест</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
<p>Вопрос 2:</p>
<p>Что здесь является лишним?</p><br>
<p>ЛЕВ / ТИГР / ГЕПАРД / ПУМА / ГИЕНА</p><br>
<form action="task3.php" method="post">
  <div class="radio">
                         <input type="radio" id="a1"
                                name="answer2" value="a1">
                         <label for="a1">ЛЕВ</label><br>

                         <input type="radio" id="a2"
                                name="answer2" value="a2">
                         <label for="a2">ТИГР</label><br>

                         <input type="radio" id="a3"
                         name="answer2" value="a3">
                         <label for="a3">ГЕПАРД</label><br>
                         
                         <input type="radio" id="a3"
                         name="answer2" value="a3">
                         <label for="a3">ПУМА</label><br>
                         
                         <input type="radio" id="a3"
                         name="answer2" value="a3">
                         <label for="a3">ГИЕНА</label><br>
                     </div><br>
  <input type="submit"/>
</form>
</body>
</html>