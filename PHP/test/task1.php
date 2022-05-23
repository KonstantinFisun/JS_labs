<?php
session_start();
 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
     <meta charset="UTF-8">
     <title>Тест</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
<p>Вопрос 1:</p>
<p>Каким числом следует заменить знак вопроса?</p><br>
<p>25 / 29 / 33 / 37 / 41 / ? </p><br>
<form action="task2.php" method="post">
  <input type="text" name="answer1"/><br><br>
  <input type="submit"/>
</form>
</body>
</html>