<?php
# Функция проверки правильности аунтификации
function checkAuth(string $login, string $password): bool 
{
    # Считываем всех пользователей из БД
    $users = require __DIR__ . '/usersDB.php';
    
    
    foreach ($users as $user) {
        if ($user['login'] === $login 
            && $user['password'] === $password
        ) {
            return true; # Если нашли такого пользователя
        }
    }

    return false; # Если такого пользователя нет
}

# Возвращение логина
function getUserLogin(): ?string
{
    $loginFromCookie = $_COOKIE['login'] ?? '';
    $passwordFromCookie = $_COOKIE['password'] ?? '';

    if (checkAuth($loginFromCookie, $passwordFromCookie)) {
        return $loginFromCookie;
    }

    return null;
}