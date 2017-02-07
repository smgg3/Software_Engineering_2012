<?php
$connet = mysql_connect("localhost", "root", "rgukt");
mysql_select_db('reg', $connet);
$user =$_POST['id'];
$pwd =$_POST['password'];
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
	echo "Invalid details";
	}
else{
	if($row['count']>=1)
		{
			session_start();
			$_SESSION['userName']=$user;
			header("location:viewacc.php");
		}
	else
	{
	if(mysql_query("update user set count=1 where user.id='$row[id]'"))
		{
			header("location:chagepwd.php");
		}
	}


}
?>

</html>
