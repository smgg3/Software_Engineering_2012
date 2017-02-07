<?php
session_start();
if(array_key_exists('userName',$_SESSION))
	header("location:viewacc.php");
else{
include("include.php");echo <<< style
	<tr><td>
<iframe width="1103" height="450" style="background:white" src="login.php"></tr></td>
style;
}
?>

