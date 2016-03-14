/*валидация формы*/
function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }

    var doc = $('html').attr('lang');
    var message={};

    switch(doc){
        case 'ru':
            message = {
                nameInput:"Укажите имя",
                mailInput:"Укажите E-mail",
                messageInput:"Сообщение не может быть пустым",
                inputPhoneNum:"Введите номер мобильного телефона",
                inputPhoneArea:"Введите текст",
                missed:"Вы пропустили2",
                validMail:"Невалидный e-mail",
                wrongPass:"Неверный пароль",
                insufficiently:"Недостаточно символов"
            }
            break;
        case 'en':
            message = {
                nameInput:"Enter your name",
                mailInput:"Enter E-MAIL",
                messageInput:"MESSAGE CAN NOT BE EMPTY",
                inputPhoneNum:"Enter your mobile phone number",
                inputPhoneArea:"Enter the text",
                missed:"You skipped it",
                validMail:"Valid email",
                wrongPass:"Incorrect password",
                insufficiently:"Not enough characters"
            }
            break;
    }

    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form_row').is('.error')){
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    $form[0].submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: message.missed
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: message.validMail
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:message.inputPhoneNum
                }
            });
        }

        $('[type="password"]',$form).each(function(){
            if($(this).is("#re_password") == true){
                $(this).rules("add", {
                    minlength:3,
                    equalTo:"#password",
                    messages:{
                        equalTo:message.wrongPass,
                        minlength:message.insufficiently
                    }
                });
            }
        })
    }
}

/*Отправка формы с вызовом попапа*/
function validationCall(form){

  var thisForm = $(form);
  var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim() == 'true') {
                thisForm.trigger("reset");
                popNext("#call_success", "call-popup");
            }
            else {
               thisForm.trigger('reset');
            }

        }
    });
}


function validationCallSuccMail(form){

    var thisForm = $(form);
    var formData = $(form).serialize();

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            $('.look-smile').css('z-index', '10');
            $('.bonus-email').css('visibility', 'hidden');
        }
    });

}

/* Отправка формы с файлом */
function validationCallDocument(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    formData.append('file', thisForm.find('input[type=file]')[0].files[0]);

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}

/* Отправка формы с файлaми */
function validationCallDocuments(form){

    var thisForm = $(form);
    var formData = new FormData($(form)[0]);

    $.each(thisForm.find('input[type="file"]')[0].files, function(index, file){
        formData.append('file-'+index, file);
    });

    $.ajax({
        url: thisForm.attr('action'),
        type: "POST",
        data: formData,
        contentType:false,
        processData:false,
        cache:false,
        success: function(response) {
            thisForm.trigger("reset");
            popNext("#call_success", "call-popup");
        }
    });

}


function popNext(popupId, popupWrap){

    $.fancybox.open(popupId,{
        padding:0,
        fitToView:false,
        wrapCSS:popupWrap,
        autoSize:true,
        afterClose: function(){
            $('form').trigger("reset");
            clearTimeout(timer);
        }
    });

    var timer = null;

    timer = setTimeout(function(){
        $('form').trigger("reset");
        $.fancybox.close(popupId);
    },2000);

}



/*маска на инпуте*/
function Maskedinput(){
    if($('.tel-mask')){
        $('.tel-mask').mask('+9 (999) 999-99-99 ');
    }
}

/*fansybox на форме*/
function fancyboxForm(){
  $('.fancybox-form').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoResize:true,
    wrapCSS:'fancybox-form',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  })
}


function ratingScript(){
    if( $('#rating').length>0 ){
        var el = document.querySelector('#rating');
        var rate = el.getAttribute("data-rate");
        var currentRating = 0;

        var maxRating= 5;

        var callback = function(rating) {
            $.ajax({
                url: ajaxphp,
                type: "POST",
                data: rating,
                contentType:false,
                processData:false,
                cache:false,
                success: function(response) {

                }
            });
        };

        var myRating = rating(el, currentRating, maxRating, callback);

        myRating.setRating(rate, false);
    }
}

$(document).ready(function(){
    ratingScript();
   validate('#call-popup .contact-form', {submitFunction:validationCall});

   validate('.disigner-1 .bonus-email', {submitFunction:validationCallSuccMail});
   validate('.disigner-2 .bonus-email', {submitFunction:validationCallSuccMail});

   validate('.login-form-main');

   validate('.registration-form-main');

   Maskedinput();
   fancyboxForm();
});