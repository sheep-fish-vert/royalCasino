try{
    function HeaderClick(){
        $('.green-arrow').click(function() {
            if( $(window).width()>=768 && $(window).width()<=1024 ){
                $('.soc-mob b').stop().slideToggle();
            }else{
                 $('.soc-mob b').removeAttr('style');
            }
        });

        if( $(window).width()<=768 ){
            var span = $('<span class="mobile-head-arrow"></span>');
            if( !$('.mobile-head-arrow').length > 0 ){
                $('.menu-item-has-children a').append(span);
            }
        }else{
            $('.mobile-head-arrow').remove();
        }

        if( $(window).width()>=768 ){
            $('.bottom-head nav, header .bottom-head nav li.menu-item-has-children > ul').removeAttr('style');
        }

        $(document).on('click', '.mobile-head-arrow', function(event) {
            event.stopPropagation();
            event.preventDefault();
            $(this).parent().parent().find('ul').stop().slideToggle();
        });
    }

    function searchInput(){

        $('.form-input-clear').click(function(){
            $(this).parent().find('input').val('');
        });

        if( $(window).width() <= 1024 ){
            $('.header-search input').focus(function(event) {
                $(this).parents('.header-search').addClass('active');

            });
            $('.header-search input').blur(function(event) {
                $(this).parents('.header-search').removeClass('active');

            });
        }
    }


    $(document).ready(function(){
        validate('.header-search form');
        searchInput();
        HeaderClick();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        HeaderClick();
    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}