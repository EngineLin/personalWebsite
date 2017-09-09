const headerHeight = window.innerHeight;
const getFlashBox = document.getElementById('flashbox');
var runSkill = false;    
var runAboutMe = false;

$(document).ready(function(){

    // 擷取使用者初始畫面高度
    $('#header').css('height',headerHeight);

    // 設計閃動的輸入符號
    function flashBox(){
        $('#flashBox').toggle()
    };
    setInterval(flashBox,800);

    // Navbar點選時滾動效果
    $('#navbar ul li').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('body').animate({scrollTop: targetPos}, 1000);
    });

    // 標題返回最頂端
    $('.logo').click(function(e){
        e.preventDefault();
        $('body').animate({scrollTop: 0}, 1000);
    });

    // 滾動時的效果
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Navbar位置對應顯示
        $('#navbar ul li a').each(function(){
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (scrollPos > (targetPos - 120) && scrollPos < targetPos + targetHeight){
                $('#navbar ul li a').removeClass('active');
                $(this).addClass('active')
            }
        });

        // Navbar 在離開 header 時放上固定形式 
        if (scrollPos >= (headerHeight-20)){
            $('#navbar').css('position','fixed');
            $('#navbar').css('background-color','rgba(218, 132, 47, 0.3)');
        }else{
            $('#navbar ul li a').removeClass('active');
            $('#navbar').css('position','absolute');
            $('#navbar').css('background-color','rgba(218, 132, 47, 0.7)');
        };

        // header視差設計
        $('#header').css('background-position-y', ((scrollPos/2) + 'px'));
        $('#title').css('top',(((scrollPos/2)+200)+'px'))
        if(scrollPos >= headerHeight){
           $('#title p').hide(); 
           $('#flashBox').hide();
        }else{
            $('#title p').show();
            $('#flashBox').show();
        };

        // Title視差設計
        $('#skill').css('background-position-x', ((-scrollPos/2) + 'px'));
        $('#contact').css('background-position-x', ((scrollPos/2) + 'px'));

        // aboutMe圖片動畫(animated)
        var aboutMeTop = $('#aboutMe').position().top;
        if (scrollPos >= (aboutMeTop - windowHeight / 2) && runAboutMe != true){
            runAboutMe = true;
            $('#aboutMe img').addClass('animated bounceInDown');     
        };    

        // skill能量條動畫(css->transition)
        var skillTop = $('#skill').position().top;
        if (scrollPos >=(skillTop - windowHeight / 2) && runSkill != true){
            runSkill = true;
            $('#skill .runbox div').each(function(){
                var thisValue = $(this).data('progress');
                $(this).css('width', (thisValue + '%'));
            });
        };
        // 聯絡資訊顯示動畫
        var contactTop = $('#contact').position().top;
        if (scrollPos >= (contactTop - windowHeight / 2)){
            $('#contact img').css('opacity','1');
            $('#contact img').css('transform','translateY(0)');
            $('.contactInfo').css('opacity','1');
            $('.contactInfo').css('transform','translateY(0)');
        }else{
            $('#contact img').css('opacity','0');
            $('#contact img').css('transform','translateY(100px)');
            $('.contactInfo').css('opacity','0');
            $('.contactInfo').css('transform','translateY(100px)');
        }
    });
});