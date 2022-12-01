'use strict';
$(window).on('load', function () {

    // notify();



});



function notify() {
   toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "preventDuplicates": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "400",
  "hideDuration": "1000",
  "timeOut": "7000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
};

if(success_notification == true){
	success_notification('message');
}

function warning_notification(message) {
	toastr.warning(message);
}

function success_notification(message) {
    toastr.success(message);
}

function info_notification(message) {
    toastr.info(message);;
}


function error_notification(message) {
    toastr.error(message);;
}
function danger_notification(message) {
    toastr.error(message);;
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
}




