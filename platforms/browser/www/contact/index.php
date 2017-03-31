<?php

header('Access-Control-Allow-Headers: x-requested-with');
header('Access-Control-Allow-Origin: *');

// Define some constants
define( "RECIPIENT_NAME", "www.altrim-asani.com" );
define( "RECIPIENT_EMAIL", "altr1m.asan1@gmail.com" );
define( "EMAIL_SUBJECT", "Message from Altrim Asani Website" );

// Read the form values
$success      = false;
//$xhr          = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
$xhr          = isset( $_POST['ajax'] )
              ? true
              : false;
$name   = isset( $_POST['name'] )
              ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", '', $_POST['name'] )
              : '';
$email  = isset( $_POST['email'] )
              ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", '', $_POST['email'] )
              : '';
$message      = isset( $_POST['message'] )
              ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", '', $_POST['message'] )
              : '';
$message="Message details below: " . "\r\n" . "\r\n Fullname: " . $name  . "\r\n Email: "  . $email . "\r\n Message: " . $message;

// If all values exist, send the email
if ( $name && $email && $message ) :
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $name . " <" . $email . ">";
  try {
    mail( $recipient, 'Message from Altrim Asani Website', $message, $headers );
    $success = 'success';
  } catch (Exception $e) {
    $success = $e->getMessage();
  }
else:
  $success = 'error: incomplete data';
endif;

// Return an appropriate response to the browser
if ( $xhr ) : // AJAX Request
  echo $success;

else : // HTTP Request ?>
<!doctype html>
<html>
  <head>
    <title>Thanks!</title>
  </head>
  <body>
    <p>
    <?php
      if ( $success == 'success') :
        echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>";
      else :
        echo "<p>There was a problem sending your message. Please try again.</p>";
      endif;
    ?>
    </p>
  </body>
</html>
<?php endif; ?>
