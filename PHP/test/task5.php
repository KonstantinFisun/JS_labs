<?php
session_start();
$answer4=$_POST['answer4'];
$_SESSION['answer4']= $answer4;
 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
     <meta charset="UTF-8">
     <title>Тест</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
<p>Вопрос 5:</p>
<img  src="/5.jpg" class = "start">

<form action="results.php" method="post">
  <input type="text" name="answer5"/><br><br>
  <input type="submit"/>
</form>
</body>
</html>