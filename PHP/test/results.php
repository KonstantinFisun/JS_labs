<?php
session_start();
$answer5=$_POST['answer5'];
$_SESSION['answer5']= $answer5;
$ot = 0;
$not = 0;
      if ($_SESSION['answer1'] == '45'){$ot=$ot+40;} 
      if ($_SESSION['answer2'] == 'ГИЕНА'){$ot=$ot+40;} 
      if ($_SESSION['answer3'] == 'К'){$ot=$ot+40;} 
      if ($_SESSION['answer4'] == 'СИБИРЬ'){$ot=$ot+40;} 
      if ($_SESSION['answer5'] == '2'){$ot=$ot+40;} 
 ?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Тест</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<p>ВАШ IQ: <?php echo $ot; ?></p>
<img  src="/res.jpg" class = "start">
</body>
</html>