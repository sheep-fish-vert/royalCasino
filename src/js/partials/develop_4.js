try{
    function HeaderClick(){
        $('.green-arrow').click(function() {
            if( $(window).width()>768 && $(window).width()<1024 ){
                $('.soc-mob li').stop().slideToggle();
            }else{
                 $('.soc-mob li').removeAttr('style');
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



    $(document).ready(function(){
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