$(document).ready(function () {
    // video switch
    $('.video_switch-container').click(function(){
        const value = $('.video_switch-btn').hasClass('btnSlide')
        if(value){
            $('.video_switch-btn').removeClass('btnSlide')
            $('#video').get(0).play()
        } else {
            $('.video_switch-btn').addClass('btnSlide')
            $('#video').get(0).pause()
        }
    })  
})