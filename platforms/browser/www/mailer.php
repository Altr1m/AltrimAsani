<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
 
$to = 'altr1m.asan1@gmail.com';
$subject = 'Message from altrim-asani.com';
$message = 'From: '.$name. "\r\n" . 'Email: '.$email. "\r\n" . 'Message: '.$message;
$headers = 'From: '. $email. "\r\n";
 

mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Thanks, your message was sent successfully."; // success message

?>