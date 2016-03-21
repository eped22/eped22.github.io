<?php $first = $_POST['first'];
$last = $_POST['last'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "eped22@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
