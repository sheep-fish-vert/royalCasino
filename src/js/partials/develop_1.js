try{

    function footerAdaptation(){

        function listWrapHeight(){

            $('.footer-top').removeAttr('style');

            if($(window).width()<=768 && $(window).width()>640){

                var arr = [];

                $('.footer-list-wrap').each(function(){

                    arr.push($(this).outerHeight());

                });

                var maxHeight = Math.max.apply(Math, arr);

                $('.footer-top').css({'height':maxHeight+'px'});
            }
            else if($(window).width()<=640){
                $('.footer-top').height($('.footer-top').height()/1.5);
            }

        }

        listWrapHeight();

        $(window).load(function(){

            listWrapHeight();

        });

        $(window).resize(function(){

            listWrapHeight();

        });

    }

    $(document).ready(function(){

        footerAdaptation();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}