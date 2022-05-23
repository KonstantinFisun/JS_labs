<?php
session_start();
$answer2=$_POST['answer2'];
$_SESSION['answer2']= $answer2;
 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
     <meta charset="UTF-8">
     <title>Тест</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
<p>Вопрос 3:</p>
<p>Какой буквой следует заменить знак вопроса?</p><br>
<p>Б / Г / И / Ж / З / ?</p><br>

<form action="task4.php" method="post">
  <input type="text" name="answer3"/><br><br>
  <input type="submit"/>
</form>
</body>
       </html>