$(document).ready(function(){
/*순서
1. 필수동의(2개)가 체크되어야 버튼 활성화(현재는 disabled)
    하나라도 체크 안되어있으면 alert("개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.")
2. 취소 버튼 누르면 초기화 되어야함

(혹쉬 전체 체크 활성화 한다면)
1. 모두 동의 체크시 -> 모든 체크박스 체크
    모두 동의 해제시 -> 모든 체크박스 해제
2. 모두 동의 체크하지않고 밑 2개 일일히 체크시 -> 모두 동의 체크박스 활성화
3. 모두 동의 체크한 상태에서 하나 체크 해제 -> 모두 동의 체크박스 해제

*/

    
$('#terms_btn_agr').click(function(){
const btn_agr = $('#terms_btn_agr');
const terms_service = $('#terms_service');
const terms_privacy = $('#terms_privacy');

    if(!terms_service.is(':checked') || !terms_privacy.is(':checked')){
        alert("개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.")
        return;
    }
    else{
        btn_agr.attr('type','submit');
    }
});

$('#terms_btn_can').click(function(){
    window.location.reload();
});
});
