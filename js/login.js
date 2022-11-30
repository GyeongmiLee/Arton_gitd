$(document).ready(function(){
// alert("d");

// $(document).on('click','#ttt',function(){
//     console.log($('#id').val());
//     console.log($('#pw').val());
// })
});
let login_msg = $('.login_msg');
function form_chk(frm){
    // console.log(frm.$('id'));
    // console.log(frm.$('id').val());

    if(frm.id.value.length == 0 && frm.pw.value.length == 0){
        set_message('아이디와 패스워드는 필수항목입니다',frm.id);
        // alert("d1");
        return false;
    }
    else if(frm.id.value.length == 0){
        set_message('id를 입력해주세요',frm.id);
        // alert("d2");
        return false;
    }
    else if(frm.pw.value.length == 0){
        set_message('pw를 입력해주세요',frm.pw);
        // alert("d3");
        return false;
    }
    return true;
}
//trim 적용하면 좋을듯 (세현의견)
function set_message(msg,e){
    login_msg.text(msg);
    // alert("d4");
    if(e){
         e.select();
    }
}