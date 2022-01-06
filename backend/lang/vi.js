module.exports.serverError = {
    unknow_error: "Đã có lỗi bất ngờ xảy ra! Hãy thử F5 để tải lại trang. Nếu lỗi này còn tiếp tục xin vui lòng liên hệ bộ phận hỗ trợ."
}

module.exports.clientError = {
    bad_request: "Yêu cầu không hợp lệ!",
    permissionDenied: "Quyền truy cập bị từ chối!"
}

module.exports.authMess = {
    tokenInvalid: "Token không hợp lệ!"
}

module.exports.appRoleMess = {
    alreadyEnable: (path) => `AppRole với path = /${path} được enable rồi!`,
    enableSuccess: (path) => `AppRole đã được enable thành công. Path = /${path}`,
    pathInvalid: "Path chỉ chấp nhận chữ hoa, chữ thường, số, - . VD: back-end."
}