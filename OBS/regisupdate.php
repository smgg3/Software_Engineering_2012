<html>
<?php
$ACNUM = $_POST['uid'];	
$firstname=$_POST['fname'];
$lastname=$_POST['lname'];
$fathername=$_POST['fhname'];
$gender = $_POST['ugen'];
$dob_day = $_POST['day'];
$dob_month = $_POST['month'];
$dob_year= $_POST['year'];
$D_No = $_POST['dno'];
$city = $_POST['City'];
$district = $_POST['district'];
$state = $_POST['state'];
$PIN = $_POST['pin'];
$mobile_number = $_POST['mobile'];
$email = $_POST['email'];
$password = $_POST['upass'];
$date_of_birth=$dob_day.'-'.$dob_month.'-'.$dob_year;
$connect=mysql_connect('localhost','root');


if(!$connect)die('Could not connect...'.mysql_error());

$db=mysql_select_db("reg",$connect);
if(!$db)die('Database Error...'.mysql_error());

$result=mysql_query("insert into users values('$ACNUM','$firstname','$lastname','fathername','$gender','$date_of_birth','$D_No','$city' ,'$district','$state','$PIN', '$mobile_number' , '$email','$password','count')");
if(!$result)die('Query Error:'.mysql_error());
		
echo "<center><div style='color:red;font-size:25px;font-family:Comic Sans MS;'><b><blink>You are Registered Successfully..!!</b></blink></div></center>";
echo "<center><div style='color:black;font-size:25px;font-family:Arial;'><b>Account Details</b></br></br></br>Account Number :$ACNUM</br>Name :$firstname $lastname</br>Father name :$fathername</br>Gender :$gender</br>Date of Birth :$date_of_birth</br>Address</br> Door Number:$D_No</br>City:$city</br>District:$district</br>State:$state</br>PIN Code:$PIN</br>Mobile Number :$mobile_number</br>Email :$email

</div></center>";
	 
		 
		


mysql_close($connect);

?>
 <li><a href="register.php">Add New Account</a></li>
			  <li><a href="#">Delete Account</a></li>
              <li><a href="#">Messages</a></li>
</html>
