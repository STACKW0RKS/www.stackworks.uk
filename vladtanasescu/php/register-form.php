<?php
$to = 'support@zozothemes.com';
$subject = 'You subject';
$headers = 'From: (Your site) <mailer@zozothemes.com>' . "\r\n" . 'Content-type: text/html; charset=utf-8';
$message = '
<html>
	<head>
		<title>Your Site Contact Form \ Mist — Multi-purpose HTML Template</title>
	</head>
	<body>
		<h3>Name: <span style="font-weight: normal;">' . $_POST['name'] . '</span></h3>
		<h3>Email Adress: <span style="font-weight: normal;">' . $_POST['email'] . '</span></h3>
		<h3>Telephone: <span style="font-weight: normal;">' . $_POST['phone'] . '</span></h3>
		<h3>Price: <span style="font-weight: normal;">' . $_POST['price'] . '</span></h3>
	</body>
</html>';

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['price'])) {
	if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	    mail($to, $subject, $message, $headers) or die('<span style="color: red;">Error sending Mail</span>');
	    echo '<span class="send-true" style="color: #00dd63;">Your email was sent!</span>';
	}
} else {
	echo '<span style="color: red;">All fields must be filled!</span>';
}
?>