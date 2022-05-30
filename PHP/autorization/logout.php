<?php
# Если куки не пустые
   if (!empty($_COOKIE)) {
    require __DIR__ . '/auth.php';
    # Если существует переменная
    if (isset($_COOKIE['login'])) {
          $login = $_COOKIE['login'];
    } else {
        // присваиваем $login значение '' если $_COOKIE['login'] равен NULL
        $login = '';
    }
    if (isset($_COOKIE['password'])) {
        $password = $_COOKIE['password'];
        
    } else {
        // присваиваем $password значение '' если $_COOKIE['password'] равен NULL
        $password = '';
    }
    
    $password = $_COOKIE['password'];
    if (checkAuth($login, $password)) {
        header('Location: /login.php');
    }
}
