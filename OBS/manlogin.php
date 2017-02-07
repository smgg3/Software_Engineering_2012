 
<html>
<?php
$connet = mysql_connect("localhost", "root", "");
mysql_select_db('reg', $connet);
$user =$_POST['id'];
$pwd =$_POST['password'];
$query = "SELECT * FROM manger WHERE manger.id='$user'"; 
$result = mysql_query($query) or die(error());
$row = mysql_fetch_array($result) or die(error());


function error(){
	echo "<center>";
	echo "<h2>YOU ENTERED INVALID USERID AND PASSWORD</h2>";
	echo "<a href='manager.php'>click here to reenter your details</a>";
	
	echo "</center>";
	}
if ($user!=$row['id'] || $pwd!=$row['password']){
	echo "Invalid details";
	}
else{
			include 'manview.php';
	}

mysql_close($connect);

?>

</html>
