$(document).ready(function() {
    // alert('go');
    // 탭 메뉴를 저장한다.
    var tabmenu = $('.anno_tabmenu a');
    // console.log(tabmenu);
    //각 탭별 내용을 가진 li들을 저장
    var tabcon = $('.anno_tabcont > ul > li')

    // 클릭을 하면 이동하지 않도록 처리
    $.each(tabmenu, function(index, item) {
        // 클릭을한다.
        $(this).click(function(event) {
            // href 의 주소로 가는 것 막기
            event.preventDefault();
            // css 적용하기
            // 클릭된 정보(index)를 전달한다.
            changeTab(index);
            changeTabCon(index);
        });
    });

    function changeTab(_num) {
        tabmenu.removeClass('tab_focus');
        tabmenu.eq(_num).addClass('tab_focus');
    }

    changeTab(0);

    // 각각의 탭을 담고 있는 li 를 모션을 한다.
    function changeTabCon(_num) {
        // 1000 은 1초, 800은 0.8초
        tabcon.stop().animate({
            opacity: 0,
            top: '100%'
        }, 100);

        tabcon.eq(_num).stop().animate({
            top: 0,
            opacity: 1
        }, 600);
    }
});

$(document).ready(function() {
    // 퀵링크 탭메뉴 관련
    var quickTabMenu = $('.quick_tabmenu > ul > li');
    // 퀵링크 내용 관련
    var quickTabCont = $('.quick_tabcont > ul > li');
    // console.log(quickTabCont);

    $.each(quickTabMenu, function(index, item) {
        $(this).click(function() {
            changeQuickMenu(index);

            // 완전 초기화
            resetQuickMenu();

            changeQuckCont(index);
        });
    });

    function changeQuickMenu(_num) {
        quickTabMenu.removeClass('quick_focus');
        quickTabMenu.eq(_num).addClass('quick_focus');
    }

    // 완전 초기화 기능
    function resetQuickMenu() {
        //Li 들을 모두 200% 내려준다.
        quickTabCont.css('top', '200%');

        // 모든 a태그를 찾아서 저장
        var quickA = quickTabCont.find('a');
        // 속성 초기화
        quickA.css({
            top: 110,
            opacity: 0
        });
        // 모션 중지
        quickA.stop();
    }

    // 퀵링크 탭 내용 관련 함수
    var nowQuickNum = 0;

    function changeQuckCont(_num) {
        if (_num == nowQuickNum) {
            return;
        }
        nowQuickNum = _num;

        quickTabCont.css('top', '200%');
        quickTabCont.eq(_num).css('top', 0);
        var nowA = quickTabCont.eq(_num).find('a');
        nowA.css('opacity', 0.0);
        nowA.css('top', 110);

        // 순차적 모션으로 진행한다.
        var stepDelay = 100;
        $.each(nowA, function(index, item) {
            // 모션이 실행되기 전에 모든 아이콘을 초기위치 및, 투명도를 초기화한다.
            $(this).css({
                top: 110,
                opacity: 0
            });
            // 간격으로 모션을 진행한다.
            $(this).stop().delay(100 * index).animate({
                top: 0,
                opacity: 1
            }, 500);


        });

    }

});

$(document).ready(function() {
    // 하단 펼침메뉴
    var fList = $('.f_list');
    // 하단 메뉴 클릭 시 내용보기
    $.each(fList, function(index, item) {
        var menu = $(this).find('.f_list_menu');
        var cont = $(this).find('.f_list_cont > ul');
        menu.click(function() {
            cont.slideToggle();
            menu.toggleClass('f_list_menu_focus');
        });
    });
});


// 메뉴관련 코드
$(document).ready(function() {
    // 1. 메뉴 영역(gnb)에 롤 오버하면 서브메뉴영역(.submenu_wrap) 보기
    var gnb = $('.gnb');
    var subDiv = $('.submenu_wrap');
    gnb.mouseenter(function() {
        subDiv.stop().slideDown(400);
    });
    gnb.mouseleave(function() {
        subDiv.stop().slideUp(400);
    });
    // 주 메뉴와 서브 메뉴 포커스를 위한 처리
    var mainmenuLis = $('.mainmenu > li');
    var submenuLis = $('.submenu > li');
    // 주 메뉴 li에 롤오버 하면 클래스 적용
    $.each(mainmenuLis, function() {
        $(this).mouseenter(function(index, item) {
            var aTag = $(this).find('a');
            aTag.addClass('mainmenu_focus');
        });
        $(this).mouseleave(function() {
            var aTag = $(this).find('a');
            aTag.removeClass('mainmenu_focus');
        });
    });

    // 서브메뉴 li에 롤오버 했을때
    $.each(submenuLis, function(index, item) {
        $(this).mouseenter(function() {
            focusMain(index);
            focusSub(index);
        });
        $(this).mouseleave(function() {
            focusMain(1000);
            focusSub(1000);
        });
    });

    // 서브메뉴에 의한 주메뉴 포커스 함수
    function focusMain(_num) {
        mainmenuLis.find('a').removeClass('mainmenu_focus');
        mainmenuLis.eq(_num).find('a').addClass('mainmenu_focus');
    }

    // 주메뉴에 의한 서브 메뉴 포커스 함수
    function focusSub(_num) {
        submenuLis.removeClass('submenu_focus');
        submenuLis.eq(_num).addClass('submenu_focus');

    }
});

window.onload = function() {
    var sw2 = new Swiper('.sw2', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw2-prev',
            nextEl: '.sw2-next',
        },
        pagination: {
            el: '.sw2-pg',
            type: 'bullets',
            clickable: true,
        },

    });
    // 컨트롤러
    $('.sw2-start').click(function() {
        sw2.autoplay.start();
    });
    $('.sw2-pause').click(function() {
        sw2.autoplay.stop();
    });
    // 버튼 보이고 숨기기 처리
    $('.visual').mouseenter(function() {
        $('.sw2-prev').fadeIn();
        $('.sw2-next').fadeIn();
    });
    $('.visual').mouseleave(function() {
        $('.sw2-prev').fadeOut();
        $('.sw2-next').fadeOut();
    });

    // SNS 관련
    var snsTxt = ['', '', '', '', ''];
    var sw_sns = new Swiper('.sw_sns', {
        loop: true,
        autoplay: {
            delay: 12000,
            // 자동플레이를 하는경우
            // 좌, 우측버튼을 클릭하면
            // 자동플레이가 해지되는 현상 제거 
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw_sns_prev',
            nextEl: '.sw_sns_next',
        },
        pagination: {
            el: '.sw_sns_pg',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class = "' + className + ' sns_icon_' + (index + 1) + '">' + '</span>';
            },
        },
    });

    
};

// 모달창 기능
$(document).ready(function(){
    // 버튼, 바탕화면  눌렀을 때 닫기
    $('.modal_close, .modal').click(function(){
        $('.modal').hide();
    });
    // 내용을 클릭한 경우는 닫지 않기
    $('.modal_con').click(function(event){
        event.preventDefault();
        event.stopPropagation();
    });
});