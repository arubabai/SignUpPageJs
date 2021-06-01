
		let validName=()=>{
			let name=document.getElementById('t1').value;
			if(name==''||name==null){
				document.getElementById('errorName').innerHTML="Name Required!";
				document.getElementById('b1').disabled=true;
				document.getElementById('t1').classList.add('is-invalid');
			}else{
				let nameReg=/^[A-Za-z\s]+$/;
				if(nameReg.test(name) && name.length>=3){
					document.getElementById('t1').value=name.charAt(0).toUpperCase()+name.slice(1);
					document.getElementById('errorName').innerHTML="";
					document.getElementById('b1').disabled=false;
					document.getElementById('t1').classList.remove('is-invalid');
				}else{
					document.getElementById('errorName').innerHTML="Invalid Name!";
					document.getElementById('b1').disabled=true;
				}
			}
		};


		let validPhone=()=>{
			let phn= document.getElementById('t2').value;
			if(phn==''||phn==null){
				document.getElementById('errorPhn').innerHTML="Phone Required!";
				document.getElementById('b1').disabled=true;
				document.getElementById('t2').classList.add('is-invalid');
			}else{
				//let phnReg=/^\d{10}$/;
				if(phn.length==10){
					if(phn.substr(0,1)=='9'||phn.substr(0,1)=='8'||phn.substr(0,1)=='7'||phn.substr(0,1)=='6'){
					document.getElementById('errorPhn').innerHTML="";
					document.getElementById('b1').disabled=false;
					document.getElementById('t2').classList.remove('is-invalid');
					}else{
						document.getElementById('errorPhn').innerHTML="Start with 7,6,8,9";
						document.getElementById('b1').disabled=true;
						document.getElementById('t2').classList.add('is-invalid');
					}
				}else{
					document.getElementById('errorPhn').innerHTML="Invalid Phone!";
					document.getElementById('b1').disabled=true;
					document.getElementById('t2').classList.add('is-invalid');
				}
			}
		};

		let validEmail=()=>{
			let email=document.getElementById('t3').value;
			if(email==''||email==null){
				document.getElementById('errorEmail').innerHTML='Email Required!';
				document.getElementById('t3').classList.add(is-invalid);
				document.getElementById('b1').disabled=true;
			}else{
				let emailReg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
				if(emailReg.test(email)){
					document.getElementById('errorEmail').innerHTML='';
					document.getElementById('b1').disabled=false;
					document.getElementById('errorEmail').classList.remove(is-invalid);
				}else{
					document.getElementById('errorEmail').innerHTML='Invalid Email!';
					document.getElementById('b1').disabled=true;
					document.getElementById('t3').classList.add(is-invalid);
				}
			}
		};

		let validPass=()=>{
			let pass=document.getElementById('p1').value;
			if(pass==''||pass==null){
				document.getElementById('errorPass').innerHTML='Password Required!';
				document.getElementById('p1').classList.add(is-invalid);
				document.getElementById('b1').disabled=true;
			}else{
				let passReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
				if(passReg.test(pass) && pass.length>=6){
					console.log(`Password ${pass}`);
					document.getElementById('errorPass').innerHTML='';
					document.getElementById('b1').disabled=false;
					document.getElementById('errorPass').classList.remove(is-invalid);
				}else{
					document.getElementById('errorPass').innerHTML="Password must contains atleast<ul><li>One UpperCase</li><li>One LowerCase</li><li>One Digit</li><li>One Special Char</li><li>Min:6 to Max:15 Chars Long.</li></ul>";
					document.getElementById('b1').disabled=true;
					document.getElementById('p1').classList.add(is-invalid);
				}
			}
		};

		let validConPass=()=>{
			let conPass=document.getElementById('p2').value;
			if(conPass==''||conPass==null){
				document.getElementById('errorConPass').innerHTML='Confirm Password Required!';
				document.getElementById('p2').classList.add(is-invalid);
				document.getElementById('b1').disabled=true;
			}else{
				
				if(conPass.match(document.getElementById('p1').value)){
					document.getElementById('errorConPass').innerHTML='';
					document.getElementById('b1').disabled=false;
					document.getElementById('errorConPass').classList.remove(is-invalid);
				}else{
					document.getElementById('errorConPass').innerHTML='Password mismatch with original!';
					document.getElementById('b1').disabled=true;
					document.getElementById('p2').classList.add(is-invalid);
				}
			}
				
		};

		let toggalePass=()=>{
			let pass=document.getElementById('p1');
			let pass1=document.getElementById('p2');
			let toggle=document.getElementById('ch1');
			if(toggle.checked)
				pass.type=pass1.type='text';
			else
				pass.type=pass1.type='password';
		};
		// let state=false;
		 
		let toggale=()=>{
			//if(state){
				if(document.getElementById('p1').type=='password'){
				//document.getElementById('p1').setAttribute('type','password');
				//toggle.classList.add('hide');
				//state=false;
				document.getElementById('p1').type='text';
				document.getElementById('eye').classList.add('fa-eye');
				document.getElementById('eye').classList.remove('fa-eye-slash');
			}else{
				document.getElementById('p1').type='password';
				//document.getElementById('p1').setAttribute('type','text');
				//toggle.classList.remove('hide');
				//state=true;
				document.getElementById('eye').classList.remove('fa-eye');
				document.getElementById('eye').classList.add('fa-eye-slash');
			}
		};

		let toggaleConPass=()=>{
			if(document.getElementById('p2').type=='password'){
				
				document.getElementById('p2').type='text';
				document.getElementById('conEye').classList.add('fa-eye');
				document.getElementById('conEye').classList.remove('fa-eye-slash');
			}else{
				document.getElementById('p2').type='password';
				document.getElementById('conEye').classList.remove('fa-eye');
				document.getElementById('conEye').classList.add('fa-eye-slash');
			}
		};


		// document.getElementById('eye').addEventListener("click",function(){
		// 	if(document.getElementById('p1').type=='password'){
		// 		document.getElementById('p1').type='text';
		// 		this.classList.add('fa-eye');
		// 		this.classList.remove('fa-eye-slash');
		// 	}else{
		// 		document.getElementById('p1').type='password';
		// 		this.classList.remove('fa-eye');
		// 		this.classList.add('fa-eye-slash');
		// 	}
		// });

		let count = 30;
       let timer =  setInterval(function(){
            console.log(count);
            document.getElementById('timer').innerHTML=`Time ${count} sec left`;
            if(count==0){
                clearInterval(timer);
                alert("Sorry!Time Out..");
                window.location.href='areaCir.html';
            }
            count--;
        },1000);

       // let tim=setInterval(myTime,1000);
       // function myTime(){
       // 	let d=new Date();
       // 	let t=d.toLocaleTimeString();
       // 	document.getElementById('time').innerHTML=t;
       // }
		
		let tim=setInterval(function(){
			let t=new Date();
			let d=t.toLocaleTimeString();
			document.getElementById('time').innerHTML=d;
			//clearInterval(tim);
		},1000);