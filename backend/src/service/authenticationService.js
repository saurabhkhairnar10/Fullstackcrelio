const userAccessor = require('../accessor/userAccessor');

const isTokenValid = (email, token, tokenCB) => {
    userAccessor.getUserByEmail(email, function(err, userDetail) {
        if(err || userDetail === null || typeof userDetail === 'undefined') {
            tokenCB('Please login before accessing the API');
        } else {
            if(token === userDetail.token) {
                tokenCB(undefined, userDetail);
            } else {
                tokenCB('Please login before accessing the API');
            }
        }
    })
}

const resetPassword = (userDetail, oldPassword, newPassword, passwordCB) => {
    if(userDetail.password === oldPassword) {
        const filter = {
            email: userDetail.email
        };
        const update = {
            password: newPassword
        }
        userAccessor.updateUserDetail(filter, update, function(err, result) {
            if(err || result === null || typeof result === 'undefined') {
                passwordCB('Please try again letter.');
            } else {
                passwordCB(undefined, 'Password successfully updated');
            }
        });
    } else{
        passwordCB('Passwords are mismatched');
    }
}

const logout = (email, logoutCB) => {
    const filter = {
        email: email
    };
    const update = {
        token: ''
    }
    userAccessor.updateUserDetail(filter, update, function(err, result) {
        if(err || result === null || typeof result === 'undefined') {
            logoutCB('Please try again letter.');
        } else {
            logoutCB(undefined, 'Logout Successfully');
        }
    });
}

module.exports = {
    isTokenValid,
    resetPassword,
    logout
}