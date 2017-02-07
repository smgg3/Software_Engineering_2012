function new3()
{
		
			var f0=0;
			var f1=0;
			var f2=0;
			var f3=0;
			var month1=new Array("January","February","March","April","May","June","July","August","September","October","November","Decemder");
			var month=new Array("1","2","3","4","5","6","7","8","9","10","11","12");
			var username=document.form1.uid.value;
			var firstname=document.form1.fname.value;
			var lastname=document.form1.lname.value;
			var fathername=document.form1.fhname.value;
			var sextype=document.form1.ugen.value;
			var dt=document.form1.day.value;
			var mon=document.form1.month.value;
			var yr=document.form1.year.value;
			var mailid=document.form1.email.value;
			var password=document.form1.upass.value;
			var password1=document.form1.urpass.value;
			var address=document.form1.city.value;
			var em=/^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,4}$/;
			if(username==null || username=="")
			{
				alert("Username should not be empty");
				return false;
			}
			if(!((username.charCodeAt(0)>64 && username.charCodeAt(0)<91) || (username.charCodeAt(0)>96 && username.charCodeAt(0)<123)))
			{
				alert("Name should not start with numbers and special charecters");
				return false;
			}
			if(username.length==10)
			{
				alert("Account Number shoulb be  10 numbers length");
				return false;
			}
			for(var i=0;i<username.length;i++)
			{
				if((username.charCodeAt(i)>64 && username.charCodeAt(i)<91))
				{
					f0=1;
					alert("User");
				}
				 if((username.charCodeAt(i)>96 && username.charCodeAt(i)<123))
				{
					alert("Usernam");
					f1=1;
				}
				if((username.charAt(i)>0  && username.charAt(i)<10))
				{
					alert("Username sh");
					f2=1;
				}
				if(username.charAt(i)=="_")
				{
					alert("Username should range");
					f3=1;
				}
			}
			if(f0!=1 || f1!=1 || f2==1 || f3!=1)
			{
					alert("Account Number only contains integers");
					return false;
			}
			else
			{
				f0=0,f1=0,f2=0,f3=0;
			}
			if(firstname==null||firstname=="")
			{
				alert("Firstname should not be empty");
				return false;
			}
			if(firstname.length<5 || firstname.length>20)
			{
				alert("Firstname should range in between 5 and 20");
				return false;
			}
			for(var i=0;i<firstname.length;i++)
			{
				if(!((firstname.charCodeAt(i)>64 && firstname.charCodeAt(i)<91) || (firstname.charCodeAt(i)>96 && firstname.charCodeAt(i)<123)))
				{
					f0=1;
				}
			}
			if(f0==1)
			{
				alert("Firstname should contain only charecters");
				return false;
			}
			if(lastname==null || lastname=="")
			{
				alert("lasttname should not be empty");
				return false;
			}
			if(lastname.length<5 || lastname.length>20)
			{
				alert("Lastname should range in between 5 and 20");
				return false;
			}
			for(var i=0;i<lastname.length;i++)
			{
				if(!((lastname.charCodeAt(i)>64 && lastname.charCodeAt(i)<91) || (lastname.charCodeAt(i)>96 && lastname.charCodeAt(i)<123)))
				{
					f0=1;
				}
			}
			if(f0==1)
			{
				alert("lastname should contain only charecters");
				return false;
			}
			if(fathername==null||fathername=="")
			{
				alert("Fathername should not be empty");
				return false;
			}
			if(fathername.length<5 || fathername.length>20)
			{
				alert("Fathername should range in between 5 and 20");
				return false;
			}
			for(var i=0;i<fathername.length;i++)
			{
				if(!((fathername.charCodeAt(i)>64 && fathername.charCodeAt(i)<91) || (fathername.charCodeAt(i)>96 && fathername.charCodeAt(i)<123)))
				{
					f0=1;
				}
			}
			if(f0==1)
			{
				alert("Fathername should contain only charecters");
				return false;
			}
			
			if(sextype.equals("select"))
			{
				alert("Please select a gender");
				return false;
			}
			if(dt==null || dt=="")
			{
				alert("Date should not be empty");
				return false;
			}
			if(dt<0 || dt>31)
			{
				alert("Date should greater than 0 and less than 31");
				return false;
			}
			if(!(dt.charAt(0)>0 && dt.charAt(0)<9))
			{
				alert("Date should contain only numbers");
				return false;
			}
			if(mon==null || mon=="")
			{
				alert("mon should not be empty");
				return false;
			}
			for(var i=0;i<month.length;i++)
			{
				if(mon==(month[i]))
					f0=1;
			}
			if(f0==0)
			{
				for(var i=0;i<month1.length;i++)
				{
					alert("please enter correct month name from "+month[i]+","+month[i+1]+","+month[i+2]+","+month[i+3]+","+month[i+4]+","+month[i+5]+","+month[i+6]+","+month[i+7]+","+month[i+8]+","+month[i+9]+","+month[i+10]+","+month[i+11]+","+month[i+12]);
					return false;
				}
			}
			else
				f0=0;
			if(yr==null || yr=="")
			{
				alert("Year should not be empty");
				return false;
			}
			if(yr<1900 || yr>20013)
			{
				alert("year should greater than 1900 and less than 2013");
				return false;
			}
			if(!(yr.charAt(0)>0 && yr.charAt(0)<9))
			{
				alert("Date should contain only numbers");
				return false;
			}
			if((yr%4)==0)
			{
				for(var i=0;i<month.length;i++)
				{
					if(mon==month[1] && dt>29)
					{
						alert(month[1]+ " should contain less than 29 days in selected year");
						return false;
					}
					else if((mon==month[3] || mon==month[5] || mon==month[8] || mon==month[10]) && (dt>30))
					{
						alert(mon + " month should contain greater than 30 days");
						return false;
					}
				}
			}
			else
			{
				for(var i=0;i<month.length;i++)
				{
					if(mon==month[1] && dt>29)
					{
						alert(month[1]+ " should contain less than 28 days in selected year");
						return false;
					}
					else if((mon==month[3] || mon==month[5] || mon==month[8] || mon==month[10]) && (dt>30))
					{
						alert(mon + " month should contain greater than 30 days");
						return false;
					}
				}
			}
			if(mailid==null || mailid=="")
			{
				alert("EmailId should not be empty");
				return false;
			}
			if(!(mailid.match(em)))
			{
				alert("Enter valid email id");
				return false;
			}
			if(password==null || password=="")
			{
				alert("Password should not be empty");
				return false;
			}
			f0=0;
			for(var i=0;i<password.length;i++)
			{
				if(!((password.charCodeAt(i)>64 && password.charCodeAt(i)<91) || (password.charCodeAt(i)>96 && password.charCodeAt(i)<123) || (password.charAt(i)>=0 && password.charAt(i)<=9)))
				{
					alert("hai");
					f0=1;
				}
			}
			if(f0==1)
			{
				alert("Password should contain only alphanumeric charecters");
				return false;
			}
			if(password!=password1)
			{
				alert("Both passwords doesn't match");
				return false;
			}
			if(address==null || address=="")
			{
				alert("Address should not be empty");
				return false;
			}
			
}