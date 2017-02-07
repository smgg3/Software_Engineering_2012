function new3()
{
var f = document.forms[0].fname.value
var l = document.forms[0].lname.value
var g = document.forms[0].ugen.value
var d = document.forms[0].dob.value
var a = document.forms[0].adress.value
var m = document.forms[0].mobile.value
var e = document.forms[0].email.value
var atpos=e.indexOf("@");
var dotpos=e.lastIndexOf(".")

var i= document.forms[0].uid.value
var p = document.forms[0].upass.value
var rp = document.forms[0].urpass.value
if(f=="")
{
	alert("Enter Firstname");
	return false;
}
if(l=="")
{
	alert("Enter Lastname");
	return false;
}
if(g=="Select")
{
	alert("Select Gender");
	return false;
}
if(d=="")
{
	alert("Enter Date Of Birth");
	return false;
}
if(a=="")
{
	alert("Enter Adress");
	return false;
}
if(m=="")
{
	alert("Enter Mobile Number");
	return false;
}
if(m.length<10 || m.length>10)
{
	alert("Enter the 10 digit mobile numbers");
	return false;
}

if(!isValid(m))
{
alert("Phone must be numerical");
return false;
}


if(e=="")
{
	alert("Enter Email");
	return false;
}
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
	{
	alert("Not a valid e-mail address");
	return false;
	}


if(i=="")
{
	alert("Enter ID");
	return false;
}
if(p=="")
{
	alert("Enter Password");
	return false;
}
if(rp=="")
{
	alert("Re enter Password");
	return false;
}

if (p.length < 3)
{
	alert("Your password should have atleast 4 characters");
	return false;
}

else if(p != rp)
{
	alert("Both passwords should be same");
	return false;
}
else
return true;
}



function isValid(phone)
{
var i;
var allowed="0123456789";
for(i=0;i<phone.length;i++)
{
if(allowed.indexOf(phone.charAt(i))==-1)
{
return false;
}
}
return true;
} 

function new1()
{
var u_name = document.forms[0].uname.value
var u_pwd = document.forms[0].upass.value
if(u_name=="")
{
	alert("Please enter username");
	return false;
}
if(u_pwd=="")
{
	alert("Please enter password");
	return false;
}
if (u_pwd.length < 5)
{
	alert("Password length should be more than 4");
	return false;
}
else
	return true;
}
