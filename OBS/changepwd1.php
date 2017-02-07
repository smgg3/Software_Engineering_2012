
<html>
<?php
$connet = mysql_connect("localhost", "root", "");
mysql_select_db('reg', $connet);
$user =$_POST['uid'];
$pwd =$_POST['opwd'];
$npwd1 =$_POST['npwd'];
$npwd2 =$_POST['cnpwd'];
$query = "SELECT * FROM user WHERE user.id='$user'"; 
$result = mysql_query($query) or die(error());
$row = mysql_fetch_array($result) or die(error());


function error(){
	echo "<center>";
	echo "<h2>YOU ENTERED INVALID USERID AND PASSWORD</h2>";
	echo "<a href='index.php'>click here to reenter your details</a>";
	
	echo "</center>";
	}
if ($user!=$row['id'] || $pwd!=$row['password']){
	
	}
else{
	if($npwd1==$npwd2){
	if(mysql_query("update user set password='$npwd1' where user.id='$row[id]'"))	
		{echo $row['count'] . " " . $row['password'];}
	
	include 'viewacc.php';
	echo "password changed successfully!";
		}
	//echo $row['id'] . " " . $row['password'];
	//echo $row['count'] . " " . $row['password'];}
	//else
	//{
	
	//include 'changepwd.php';
	//echo "Hello RGUKT";
	//echo $row['count'] . " " . $row['password'];

	//if(mysql_query("update user set count=0 where user.id='$row[id]'"))

//	$result=mysql_query("UPDATE user SET count=1 WHERE user.id=$user");
//	$result = mysql_query($result) or die(error());
	
	//	{echo $row['count'] . " " . $row['password'];}

	//}


}
?>

</html>
