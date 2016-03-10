try{

    function someAvesomeFix(){
        var ter = Math.max( $('.super-stat>.conteiner').height(),
            $('.second-block-wrap>.conteiner').height(),
            $('.slice1>.conteiner').height() + $('.slice2>.conteiner').height() + $('.slice3>.conteiner').height()+4
        );

        //var ter = $('.super-stat').height();
        var lastSlice = ter - $('.slice1').height() - $('.slice2').height()-4;

        $('.casino-list-wrap').height(ter);
        $('.second-block-wrap>.conteiner').height(ter/2-1);
        $('.slice3').height(lastSlice);
    }

    $(document).ready(function(){
        /*
        if ($(window).width()>1024) {
            someAvesomeFix();
        }
        else{
            $('.casino-list-wrap').css('height', 'auto');
            $('.second-block-wrap>.conteiner').css('height', 'auto');
            $('.slice3').css('height', 'auto');
        }
        */

    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        /*
        if ($(window).width()>1024) {
            someAvesomeFix();
        }
        else{
            $('.casino-list-wrap').css('height', 'auto');
            $('.second-block-wrap>.conteiner').css('height', 'auto');
            $('.slice3').css('height', 'auto');
        }
        */

    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}