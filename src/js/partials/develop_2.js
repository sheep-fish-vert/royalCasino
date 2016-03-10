try{

    function someAvesomeFix(){
        var ter = $('.super-stat').height();
        var lastSlice = ter - $('.slice1').height() - $('.slice2').height();
        console.log(ter);
        $('.casino-list-wrap').height(ter);
        $('.second-block-wrap>.conteiner').height(ter/2-1);
        $('.slice3').height(lastSlice-4);
    }

    $(document).ready(function(){
        if ($(window).width()>1024) {
            someAvesomeFix();
        }
        else{
            $('.casino-list-wrap').css('height', 'auto');
            $('.second-block-wrap>.conteiner').css('height', 'auto');
            $('.slice3').css('height', 'auto');
        }

    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        if ($(window).width()>1024) {
            someAvesomeFix();
        }
        else{
            $('.casino-list-wrap').css('height', 'auto');
            $('.second-block-wrap>.conteiner').css('height', 'auto');
            $('.slice3').css('height', 'auto');
        }

    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}