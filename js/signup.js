window.ouser_id = document.getElementById("ouser_id");
window.nick = document.getElementById("nick");
window.psw = document.getElementById("opassword");
window.pswc = document.getElementById("rptpassword");
window.email = document.getElementById("email");

window.id_error = document.getElementById("ouser_id_error");;
window.nick_error = document.getElementById("nick_error");;
window.opw_error = document.getElementById("opw_error");;
window.pw_match_error = document.getElementById("pw_match_error");;
window.email_error = document.getElementById("email_error");;

ouser_id.onkeyup = OuserIdCheck;
nick.onkeyup = nickCheck;
psw.onkeyup = opasswordCheck;
pswc.onkeyup = opasswordMatch;
email.onkeyup = emailCheck;

window.valid_id = false;
window.valid_nick = false;
window.valid_pw = false;
window.valid_pw2 = false;
window.valid_email = false;

window.letters = /[a-z]/g;
window.numbers = /[0-9]/g;
window.format = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,1500}$/;

function OuserIdCheck() {
	if(ouser_id.value.length > 0) {
		if(ouser_id.value.length < 3) {
			id_error.style.color = "red";
			id_error.innerHTML = "최소 3자 이상의 아이디를 입력해주세요.";
			valid_id = false;
		}
		else {
			id_error.style.color = "green";
			id_error.innerHTML = "사용 가능한 아이디입니다.";
			valid_id = true;
		}
	}
	else {
		id_error.innerHTML = "";
		valid_id = false;
	}
}

function nickCheck() {
	if(nick.value.length > 0) {
		if(nick.value.length < 2) {
			nick_error.style.color = "red";
			nick_error.innerHTML = "최소 2자 이상의 닉네임을 입력해주세요.";
			valid_nick = false;
		}
		else {	
			nick_error.style.color = "green";
			nick_error.innerHTML = "사용 가능한 닉네임입니다.";
			valid_nick = true;
		}
	}
	else {
		nick_error.innerHTML = "";
		valid_nick = false;
	}
}
	
function opasswordCheck() {
	if(psw.value.length > 0) {
		if(psw.value.length < 6 && psw.value.length > 0) {
			opw_error.style.color = "red";
			opw_error.innerHTML = "최소 6자 이상의 비밀번호를 입력해주세요.";
			valid_pw = false;
		}
		else if(psw.value.match(format)) {
			opw_error.style.color = "green";
			opw_error.innerHTML = "사용 가능한 비밀번호입니다.";
			valid_pw = true;
		}
		else {
			opw_error.style.color = "red";
			opw_error.innerHTML = "비밀번호는 영어 소문자, 숫자, 특수문자로 구성되어야 합니다.";
			valid_pw = false;
		}
	}
	else {
		opw_error.innerHTML = "";
		valid_pw = false;
	}
}

function opasswordMatch() {
	if(pswc.value.length > 0) {
		if(pswc.value != psw.value) {
			pw_match_error.style.color = "red";
			pw_match_error.innerHTML = "비밀번호가 일치하지 않습니다.";
			valid_pw2 = false;
		}
		else {
			pw_match_error.style.color = "green";
			pw_match_error.innerHTML = "비밀번호가 일치합니다.";
			valid_pw2 = true;
		}
	}
	else {
		pw_match_error.innerHTML = "";
		valid_pw2 = false;
	}
}


const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function emailCheck() {
	if(email.value.length > 0) {
		if(!validateEmail(email.value)) {
			email_error.style.color = "red";
			email_error.innerHTML = "이메일 형식을 확인해주세요.";
			valid_email = false;
		}
		else {	
			email_error.style.color = "green";
			email_error.innerHTML = "사용 가능한 이메일입니다.";
			valid_email = true;
		}
	}
	else {
		email_error.innerHTML = "";
		valid_email = false;
	}
}
	
	
function validateMyForm() {
	if(valid_id == true && valid_nick == true && valid_pw == true && valid_pw2 == true && valid_email == true) {
		return true;
	}
	else {
		alert("형식에 맞게 입력하였는지 확인해 주세요.");
		window.history.back();
		return false;
	}
}