<?php
session_start();
$answer3=$_POST['answer3'];
$_SESSION['answer3']= $answer3;
 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
     <meta charset="UTF-8">
     <title>Тест</title>
     <link rel="stylesheet" href="style.css">
 </head>
 <body>
<p>Вопрос 4:</p>
<p>Определите название города, защифрованного в анаграмме. В какой части России он находится? </p>

<form action="task5.php" method="post">
  <div class="radio">
                         <input type="radio" id="a1"
                                name="answer4" value="a1">
                         <label for="a1">СИБИРЬ</label><br>

                         <input type="radio" id="a2"
                                name="answer4" value="a2">
                         <label for="a2">УРАЛ</label><br>

                         <input type="radio" id="a3"
                         name="answer4" value="a3">
                         <label for="a3">СЕВЕРО-ЗАПАД</label><br>
                         
                         <input type="radio" id="a3"
                         name="answer4" value="a3">
                         <label for="a3">ДАЛЬНИЙ ВОСТОК</label><br>
                         
                         <input type="radio" id="a3"
                         name="answer4" value="a3">
                         <label for="a3">ПРИВОЛЖЬЕ</label><br>
                     </div><br>
  <input type="submit"/>
</form>
</body>
</html>