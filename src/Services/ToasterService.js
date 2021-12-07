import toastr from 'toastr';
import options from '../Config/ToasterOptions';
import $ from 'jquery';
export const toastrSuccess = (msg) => {
    toastr.success(msg, 'Success', options);
}
export const toastrInfo = (msg) => {
    toastr.info(msg, 'Info', options);
}
export const toastrWarning = (msg) => {
    toastr.warning(msg, 'Warning', options);
}
export const toastrError = (msg) => {
    toastr.error(msg, 'Error', options);
}
export const toastrConfirm = async (msg) => {
    let _toast;
    let promise = await new Promise(function (resolve) {
        _toast = toastr.warning('', `${msg}<br /><br />
            <button type='button' id='confirmationRevertYes' class='btn clear toast-close-button  mr-1'>Yes</button>
            <button type='button' id='confirmationRevertNo' class='btn clear toast-close-button mr-2'>No</button>`,
            {
                closeButton: false,
                allowHtml: true,
                tapToDismiss: false,
                positionClass: "toast-top-center",
                timeOut: 0,
                extendedTimeOut: 0,
                onShown: function () {
                    $("#confirmationRevertYes").click(() => resolve(true));
                    $("#confirmationRevertNo").click(() => resolve(false));
                }
            });
    });
    _toast.remove();
    return promise;
}