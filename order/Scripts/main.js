$(function () {
resizeAuthorize();
    $(document).on('click', 'label.tbc', function (event) {
    	$(this).prev().click();
event.stopPropagation();
event.preventDefault();
    });
$(document).on('click', '.wraper-radio label',function(){
if ($(this).prev().hasClass('ez-radio'))
$(this).prev().find('input').click();
else
$(this).prev().click();}
);
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://tbarchico.smartertakeout.net/order//Content/pencil-1.mp3');
    //  audioElement.setAttribute('autoplay','autoplay');
    $.get();
    audioElement.addEventListener("load", function () { audioElement.play(); }, true);

    if (($(window).width() < 980) && (!$('.isMobile input').hasClass('ez-hide'))) {
        $('.isMobile input').ezMark();
    }

    if ($(window).width() < 980) {
        $('.orderTaker').hide();
        $('.steps').width('100%');
    } else {
        $('.orderTaker').show();
        $('.steps').css('width', 'auto');
    }

    if ($(window).width() < 600 && $('#panelRight').is(':visible')) {
        $("#tbarTitleImage").hide();
    } else {
        $("#tbarTitleImage").show();
    }

    if ($(window).height() < 765 && $('#updatecontent').html() != undefined)
        $('#updatecontent').css('height', $(window).height() - 10).css('overflow-y', 'scroll');
    if ($(window).height() < 790 && $('#registration-content').html() != undefined)
        $('#registration-content').css('height', $(window).height() - 10).css('overflow-y', 'scroll');
    $('#menu').click(function () {
        $('body').removeClass('orderOpened');
        $('body').toggleClass('panelOpened');
    });
    $('#cart').click(function () {
        $('body').removeClass('panelOpened');
        $('body').toggleClass('orderOpened');
    });

    if ($('div.mobile').is(":visible") && $('div span:contains("STEP 3")').length > 0) {
        if (!$('body').hasClass('panelOpened')) {
            $('body').addClass('panelOpened');
            $('body').removeClass('orderOpened');
        }
    }

    $('.top-content .read-more').click (function(){
        $('.top-content .hidden-block').toggle("slow" );
    });

    $( "#clickme" ).click(function() {
        $( "#book" ).toggle( "slow", function() {
            // Animation complete.
        });
    });
    $('.menu-left-icon').click(function(){
        $('.mobile-menu').fadeIn(400);
    });
    $('.icon-close').click(function(){
        $('.mobile-menu').fadeOut(400);
    });

    $(window).resize(function () {
        function isBreakPoint(currentPoint) {
            var currentPointAr = [0, 640, 980, 10000];
            var widthWindow = $(window).width();
            var min, max;
            for (var i = 0, countAr = currentPointAr.length; i < countAr; i++) {
                if (currentPointAr[i] === currentPoint) {
                    min = currentPointAr[i - 1] || 0;
                    max = currentPointAr[i];
                    break;
                }
            }
            return widthWindow > min && widthWindow <= max;
        }
 	
      if ($(window).width() < 600 && $('#panelRight').is(':visible')) {
            $("#tbarTitleImage").hide();
        } else {
            $("#tbarTitleImage").show();
        }

        if ((isBreakPoint(640)) && (!$('.isMobile input').hasClass('ez-hide'))) {
            $('.isMobile input').ezMark();
        }
if ($(window).width() < 640 && (!$('.variants-block input').hasClass('ez-hide'))){
             $('.variants-block input').ezMark();
       }
else{
if ($(window).width() >= 980 && ($('.variants-block input').hasClass('ez-hide'))){
             var inputsez = $('.variants-block input');
	     inputsez.each(function()
{
$(this).attr('class','tbc');
var cl = $(this).clone();
var parent = $(this).parents('.wraper-radio');
parent.find('div').remove();

parent.prepend( cl);
});
       }
}
        if ($(window).height() < 765)
            $('#updatecontent').css('height', $(window).height() - 10).css('overflow-y', 'scroll');
        else {

            $('#updatecontent').css('height', 'auto').css('overflow-y', 'auto');
        }
        if ($(window).height() < 790)
            $('#registration-content').css('height', $(window).height() - 10).css('overflow-y', 'scroll');
        else {

            $('#registration-content').css('height', 'auto').css('overflow-y', 'auto');
        }

        if ($(window).width() < 980) {
            $('.orderTaker').hide();
            $('.steps').width('100%');
        } else {
            $('.orderTaker').show();
            $('.steps').css('width', 'auto');
        }



        if (isBreakPoint(10000)) {
            if ($('body').hasClass('panelOpened'))
                $('body').removeClass('panelOpened');
            if ($('body').hasClass('orderOpened'))
                $('body').removeClass('orderOpened');
        }

resizeAuthorize();
    });

    var date = new Date();
    $('.datepicker-wrapper').datepicker({
        format: "mm/dd/yyyy",
        startDate: date,
        autoclose: true
    });
    try {
        $('#timepicker1').timepicker({
            minuteStep: 5,
            defaultTime: '11:45 AM',
            showInputs: false,
            disableFocus: true,
        });
        $('input').placeholder();
    }
    catch (ex) { }



    $(".stepCustomer .update-top, .mobileRegistration").click(function (event) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });

});


function openDropdown(elem) {
    function down() {
        var pos = $(this).offset(); // remember position
        var len = $(this).find("option").length;
        if (len > 20) {
            len = 20;
        }

        $(this).css("position", "absolute");
        $(this).css("zIndex", 9999);
        $(this).offset(pos);   // reset position
        $(this).attr("size", len); // open dropdown
        $(this).unbind("focus", down);
        $(this).focus();
    }
    function up() {
        $(this).css("position", "static");
        $(this).attr("size", "1");  // close dropdown
        $(this).unbind("change", up);
        $(this).focus();
    }

    $(elem).focus(down).blur(up).focus();
}

function customSelect() {
    // Iterate over each select element
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this);
        var numberOfOptions = $(this).children('option').length;

        if ($this.hasClass('s-hidden')) {
            return;
        }

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');
        $('.select').find('.select').remove();

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        var selected = false;
        for (var i = 0; i < numberOfOptions; i++) {
            if ($this.children('option').eq(i).attr('selected') === 'selected') {
                $styledSelect.text($this.children('option').eq(i).text());
                selected = true;
                break;
            }
        }
        if (!selected) {
            // Show the first select option in the styled div
            $styledSelect.text($this.children('option').eq(0).text());
        }

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
                title: $this.children('option').eq(i).text(),
                selected: $this.children('option').eq(i).attr('selected')
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            if ((navigator.userAgent.match(/iPhone/i))) {

                e.stopPropagation();
                $this.toggleClass('s-hidden');
                $this.focus();
                $this.change(function () {
                    var val = $this.find("option:selected").val();

                    var $optionli = $this.parent().find('.options').find('li[rel="' + val + '"]');

                    $optionli.click();
                });
                $this.toggleClass('s-hidden');
            }
            else {

                e.stopPropagation();
                $('div.styledSelect.active').each(function () {
                    $(this).removeClass('active').next('ul.options').hide();
                });
                $(this).toggleClass('active').next('ul.options').toggle();
                /* $this.toggleClass('s-hidden');
               
                $this.attr("size", 5);*/
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
}

customSelect();

var ClearAllChildFieldsAndErrors = function (parentid) {
    var parentObj = $('#' + parentid);
    parentObj.find('input[type=text],input[type=password]').val('');
    parentObj.find('.field-validation-error').text('');
    parentObj.find('.input-validation-error').removeClass('input-validation-error').addClass('valid');
};
var ClearErrors = function (parentid) {
    var parentObj = $('#' + parentid);

    parentObj.find('.field-validation-error').text('');
    parentObj.find('.input-validation-error').removeClass('input-validation-error').addClass('valid');
};

function UpdateSelects() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');
        $('.select').find('.select').remove();

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            if ((navigator.userAgent.match(/iPhone/i))) {

                e.stopPropagation();
                $this.toggleClass('s-hidden');
                $this.focus();
                $this.change(function () {
                    var val = $this.find("option:selected").val();

                    var $optionli = $this.parent().find('.options').find('li[rel="' + val + '"]');

                    $optionli.click();
                });
                $this.toggleClass('s-hidden');
            }
            else {

                e.stopPropagation();
                $('div.styledSelect.active').each(function () {
                    $(this).removeClass('active').next('ul.options').hide();
                });
                $(this).toggleClass('active').next('ul.options').toggle();
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}

function UpdateSelectsById(id) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    $('#' + id).each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');
        $('.select').find('.select').remove();

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            if ((navigator.userAgent.match(/iPhone/i))) {

                e.stopPropagation();
                $this.toggleClass('s-hidden');
                $this.focus();
                $this.change(function () {
                    var val = $this.find("option:selected").val();

                    var $optionli = $this.parent().find('.options').find('li[rel="' + val + '"]');

                    $optionli.click();
                });
                $this.toggleClass('s-hidden');
            }
            else {

                e.stopPropagation();
                $('div.styledSelect.active').each(function () {
                    $(this).removeClass('active').next('ul.options').hide();
                });
                $(this).toggleClass('active').next('ul.options').toggle();
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}


function InitializeMenu() {
    $(document).on('click', '.menu-category', function () {
        $(this).parent().find('.subMenu').eq(0).toggle();
    });
}


function UpdateCurentElements(elemId) {
    $('.stepMenu').find('.current').removeClass('current');
    // $('.stepMenu').find('.subMenu').css('display', 'none');
    //$('#' + elemId).parents('li').eq(1).find('.menu-category').addClass('current');
    //$('#' + elemId).parents('li').find('.subMenu').css('display', 'block');
    $('#' + elemId).addClass('current');
    ;
}

function checkQuantity(elem) {
    var checkBoxId = $(elem).attr('id');
    var quantityId = checkBoxId.replace("checkbox", "quantity");
    var quantityValue = $("#" + quantityId).val();

    var maxQuantity = $(elem).parents(".modifier-list").prevAll('.maxCount').val();
    var currentValue = $(elem).parents(".modifier-list").prevAll('.currentCount').val();
    var groupTitle = $(elem).parents(".modifier-list").prevAll('.titleToAdd').text();
    var guestNote = $(elem).parents(".modifier-list").prevAll('.guestNote').val();
    if (maxQuantity == "Infinity") return;
    var remainValue;
    var intCurrentValue;
    if ($(elem).attr('checked') == "checked") {
        remainValue = parseInt(maxQuantity) - parseInt(quantityValue);
        if (remainValue < 0) {

            //alert("Warning, too many modifiers");
            var errorTitle = 'Error: ' + groupTitle;
            if (guestNote == '') {
                guestNote = 'Too many modifiers';
            }
            $(elem).parents(".modifier-list").prevAll('.titleToAdd').append("<div class='modifierWarning' title='" + errorTitle + "'>" + guestNote + "</div>");


            $(".modifierWarning").dialog({
                bgiframe: true,
                resizable: false,
                modal: true,
                position: ["center", "center"],
                dialogClass: 'error-box',
                autoOpen: false,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close").remove();
                    }
                },
                close: function (ev, ui) {
                    $(this).remove();
                }


            });

            $('#' + checkBoxId).attr('checked', false);
            $('.modifierWarning').dialog('open');

            return;
        }
        intCurrentValue = parseInt(currentValue) + parseInt(quantityValue);
    }
    else {
        remainValue = parseInt(maxQuantity) + parseInt(quantityValue);
        intCurrentValue = parseInt(currentValue) - parseInt(quantityValue);
    }
    $(elem).parents(".modifier-list").prevAll('.maxCount').attr('value', remainValue);
    $(elem).parents(".modifier-list").prevAll('.currentCount').val(intCurrentValue);
}


function SubmitHidden(elem) {
    var checkBoxId = $(elem).attr('id');
    var hiddenId = checkBoxId.replace("checkbox", "hiddencheckbox");
    if ($(elem).attr('checked') == "checked") {
        $('#' + hiddenId).val('true');
    } else {
        $('#' + hiddenId).val('false');
    }
}
function SubmitHiddenRadio(elem) {
    var checkBoxId = $(elem).attr('id');
    var hiddenId = checkBoxId.replace("checkbox", "hiddencheckbox");
    var nameGroup = $(elem).attr('name');
    var radios = $("input[name='" + nameGroup + "']");
    radios.each(function () {
        /*$(this).next().val(false);*/
        $(this).nextAll("input[name*='IsChecked']").val(false);
    });
    ;
    if ($(elem).attr('checked') == "checked") {
        $('#' + hiddenId).val('true');
    } else {
        $('#' + hiddenId).val('false');
    }
}
function SubmitHiddenRadioMobile(elem) {
    var checkBoxId = $(elem).attr('id');
    var hiddenId = checkBoxId.replace("checkbox", "hiddencheckbox");
    var nameGroup = $(elem).attr('name');
    var radios = $("input[name='" + nameGroup + "']");
    radios.each(function () {
        $(this).parent().nextAll("input[name*='IsChecked']").val(false);
    });
    if ($(elem).hasClass('ez-hide') && $(elem).parent().hasClass('ez-radio')) {
        if ($(elem).parent().hasClass('ez-selected'))
            $('#' + hiddenId).val('true');
        else {
            $('#' + hiddenId).val('false');
        }
    }
    else {
        if ($(elem).attr('checked') == "checked") {
            $('#' + hiddenId).val('true');
        } else {
            $('#' + hiddenId).val('false');
        }
    }
}

function ValidateSelections() {
	$('#submitButton').attr('disabled', 'disabled');
    var isNotMobile = ($('.notMobile').css('display') == 'block');
    var selections = null;
    if (isNotMobile) {
        selections = $('.notMobile .isRequired');
    } else {
        selections = $('.isMobile .isRequired');
    }
    var isExist = true;
    var message = "";
    selections.each(function () {
        if ($(this).val() == "True") {
            var modifiers = $(this).nextAll('.modifier-list').find('li').find('input[type=checkbox], input[type=radio]');
            var islocalexist = false;
            modifiers.each(function () {
                if ($(this).attr('checked') == "checked")
                    islocalexist = true;
            });
            if (islocalexist == false) {
                isExist = false;
                message += $(this).nextAll('.requiredNote').val();
            }
        }
    });
    if (isExist == false) {
        if (isNotMobile) {
            $("#notMobileId").append("<div class='modifierWarning' title='Error'>" + message + "</div>");
        } else {
            $("#isMobileId").append("<div class='modifierWarning' title='Error'>" + message + "</div>");
        }
        $(".modifierWarning").dialog({
            bgiframe: true,
            resizable: false,
            modal: true,
            position: ["center", "center"],
            dialogClass: 'error-box',
            autoOpen: false,
            buttons: {
                Ok: function () {
                    $(this).dialog("close").remove();
                }
            },
            close: function (ev, ui) {
                $(this).remove();
            }
        });
        $('.modifierWarning').dialog('open');
    }
    var isGood = true;
    if (isNotMobile && $('#side-item').html() != undefined) {
        isGood = $('#side-item').val() > 0;
    }
    if (!isNotMobile && $('#side-itemmobile').html() != undefined) {
        isGood = $('#side-itemmobile').val() > 0;
    }
    if (!isGood) {
        isExist = false;
        if (isNotMobile) {
            $("#notMobileId").append("<div class='modifierWarning' title='Error'>" + "Please, choose side items" + "</div>");
        } else {
            $("#isMobileId").append("<div class='modifierWarning' title='Error'>" + "Please, choose side items" + "</div>");
        }
        $(".modifierWarning").dialog({
            bgiframe: true,
            resizable: false,
            modal: true,
            position: ["center", "center"],
            dialogClass: 'error-box',
            autoOpen: false,
            buttons: {
                Ok: function () {
                    $(this).dialog("close").remove();
                }
            },
            close: function (ev, ui) {
                $(this).remove();
            }
        });
        $('.modifierWarning').dialog('open');
    }
    return isExist;
}

function ShowCentralPart() {
    if ($('body').hasClass('orderOpened'))
        $('body').removeClass('orderOpened');
    //$('#panelLeft, #panelRight').removeAttr('style');
    if ($('body').hasClass('panelOpened'))
        $('body').removeClass('panelOpened');

    //var cssLeftH = $('#panel').height();
    //$('#panelLeft').css('height', +cssLeftH + 'px');
    if ($(window).width() <= 640 && (!$('.isMobile input').hasClass('ez-hide'))) {
        $('.isMobile input').ezMark();
    }
}


var OnPaymentSuccess = function (result) {

    if ($('#isErrorPaymentPos').val() == 'True') {
        var message = $('#errorNotification').val();
        $("#errorPaymentMessage").append("<div class='posWarning' title='Error'>" + message + "</div>");
        $(".posWarning").dialog({
            bgiframe: true,
            resizable: false,
            modal: true,
            position: ["center", "center"],
            dialogClass: 'error-box',
            autoOpen: false,
            buttons: {
                Ok: function () {
                    $('#errorNotification').val('');
                    $(this).dialog("close").remove();
                }
            },
            close: function (ev, ui) {
                $('#errorNotification').val('');
                $(this).remove();
            }
        }
        );
        $('.posWarning').dialog('open');
    }
}

function openLeftPanel() {
    $('body').removeClass('orderOpened');
    //$('#panelLeft, #panelRight').removeAttr('style');
    $('body').toggleClass('panelOpened');
}

$.fn.textWidth = function () {
    var newelem = $('<span>');
    newelem.text($(this).text());
    newelem.css({
        'font-size': $(this).css('font-size'),
        'font-weight': $(this).css('font-weight'),
        'font-family': $(this).css('font-family'),
        'font-style': $(this).css('font-style')
    });
    newelem.hide();
    $('body').append(newelem);
    var w = newelem.width();
    newelem.remove();
    return w;
};

function ScrollTo(elementID) {
    $('html, body').animate({
        scrollTop: $("#" + elementID).offset().top
    }, 100);
}
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
function touchScroll(className) {
    if (isTouchDevice()) {
        var el = document.getElementsByClassName(className);
        var scrollStartPos = 0;
        var dropDownNumber = el.length;

        for (var i = 0; i < dropDownNumber; i++) {
            el[i].addEventListener("touchstart", function (event) {
                scrollStartPos = this.scrollTop + event.touches[0].pageY;
                event.preventDefault();
            }, false);
            el[i].addEventListener("touchmove", function (event) {
                this.scrollTop = scrollStartPos - event.touches[0].pageY;
                event.preventDefault();
            }, false);
        }
    }
}
touchScroll('options');

function isBreakPointAuth(currentPoint) {
            var currentPointAr = [240, 445, 490, 10000];
            var widthWindow = $(window).width();
            var min, max;
            for (var i = 0, countAr = currentPointAr.length; i < countAr; i++) {
                if (currentPointAr[i] === currentPoint) {
                    min = currentPointAr[i - 1] || 0;
                    max = currentPointAr[i];
                    break;
                }
            }
            return widthWindow > min && widthWindow <= max;
        }
function resizeAuthorize(){
if ($('#store')!=undefined){
var scaleNum= 1;
var axex = '0';
var heightstore = 600;
if (isBreakPointAuth(445))
{scaleNum=0.68;
axex = '0';
magrinleft='-147px';
heightstore = 450;
}
else{
if (isBreakPointAuth(490)){

scaleNum=0.9;
axex = '0';
magrinleft='-195px';
heightstore = 500;
}
else{
scaleNum=1;
axex = '0';
magrinleft='-217px';
}
}
$('#store').css('height',(parseInt(heightstore)+ parseInt($('#store').contents().find('#storedCards').height()))+ 'px' );
$('#store').contents().find('#iframeAuthorizeNet').attr('style','width: 435px;position:absolute; left:50%; margin-left:'+magrinleft+'; height: 479px;-ms-transform: scale('+scaleNum +');    -moz-transform: scale('+scaleNum +');    -o-transform: scale('+scaleNum +');    -webkit-transform: scale('+scaleNum +');    transform: scale('+scaleNum +');    -ms-transform-origin: '+axex +' 0;    -moz-transform-origin: '+axex +' 0;     -o-transform-origin: '+axex +' 0;     -webkit-transform-origin: '+axex +' 0;    transform-origin: '+axex +' 0;')

}
}


function showpopupAmount(message) {
    
       
        var popupdiv = $('#deliveryAmountPopup');
        popupdiv.text(message);
        popupdiv.dialog({
            bgiframe: true,
            resizable: false,
            modal: true,
            position: ['center', 'center'],
            dialogClass: 'error-box',
            autoOpen: false,
            buttons: {
                Ok: function () {
                    $(this).dialog('close').remove();
                }
            },
            close: function (ev, ui) {
                $(this).remove();
            }
        });
        $('.complete-order').attr('disabled', false)
        popupdiv.dialog('open');

   
}