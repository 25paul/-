/**
 * Created by CXJ on 2016/3/27.
 */

$(function () {
    $.fn.sliderTV.defaults.animation.duration = 350;  //幻灯片速度
    $.fn.sliderTV.defaults.animation.easing = 'linear';   //动画效果
    $.fn.sliderTV.defaults.bullets.canShow = false;

    $('#sliderTV').sliderTV({ animation: { isVertical: true } });

    //键盘控制功能
    $('body').keydown(function (e) {
        switch (e.keyCode) {
            case 38:
                $('#sliderTV').trigger('move:prev');
                break;
            case 40:
                $('#sliderTV').trigger('move:next');
                break;
        }
    });

    //前后导航点击控制
    $('#sliderTV__mask-down').click(function () {
        $('#sliderTV').trigger('move:next');
    });
    $('#sliderTV__mask-up').click(function () {
        $('#sliderTV').trigger('move:prev');
    });

    //进程提示
    $('#sliderTV').on('animation:start', function () {
        console.clear();
        console.log('sliderTV animation has started');
    });
    $('#sliderTV').on('animation:end', function () {
        console.clear();
        console.log('sliderTV animation has finished');
    });
});
