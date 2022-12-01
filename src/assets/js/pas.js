$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


$(document).ready(function () {

    $('#new-service-form').on('submit', function (ev) {
        ev.preventDefault();
        let action = $("#form_action").val();
        if (action == 'save') {
            save_new_service()
        }

        if (action == 'update') {
            update_service()
        }
    });

    $('#new-service-group-form').on('submit', function (ev) {
        ev.preventDefault();
        let action = $("#form_action").val();
        if (action == 'save') {
            save_new_service_group()
        }

        if (action == 'update') {
            update_service_group()
        }
    });








});


function approve_reject_claim(id, action,operation){
  
    var comment = '';
    var con = false;
    var status = null;
    if(action == 1){
        con = confirm('Are you sure you want to approve selected Claim ?')
        if(!con){
            enable_('btn-app-'+id, 'Mark Claim Good');
            return danger_notification('Action to approve claim has been Canceled');
        }

        status = 1;
        disabled_('btn-app-'+id, 'Approving...');
        enable_('btn-rej-'+id, 'Reject Claim');
    }

    if(action == 2){
        con = confirm('Are you sure you want to reject selected Claim ?')
        if(!con){
            enable_('btn-rej-'+id, 'Reject Claim');
            return danger_notification('Action to reject claim has been Canceled');
        }
        status = 2;
        comment = prompt('Please provide reason for rejecting this clam: ');
        if(comment == ''){
            return danger_notification('Please provide reason before you continue');
        }
        disabled_('btn-rej-'+id, 'Rejecting...');
        enable_('btn-app-'+id, 'Mark Claim Good');
    }


    let data = {
        obj:{
        id:id,
        comment: comment,
        status : status,
        action: operation

    }}
    $.ajax({
        url: '/review-confirm-approve-claim',
        type: "POST",
        data: data,
        success: function (response) {
            console.log(response)
            //$('#content-area').html(response.data)
            response_notification(response);
            if(response.status == 200){
                if(action == 1){
                    disabled_('btn-app-'+id, 'Approved')
                }

                if(action == 2){
                    disabled_('btn-rej-'+id, 'Rejected')
                }

                $('#btn-header-link-'+id).addClass('collapsed-ccomplete')
                $('#btn-header-link-'+id).click()

            }
        },
        error: function (response) {
            console.log(response)
            danger_notification(response);
             enable_('btn-app-'+id,'Mark Claim Good');
             enable_('btn-rej-'+id,'Reject Claim');
        }
    });
}

function generate_pacode() {
    if ($('#service_id').val() != '' && $('#r_provider').val() != null) {
        disabled_('#generate-pacode-button', 'Generating, please wait....');
        let data = {
            r_provider: $('#r_provider').val(),
            s_provider: $('#s_provider').val(),
            service_id: $('#service_id').val(),
            enrollee_id: $('#enrollee_id').val(),
            description: $('#description').val(),
        };
        alert($('#r_provider').val())
        $.ajax({
            url: '/generate-pacode',
            type: "POST",
            data: data,
            success: function (response) {
                $('#content-area').html(response.data)
                response_notification(response);
            },
            error: function (response) {
                console.log(response)
                danger_notification('Erro loading records');
            }
        });
    } else {
        danger_notification('Please Select Service & Receiving provider');
    }
}

var active_search = false;

function filter_by_input(search) {

    search = search.toUpperCase();
    console.log(search)
    if (search != '') {
        $(".filter_container:not(:contains('" + search + "'))").hide("slow");
        $(".filter_container:contains('" + search + "')").show("slow");

        active_search = true;
    } else {
        $(".filter_container").show("slow");
        active_search = false;
    }
}

function response_notification(obj) {
    if (obj.status == 200) {
        success_notification(obj.message)
    }

    if (obj.status == 404) {
        danger_notification(obj.message)
    }

    if (obj.status == 401) {
        danger_notification(obj.message)
    }

    if (obj.status == 405) {
        danger_notification("Method Not Allowed")
    }

    
}

function disabled_(el, message) {
    $("#" + el).attr("disabled", true);
    $("#" + el).html(message);
}

function enable_(el, message) {
    $("#" + el).attr("disabled", false);
    $("#" + el).html(message);
}


