/**
 * Created by gvegas on 3/8/2016.
 */
'use strict';

var existingAlerts = {
    allDockets: {
        selected: true,
        showEvents: false,
        eventStarText: '',
        eventEndText: '',
        eventItems: []
    },
    docketCategory: {
        selected: false,
        showEvents: true,
        eventStarText: 'Notify me when dockets for',
        eventEndText: 'are filed',
        eventItems: [
            'Transfers',
            'Notices of Hearing',
            'Agendas',
            'Fee Applications',
            'Dockets filed Under Seal',
            'Any dockets related to Employee Motions or Orders',
            'Notice of Satisfaction',
            'Notice of Settlement',
        ]
    },
    debtor: {
        selected: false,
        showEvents: true,
        eventStarText: 'Notify me when dockets under the',
        eventEndText: 'case are filed',
        eventItems: [
            'Transfers',
            'Notices of Hearing',
            'Agendas',
            'Fee Applications',
            'Dockets filed Under Seal',
            'Any dockets related to Employee Motions or Orders',
            'Notice of Satisfaction',
            'Notice of Settlement',
        ]
    },
    adversaryProceeding: {
        selected: false,
        showEvents: true,
        eventStarText: 'Notify me when dockets under the',
        eventEndText: 'case are filed',
        eventItems: [
            'Transfers',
            'Notices of Hearing',
            'Agendas',
            'Fee Applications',
            'Dockets filed Under Seal',
            'Any dockets related to Employee Motions or Orders',
            'Notice of Satisfaction',
            'Notice of Settlement',
        ]
    },
    relatedDockets: {
        selected: false,
        showEvents: true,
        eventStarText: 'Notify me when dockets are filed related to dockets number',
        eventEndText: '',
        eventItems: [
            'Transfers',
            'Notices of Hearing',
            'Agendas',
            'Fee Applications',
            'Dockets filed Under Seal',
            'Any dockets related to Employee Motions or Orders',
            'Notice of Satisfaction',
            'Notice of Settlement',
        ]
    },
    keywords: {
        selected: false,
        showEvents: true,
        eventStarText: 'Notify me when dockets contain',
        eventEndText: '',
        eventItems: [
            'Transfers keywords',
            'Notices of Hearing keywords',
            'Agendas keywords',
            'Fee Applications keywords',
            'Dockets filed Under Seal',
            'Any dockets related to Employee Motions or Orders',
            'Notice of Satisfaction',
            'Notice of Settlement',
        ]
    },
}

function onAlertChange (newValue) {
    if (newValue.showEvents === false) {
        $('.alert-config-notification-event').hide();
        $('.alert-config__section-title--notification').hide();
        $('#selectEventoOptions').html('');
    }
    else {
        $('.alert-config-notification-event').show();
        $('.alert-config__section-title--notification').show();
        $('#selectEventoOptions').html('');
        newValue.eventItems.forEach(function (item) {
            var newEventItem = $('<li class="multiselect__list-item">' + item + '</li>');

            newEventItem.click(function () {
                $(this).addClass("multiselect__list--selected");

                var newTag = $('<div class="tag-label"><span class="tag-label__text">' + $(this).html() + '</span><span class="tag-label__icon"><i class="fa fa-times-circle"></i></span></div>');
                newTag.on('click', function () {
                    $(this).remove();
                });
                $('#txtNotificationEventDisplay').append(newTag);
                $('#selectEventoOptions').hide();
            });

            $('#selectEventoOptions').append(newEventItem);
        });
    }

    $('.alert-config-notification-event__text-start').text(newValue.eventStarText);
    $('.alert-config-notification-event__text-end').text(newValue.eventEndText);

}

jQuery(document).ready(function () {
    $('#btnAddAlert').click(function () {
        if($('#selectlistAlerts').is(':visible'))
            $('#selectlistAlerts').hide();
        else
            $('#selectlistAlerts').show();
    });

    $('.alertTypeItem').click(function () {
        var objName = this.id;
        onAlertChange(existingAlerts[objName]);
        $('#selectlistAlerts').hide();
        $('.alert-config__title').text($(this).find('div.select-option__item-text').html());

    })
    
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

    // $('.multiselect__list-item').click(function () {
    //     $(this).addClass("multiselect__list--selected");
    //
    //     var newTag = $('<div class="tag-label"><span class="tag-label__text">' + $(this).html() + '</span><span
    // class="tag-label__icon"><i class="fa fa-times-circle"></i></span></div>'); newTag.on('click', function () {
    // $(this).remove(); });  $('#txtNotificationEventDisplay').append(newTag); $('#selectEventoOptions').hide(); });

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




