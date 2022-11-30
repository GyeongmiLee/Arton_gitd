$(document).ready(function(){

    //     if($('#promo_btn').val() == "1") {
            
    //         $('#promo_btn').prop('checked',true)
    //     }
    //     else {             
    //         $('#promo_btn').prop('checked', false)
    // }

})
const reg_id = /^[a-z0-9_-]{5,20}$/; // 소문자 , _ - 허용 / 5~20자리 // 0회이상으로 수정?
const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/;; // .* => 0회이상 / 숫자8~16자 /영문 대소문자 /최소 1개의 숫자 혹은 특수 문자를 포함해야 함.
const reg_name = /^[가-힣a-zA-Z]+$/; // 한글, 영문만
//만약 한글만으로 고려할 경우, /^[가-힣]+$/
const reg_birth = /^(19[0-9][0-9]|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/; //숫자로 비교해도 괜찮긴함..!
const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; 
const reg_phone = /^[0-9]{8,}$/; //8자리 이상 숫자만
// 성별은 required html에 걸어둠!
function init_msg(){
    msg.text("");
    //keydown용이야!
}
function form_chk(frm){
    //아이디 유효성 체크
    if(!reg_id.test(frm.id.value)){
        set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.',frm.id, 'id')
        return false;
    }
    if(!reg_pw.test(frm.pw.value)){
        set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.',frm.pw, 'pw')
        console.log(frm.pw.value);
        return false;
    }
    if((frm.pw_ag.value != frm.pw.value)){
        set_message('동일한 비밀번호를 사용해주세요',frm.pw_ag, 'pw_ag')
        console.log(frm.pw_ag.value);
        return false;
    }
    if(!reg_name.test(frm.u_name.value)){
        set_message('이름은 한글 또는 영문만 입력할 수 있습니다.',frm.u_name, 'u_name')
        console.log(frm.u_name.value);
        return false;
    }
    if(!reg_birth.test(frm.birth.value)){
        set_message('올바른 생년월일의 형식이 아닙니다',frm.birth, 'birth')
        console.log(frm.birth.value);
        return false;
    }
    if(!reg_email.test(frm.email.value)){
        set_message('올바른 이메일의 형식이 아닙니다',frm.email, 'email')
        console.log(frm.email.value);
        return false;
    }
    if(!reg_phone.test(frm.phone.value)){
        set_message('올바른 전화번호의 형식이 아닙니다',frm.phone, 'phone')
        console.log(frm.phone.value);
        return false;
    }
    if(!frm.promo_btn.checked){
        console.log("bbb: "+frm.promo_btn.value);
        frm.promo_btn.value = "false";
        frm.promo_btn.checked=true;
        console.log("ccc: "+frm.promo_btn.value);
        alert("회원가입이 완료되었습니다1");
        return true; //문제 : frm.promo_btn.value 값이 안나옴
    }//체크부분은 아직 미정..
    else {
        frm.promo_btn.value = "true";
        alert("회원가입이 완료되었습니다2");
        return true;
        // frm.promo_btn.checked=false;
    }
    alert("회원가입이 완료되었습니다");
    return true;
    //커서 들어가지면 메세지가 없어지게 focusout 
}
function set_message(msg, e, val){
    console.log(msg, e, val);
    $('#reg_msg_'+ val).text(""); //msg 넣어주기 위함
    $('#reg_msg_'+ val).text(msg); //msg 넣어주기 위함

    if(e){
        //해당 요소로 focus
        e.select();

    }
    
}
// 해야할거 input에 포커스걸어서...!(메세지 지워주기)
// function하나 파서 비밀번호만 바뀔때ㅁ다ㅏ -> 목요일에 다시...!
// 확인 후 다시 입력했을때 -> 조건에 맞으면 경고문 없앰 => 
// else로 넣을 조건들?


//비밀번호 재확인 변경시 -> 다시 
// https://olsh1108o.tistory.com/entry/JS-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
// 
