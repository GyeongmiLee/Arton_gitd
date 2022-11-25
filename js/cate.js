/* ***************************메인 슬라이드 ***************************** */
$(document).ready(function(){
/*
1. 초기값 세팅(css에서 완)
+ 나중에 scale 추가해줘야함 (동적으로)
2. 버튼 잡아서 이동해야함


*/ 


//오른쪽 버튼 누르면 <- 
$('.slide_next').click(function(){
    $('.banner').eq((curr_b_index+1)%5).animate({ //안보이는애
        left: '-500px'
    },500)
    $('.banner').eq((curr_b_index+2)%5).animate({ //보이는애들
        left: '0px'
    },500)
    $('.banner').eq((curr_b_index+3)%5).animate({
        left: '500px'
    },500)
    $('.banner').eq((curr_b_index+4)%5).animate({
        left: '1000px'
    },500)
    $('.banner').eq(curr_b_index%5).css({

    }).animate({
        left: '1500px'
    },500)
    index ++;
})

})

let curr_b_index = 0;
let b_length = $('.banner').length;





