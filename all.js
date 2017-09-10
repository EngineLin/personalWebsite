'use strict';

var headerHeight = window.innerHeight;
var getFlashBox = document.getElementById('flashbox');
var coverPicWidth = window.innerWidth;
var runSkill = false;
var runAboutMe = false;
console.log(coverPicWidth);

$(document).ready(function () {

    // 擷取使用者初始畫面高度
    $('#header').css('height', headerHeight);
    if (coverPicWidth < 1450) {
        $('#header').css('background-size', '1300px 800px');
    } else {
        $('#header').css('background-size', 'cover');
    };

    //擷取title文字寬度
    // $(window).
    var titleWidth = $('#title p').width();
    coverPicWidth = window.innerWidth;
    var titleLeftPos = coverPicWidth / 2 - titleWidth / 2 - 10;
    $('#title').css('left', titleLeftPos);
    $('#title').css('top', headerHeight / 4);

    // 設計閃動的輸入符號
    function flashBox() {
        $('#flashBox').toggle();
    };
    setInterval(flashBox, 800);

    // Navbar點選時滾動效果
    $('#navbar ul li').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('body').animate({ scrollTop: targetPos }, 1000);
    });

    // 標題返回最頂端
    $('.logo').click(function (e) {
        e.preventDefault();
        $('body').animate({ scrollTop: 0 }, 1000);
    });

    // 滾動時的效果
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Navbar位置對應顯示
        $('#navbar ul li a').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (scrollPos > targetPos - 120 && scrollPos < targetPos + targetHeight) {
                $('#navbar ul li a').removeClass('active');
                $(this).addClass('active');
            }
        });

        // Navbar 在離開 header 時放上固定形式 
        if (scrollPos >= headerHeight - 20) {
            $('#navbar').css('position', 'fixed');
            $('#navbar').css('background-color', 'rgba(218, 132, 47, 0.3)');
        } else {
            $('#navbar ul li a').removeClass('active');
            $('#navbar').css('position', 'absolute');
            $('#navbar').css('background-color', 'rgba(218, 132, 47, 0.7)');
        };

        // header視差設計
        $('#header').css('background-position-y', scrollPos / 2 + 'px');
        $('#title').css('top', scrollPos / 2 + headerHeight / 4 + 'px');
        if (scrollPos >= headerHeight) {
            $('#title p').hide();
            $('#flashBox').hide();
        } else {
            $('#title p').show();
            $('#flashBox').show();
        };

        // Title視差設計
        $('#skill').css('background-position-x', -scrollPos / 2 + 'px');
        $('#contact').css('background-position-x', scrollPos / 2 + 'px');

        // aboutMe圖片動畫(animated)
        var aboutMeTop = $('#aboutMe').position().top;
        if (scrollPos >= aboutMeTop - windowHeight / 2 && runAboutMe != true) {
            runAboutMe = true;
            $('#aboutMe img').addClass('animated bounceInDown');
        };

        // skill能量條動畫(css->transition)
        var skillTop = $('#skill').position().top;
        if (scrollPos >= skillTop - windowHeight / 2 && runSkill != true) {
            runSkill = true;
            $('#skill .runbox div').each(function () {
                var thisValue = $(this).data('progress');
                $(this).css('width', thisValue + '%');
            });
        };
        // 聯絡資訊顯示動畫
        var contactTop = $('#contact').position().top;
        if (scrollPos >= contactTop - windowHeight / 2) {
            $('#contact img').css('opacity', '1');
            $('#contact img').css('transform', 'translateY(0)');
            $('.contactInfo').css('opacity', '1');
            $('.contactInfo').css('transform', 'translateY(0)');
        } else {
            $('#contact img').css('opacity', '0');
            $('#contact img').css('transform', 'translateY(100px)');
            $('.contactInfo').css('opacity', '0');
            $('.contactInfo').css('transform', 'translateY(100px)');
        }
    });
});
'use strict';

/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});
//# sourceMappingURL=all.js.map
