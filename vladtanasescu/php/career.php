<?php
$to = 'sathishmkm@gmail.com';
$subject = 'You subject';
$headers = 'From: (Your site) <mailer@zozothemes.com>' . "\r\n" . 'Content-type: text/html; charset=utf-8';
$strresume_name=$_FILES["career_file"]["name"];
$strresume_type=$_FILES["career_file"]["type"];
$strresume_size=$_FILES["career_file"]["size"];
$strresume_temp=$_FILES["career_file"]["tmp_name"];
$message = '
<html>
	<head>
		<title>Your Site Carrer Form \ Mist — Multi-purpose HTML Template</title>
	</head>
	<body>
		<h3>Name: <span style="font-weight: normal;">' . $_POST['career_name'] . '</span></h3>
		<h3>Email Adress: <span style="font-weight: normal;">' . $_POST['career_email'] . '</span></h3>		
		<h3>Telephone: <span style="font-weight: normal;">' . $_POST['career_phone'] . '</span></h3>
		<h3>Age: <span style="font-weight: normal;">' . $_POST['career_age'] . '</span></h3>
		<h3>City: <span style="font-weight: normal;">' . $_POST['career_city'] . '</span></h3>
		<h3>Expected Salary: <span style="font-weight: normal;">' . $_POST['career_salary'] . '</span></h3>
		<h3>Experience: <span style="font-weight: normal;">' . $_POST['career_experience'] . '</span></h3>
		<h3>Website: <span style="font-weight: normal;">' . $_POST['career_website'] . '</span></h3>
		<div>
			<h3 style="margin-bottom: 5px;">Comment:</h3>
			<div>' . $_POST['career_comment'] . '</div>
		</div>
	</body>
</html>';



	 // MAIL HEADERS with attachment     /* print_r($_FILES);	   
		//$fp = fopen($strresume_temp, "r");                              
		//Open it for read in binary mode         $data = fread($fp, filesize($strresume_temp));                //Read it         $data = chunk_split(base64_encode($data));                //Base 65 encode it and Chunk it           fclose($fp);      */                              	
		$num = md5(time());    
		//Normal headers    $headers  = "From: yourname<youraccount@yourdomain.com>\r\n"; 
		$headers  .= "MIME-Version: 1.0\r\n"; 
		$headers  .= "Content-Type: multipart/mixed; "; 
		$headers  .= "boundary=".$num."\r\n"; 
		$headers  .= "--$num\r\n"; 


        // This two steps to help avoid spam   

    $headers .= "Message-ID: <".$now." TheSystem@".$_SERVER['SERVER_NAME'].">\r\n";
    $headers .= "X-Mailer: PHP v".phpversion()."\r\n";         

        // With message
       
    $headers .= "Content-Type: text/html; charset=iso-8859-1\r\n";
       $headers .= "Content-Transfer-Encoding: 8bit\r\n";
       $headers .= "".$message."\n";
       $headers .= "--".$num."\n"; 

        // Attachment headers

    $headers  .= "Content-Type:".$strresume_type." ";
       $headers  .= "name=\"".$strresume_name."\"r\n";
       $headers  .= "Content-Transfer-Encoding: base64\r\n";
       $headers  .= "Content-Disposition: attachment; ";
       $headers  .= "filename=\"".$strresume_name."\"\r\n\n";
       $headers  .= "".$data."\r\n";
       $headers  .= "--".$num."--";

	
if (!empty($_POST['career_name']) && !empty($_POST['career_email'])) {
	if (filter_var($_POST['career_email'], FILTER_VALIDATE_EMAIL)) {
	    mail($to, $subject, $message, $headers);	    		$msg_array = array( 'status' => 'true', 'data' => '<span class="send-true" style="color: #00dd63;">Your email was sent!</span>' );		echo json_encode($msg_array);
    }
} else {		$msg_array = array( 'status' => 'true', 'data' => '<span style="color: red;"> Your Email was not sent. Resubmit form again Please..!</span>' );   	echo json_encode($msg_array);
}