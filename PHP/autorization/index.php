<?php
require __DIR__ . '/auth.php';
$login = getUserLogin();
?>
<html>
<head>
    <title>Главная страница</title>
</head>
<body>
# Если логина нет
<?php if ($login === null): ?>
<a href="/login.php">Авторизуйтесь</a>
# Если логин есть
<?php else: ?>
Добро пожаловать, <?= $login ?>
<br>
<a href="/logout.php">Выйти</a>
<?php endif; ?>

</body>
</html>
