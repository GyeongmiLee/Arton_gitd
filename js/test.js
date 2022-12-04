let list_text = $('list_text');
const f_timer = 1500;
// 초기화 걸고
$('.w_a_txtbox').eq(0).css({display: 'block'});
$('.w_a_img').eq(0).css({ display: 'block' });

$('.per_title_item').click(function () {
     click($(this).index());
     count=($(this).index()+1)%4;
    // w_idx($(this).index());
})


// //첫번째 'rgb(48 68 56)'
// //두번쨰 #4a1714;
// //세번째 'rgb(245 131 87)'
// //네번째 'rgb(11 46 93)'

function click(f_idx) {
    //클릭해서 fn 돌면 -> fadeout으로 초기화
    $('.w_a_txtbox').css({ zIndex: 1 }).fadeOut(f_timer);
    $('.w_a_img').css({ zIndex: 1 }).fadeOut(f_timer);

    $('.w_a_txtbox').eq(f_idx).css({ zIndex: 99 }).fadeIn(f_timer);
    $('.w_a_img').eq(f_idx).css({ zIndex: 99 }).fadeIn(f_timer);
    if (f_idx == 0) {
        color_chg('rgb(48 68 56)');
    }
    if (f_idx == 1) {
        color_chg('#4a1714');
    }
    if (f_idx == 2) {
        color_chg('rgb(245 131 87)');
    }
    if (f_idx == 3) {
        color_chg('rgb(11 46 93)');
    }
    
}
function color_chg(color) {
    $('.what_about_body').css({
        zIndex: 99,
        backgroundColor: color
    }).fadeIn(f_timer+300);
}

//1번으로 돔
function auto_slide(){
    interval = setInterval(function(){
        click(count % 4);
        console.log(count % 4)
        count++;
    },f_timer+500)
}
let count = 1;
auto_slide();

$('.what_about_body').hover(function(){
    clearInterval(interval);
},function(){
    auto_slide()
});

/////////////////// 회원가입 ////////
$(document).ready(function () {

    //     if($('#promo_btn').val() == "1") {

    //         $('#promo_btn').prop('checked',true)
    //     }
    //     else {             
    //         $('#promo_btn').prop('checked', false)
    // }
    // 원래 아이디 정규식  : /^[a-z0-9_-]{5,20}$/
    ///^[a-z]+[a-z0-9_-]{5,19}$/g
    ///^(?=.*[0-9]+)[a-z]+[a-z0-9_-]{5,20}$/g
    // g는 모든 문자 검색하는 플래그
    // 원래 배밀 /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/
    // (?=.*) 내의 조건은 반드시 필요
    // [] 내의 조건은 선택적 조건
    // {} 내의 조건은 최소, 최대길이

})
const reg_id = /^[a-z0-9_-]{5,20}$/; // 소문자 , _ - 허용 / 5~20자리 // 0회이상으로 수정?
const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/; // .* => 0회이상 / 숫자8~16자 /영문 대소문자 /최소 1개의 숫자 혹은 특수 문자를 포함해야 함.
const reg_name = /^[가-힣a-zA-Z]+$/; // 한글, 영문만
//만약 한글만으로 고려할 경우, /^[가-힣]+$/
const reg_birth = /^(19[0-9][0-9]|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/; //숫자로 비교해도 괜찮긴함..!
const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
const reg_phone = /^[0-9]{11,}$/; //11자리 이상 숫자만
// 성별은 required html에 걸어둠!

function focus_chk(type) {
    let id = $('#id');
    let pw = $('#pw');
    let pw_ag = $('#pw_ag')
    let u_name = $('#u_name');
    let birth = $('#birth');
    let email = $('#email');
    // let phone = $('#phone');

    // $('#reg_msg_id').text("");
    // $('#reg_msg_pw').text("");
    // $('#reg_msg_pw_ag').text("");
    // $('#reg_msg_u_name').text("");
    // $('#reg_msg_birth').text("");
    // $('#reg_msg_email').text("");
    // $('#reg_msg_phone').text("");
    //문제 얘때문에 onsubmit했을때의 텍스트가 날아감

    if (type == "pw") {
        if (reg_id.test(id.val())) {
            set_message('멋진 아이디네요!', 'id')
        }
        else if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))

    }
    else if (type == "pw_ag") {
        //모든 조건이 일치하면 메세지 지우게
        if (reg_pw.test(pw.val())) {
            $('#reg_msg_pw').text("");
        }
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }

        blank_chk($('#reg_msg_pw'), $('#pw'))
    }
    else if (type == "u_name") {
        //모든 조건이 일치하면 메세지 지우게
        if (pw.val() == pw_ag.val()) {
            $('#reg_msg_pw_ag').text("");
        }
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }

        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
    }
    else if (type == "birth") {
        //모든 조건이 일치하면 메세지 지우게
        if (reg_name.test(u_name.val())) {
            $('#reg_msg_u_name').text("");
        }
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }


        blank_chk($('#reg_msg_u_name'), $('#u_name'))
    }
    else if (type == "email") {
        //모든 조건이 일치하면 메세지 지우게
        if (reg_birth.test(birth.val())) {
            $('#reg_msg_birth').text("");
        }
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }
        blank_chk($('#reg_msg_u_name'), $('#u_name'))
        if (!reg_birth.test(birth.val())) {
            set_message('올바른 생년월일의 형식이 아닙니다', 'birth')
        }
        blank_chk($('#reg_msg_birth'), $('#birth'))
    }
    else if (type == "phone") {
        //모든 조건이 일치하면 메세지 지우게
        if (reg_email.test(email.val())) {
            $('#reg_msg_email').text("");
        }
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }
        blank_chk($('#reg_msg_u_name'), $('#u_name'))
        if (!reg_birth.test(birth.val())) {
            set_message('올바른 생년월일의 형식이 아닙니다', 'birth')
        }
        blank_chk($('#reg_msg_birth'), $('#birth'))
        if (!reg_email.test(email.val())) {
            set_message('올바른 이메일의 형식이 아닙니다', 'email')
        }
        blank_chk($('#reg_msg_email'), $('#email'))
    }
}
function blank_chk(msg, txt) {
    if (txt.val().length == 0) {
        msg.text("필수 입력 항목입니다")
        // return false;
    }
    // return true;
}
function set_message(msg, val) {
    // console.log(msg, e, val);
    $('#reg_msg_' + val).text(""); //msg 넣어주기 위함
    $('#reg_msg_' + val).text(msg); //msg 넣어주기 위함
}

function form_chk(frm) {

    //아이디 유효성 체크
    if (!reg_id.test(frm.id.value)) {
        set_form_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', frm.id, 'id')
        return false;
    }
    if (!reg_pw.test(frm.pw.value)) {
        set_form_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', frm.pw, 'pw')
        console.log(frm.pw.value);
        return false;
    }
    if ((frm.pw_ag.value != frm.pw.value)) {
        set_form_message('동일한 비밀번호를 사용해주세요', frm.pw_ag, 'pw_ag')
        console.log(frm.pw_ag.value);
        return false;
    }
    if (!reg_name.test(frm.u_name.value)) {
        set_form_message('이름은 한글 또는 영문만 입력할 수 있습니다.', frm.u_name, 'u_name')
        console.log(frm.u_name.value);
        return false;
    }
    if (!reg_birth.test(frm.birth.value)) {
        set_form_message('올바른 생년월일의 형식이 아닙니다', frm.birth, 'birth')
        console.log(frm.birth.value);
        return false;
    }
    if (!reg_email.test(frm.email.value)) {
        set_form_message('올바른 이메일의 형식이 아닙니다', frm.email, 'email')
        console.log(frm.email.value);
        return false;
    }
    if (!reg_phone.test(frm.phone.value)) {
        set_form_message('올바른 전화번호의 형식이 아닙니다', frm.phone, 'phone')
        console.log(frm.phone.value);
        return false;
    }
    if (!frm.promo_btn.checked) {
        console.log("bbb: " + frm.promo_btn.value);
        frm.promo_btn.value = "false";
        frm.promo_btn.checked = true;
        console.log("ccc: " + frm.promo_btn.value);
        alert("회원가입이 완료되었습니다1");
        return true;
    }
    else {
        frm.promo_btn.value = "true";
        alert("회원가입이 완료되었습니다2");
        return true;
        // frm.promo_btn.checked=false;
    }
    // alert("회원가입이 완료되었습니다");
    // return true;
}

function set_form_message(msg, e, val) {
    $('#reg_msg_' + val).text(""); //msg 넣어주기 위함
    $('#reg_msg_' + val).text(msg); //msg 넣어주기 위함

    if (e) {
        //해당 요소로 focus
        e.select();

    }

}


// 해야할거 input에 포커스걸어서...!(메세지 지워주기)
// function하나 파서 비밀번호만 바뀔때ㅁ다ㅏ -> 목요일에 다시...!
// 확인 후 다시 입력했을때 -> 조건에 맞으면 경고문 없앰 =>
// else로 넣을 조건들?

// onfocus 걸어서 -> 커서 빠져나가거나 키보드 keydown 벗어나면 (null일시)
// 필수입력항목입니다
// 조건 만족 안할시에는 -> 원래 쓰려던 메세지 띄워주기

// form 체크 후 -> 유효성 걸리는게 2개 이상이면
// focus 했을때 메세지 지워주기setmessage 다시 보내서 빈칸으로 만들어주기(앞의 모든 메세지 지워주기)
// focus 들어오면 -> 빈칸이면 blank() 실행(위에 안걸린 모두를 확인해야함) / 조건식 확인해서 테스트해서 맞으면 지워라

//비밀번호 재확인 변경시 -> 다시
// https://olsh1108o.tistory.com/entry/JS-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
// 
