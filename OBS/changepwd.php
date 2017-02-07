<html>
<head>
<script type='text/javascript' src='new.js'>
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>OBS</title>
<link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div id="container">
    <div id="header">
    	<div id="logo"><a href="#">Online Banking System</a>
        <br/>makes banking online
        </div>
        <div id="menu">
        	<ul>
              <li><a href="index.php">Home</a></li>
			  <li><a href="index.php">Manager</a></li>
              <li><a href="#">About Bank</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="faqs.html">FAQ's</a></li>
          </ul>
       </div>
    </div>

<center>
    <div id="main">
	     <div id="main" >
               
	<p>Welcome to the Online Banking Sytem. 
    
         
<p>Change Your password<p>
<table border = 0>

<form method=POST action='changepwd1.php'>
	<tr><td>User ID </td>
	<td><input type="text" name=uid value=<?php echo $user; ?>  /></td></tr>
	<br /><tr><td>
	<br/>
	<tr><td>Old password</td>
	<td><input type="PASSWORD" name=opwd  /></td></tr>
	<br /><tr><td>
	<br/>
	New Password</td>
	<td><input type="PASSWORD" name=npwd /></td></tr>
	</br><tr><td>
	<br/>
	Confirm password</td>
	<td><input type="PASSWORD" name=cnpwd /></td></tr>
	<br/>
	</br></table>
	<br/>
	<tr bgcolor='#ffffff' > <td colspan=2 align=center><input type=submit value='Change Password'><input type=reset value=Reset></font></td></tr>


</form>
</center></p></div>
     
</form>		
         
    <div id="footer">
    <div id="left_footer">&copy; Copyright by Batch-03(CSE-05)</div>
    <div id="right_footer">

 <a href="batchmates.php">Batch-03</a>

    </div>
    </div>
   
</div>
</body>
</html>
