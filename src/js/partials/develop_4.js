try{
    function socialHeaderClick(){
        $('.green-arrow').click(function() {
            if( $(window).width()>768 && $(window).width()<1024 ){
                $('.soc-mob li').stop().slideToggle();
            }else{
                 $('.soc-mob li').removeAttr('style')
            }
        });

        if( $(window).width()<=768 ){
            var span = $('<span class="mobile-head-arrow"></span>')
            // $('.menu-item-has-children ')
        }
    }



    $(document).ready(function(){
        socialHeaderClick();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        socialHeaderClick();
    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}