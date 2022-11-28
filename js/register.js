$(document).ready(function(){
/*
-순서-
1. 아이디
- 5~20자리 영어소문자, 숫자, 특수문자만 가능
- 숫자가 하나 이상 포함되어야
- 특수문자 하나 이상 포함되어야


2. 비밀번호
3. 비밀번호 재확인
4. 이름 => 입력 했는지(null이면 허용 안되게)
5. 생년월일은 => 정규식


6. 성별은 걸거없음.......!
7. 이메일도 null만 허용 안되게



*/
/* 가입하기 버튼 */
let btn = $('#reg_btn_agr');
/* 아이디 */

let id = $('#id');
let idval = id.val();
let msg = $('.reg_msg');
// btn_agr.attr('type','submit');
// || idval <= 20
// innerText / innerHtml .text("내용") / .html("내용")

//하나씩 keydown keyon...잡고 확인해야함
//버튼 눌렀을때도 확인해야..



})
const reg_id_1 = /^[a-z0-9_-]{5,20}$/; // 소문자 , _ - 허용 / 5~20자리
let reg_msg = $('.reg_msg');

function init_msg(){
    msg.text("");
    //keydown용이야!
}
function form_chk(frm){
    //전체 정보용이야!
    // let msg = "";
    console.log("첫번쨰" + frm.reg_id.value);
    if(!reg_id_1.test(frm.reg_id.value)){
        set_message('5~20자의 영문 소문자, 숫자와 특수기호(_),(-) 만 사용 가능합니다.',frm.id)
        console.log(frm.reg_id.value);
        console.log(frm.reg_id);
        return false;
    }
    return true;
  
    
}
function set_message(msg, e){
    reg_msg.text(msg);

    if(e){
        //해당 요소로 focus
        e.select();
    }
    
}