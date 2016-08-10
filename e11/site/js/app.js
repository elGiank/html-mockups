/**
 * Created by gvegas on 3/8/2016.
 */
'use strict';

var alertsConfigFields = {
    recipients: true,
    events: true,
    frequency: true
}

var configuredAlerts = {
    recipients: 'someone@somewhere.com, someoneelse@somewhereelse.com, noone@nowhere.com',
    includeAdversary: true,
    notificationEvents: [
        'Transfers',
        'Agendas'
    ]
}

jQuery(document).ready(function () {
    $('#btnAddAlert').click(function () {
        if($('#selectlistAlerts').is(':visible'))
            $('#selectlistAlerts').hide();
        else
            $('#selectlistAlerts').show();
    });

    $('.checkbox').click(function () {
        var controlIcon = $(this).find('i');
        if(controlIcon.hasClass('fa-square-o')) {
            controlIcon.removeClass();
            controlIcon.addClass('fa fa-check-square checkbox__icon');
        } else {
            controlIcon.removeClass();
            controlIcon.addClass('fa fa-square-o checkbox__icon');
        }
    });

    $('.radio-button').click(function () {
        var controlIcon = $(this).find('i');
        if(controlIcon.hasClass('fa-circle-o')) {
            $('.radio-button i').removeClass('fa-dot-circle-o').addClass('fa-circle-o');
            controlIcon.addClass('fa fa-dot-circle-o radio-button__icon');
        } else {
            controlIcon.removeClass();
            controlIcon.addClass('fa fa-circle-o radio-button__icon');
        }
    });

    $('#txtNotificationEventDisplay').click(function () {
        if($('#selectEventoOptions').is(':visible'))
            $('#selectEventoOptions').hide();
        else
            $('#selectEventoOptions').show();
    });

    $('.multiselect__list-item').click(function () {
        $(this).addClass("multiselect__list--selected");

        var newTag = $('<div class="tag-label"><span class="tag-label__text">' + $(this).html() + '</span><span class="tag-label__icon"><i class="fa fa-times-circle"></i></span></div>');
        newTag.on('click', function () {
            $(this).remove();
        });

        $('#txtNotificationEventDisplay').append(newTag);
        $('#selectEventoOptions').hide();
    });

    $('#btnAlertFrequency').click(function () {
        if($('#selectlistAlertFrequency').is(':visible'))
            $('#selectlistAlertFrequency').hide();
        else
            $('#selectlistAlertFrequency').show();
    });

    $('.alertFrequencyItem').click( function () {
        var text = $(this).html();
        $('#btnAlertFrequency .select-option__display-text').html(text);
        $('#selectlistAlertFrequency').hide();
    });

    $('#chkFrequencyRealtime').click(function () {
        if($('#itemsRealTime').is(':visible'))
            $('#itemsRealTime').hide();
        else
            $('#itemsRealTime').show();
    });

    $('#chkFrequencyDaily').click(function () {
        if($('#itemsDaily').is(':visible'))
            $('#itemsDaily').hide();
        else
            $('#itemsDaily').show();
    });

    $('#chkFrequencyWeekly').click(function () {
        if($('#alertFrequencyWeeklyOptions').is(':visible'))
            $('#alertFrequencyWeeklyOptions').hide();
        else
            $('#alertFrequencyWeeklyOptions').show();
    });
    
});