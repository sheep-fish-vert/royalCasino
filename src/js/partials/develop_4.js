try{
    function socialHeaderClick(){
        if( $(window).width()>768 && $(window).width()<1024 ){
            console.log('go');
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