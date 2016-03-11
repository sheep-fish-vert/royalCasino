try{

    //footer adaptation

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

    };

    // /footer adaptation

    // circle draw

    function circleDraw(){

        $('.statistic-content-svg').each(function() {

            var svg = $(this).find('svg');

            var maxValue = 5;

            var greenValue = svg.data('green');
            var blueValue = svg.data('blue');

            var greenFerence = 2 * svg.find('.green-value').attr('r') * Math.PI;
            var blueFerence = 2 * svg.find('.blue-value').attr('r') * Math.PI;

            var greenLength = (greenValue * greenFerence)/maxValue;
            var blueLength = (blueValue * blueFerence)/maxValue;

            svg.find('.green-value').css({'stroke-dasharray':greenLength+' '+greenFerence});
            svg.find('.blue-value').css({'stroke-dasharray':blueLength+' '+blueFerence});

        });

    };

    // /circle draw

    $(document).ready(function(){

        footerAdaptation();
        circleDraw();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}