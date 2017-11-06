<?php
/*///////////////////////////////////////////////////////////////////////
Subscribe Form
http://www.abileweb.com

Distrbuted under Creative Commons license
http://creativecommons.org/licenses/by-sa/3.0/us/
///////////////////////////////////////////////////////////////////////*/
	
	// Validation
	if(!$_POST['subscribe_email']){ echo "No email address provided!"; exit(); } 

	if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*$/i", $_POST['subscribe_email'])) {
		echo  "Email address is invalid!"; exit();
	}

	require_once('MCAPI.class.php');
	
	// grab an API Key from http://admin.mailchimp.com/account/api/
	$api = new MCAPI('fb2cf5423a203a4c98d9a7a0aec77c05-us9');
	
	// grab your List's Unique Id by going to http://admin.mailchimp.com/lists/
	// Click the "settings" link for the list - the Unique Id is at the bottom of that page. 
	$list_id = "abe9b3f2a1";
	
	// $merge_vars = array('FNAME' => $_POST['fullname']);
	
	if($api->listSubscribe($list_id, $_POST['subscribe_email']) === true) {
		// It worked!	
		$msg_array = array( 'status' => 'true', 'data' => 'Success! Check your email to confirm sign up.' );
   		echo json_encode($msg_array);
		//echo  'Success! Check your email to confirm sign up. <a href="index.html">Click here</a> to go back.';
	} else {
		// An error ocurred, return error message	
		$msg_array = array( 'status' => 'false', 'data' => 'Error: ' . $api->errorMessage );
   		echo json_encode($msg_array);
		//echo 'Error: ' . $api->errorMessage;
	}
?>