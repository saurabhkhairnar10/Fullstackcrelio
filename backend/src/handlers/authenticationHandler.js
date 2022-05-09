const authenticationService = require('../service/authenticationService');

const resetPassword = (req, res) => {
    const user = req.userData;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    authenticationService.resetPassword(user, oldPassword, newPassword, function(err, passRes) {
        if(err) {
            const response = {
                result: false,
                message: err
            }
            res.status(201).send(response);
        } else {
            const response = {
                result: true,
                message: passRes
            }
            res.status(200).send(response);
        }
    });
}

const logout = (req, res) => {
    const email = req.userData.email;
    authenticationService.logout(email, function(err, logoutRes) {
        if(err) {
            const response = {
                result: true,
                message: err
            }
            res.status(201).send(response);
        } else {
            const response = {
                result: true,
                message: logoutRes
            }
            res.status(200).send(response);
        }
    });
}

module.exports = {
    resetPassword,
    logout
};