(function() {
    'use strict';
    angular
        .module('minotaur')
        .constant('code', {
            SUCCESS: 200,
            DATA_INSUFFICIENT: 400,
            NOT_AUTHORIZED: 401,
            NOT_PERMITTED: 403,
            CUSTOM: 202,
            CONTACT_DEV: 405,
            TIME_LIMIT_EXCEED: 408,
            NOT_FOUND: 404,
            FILE_NOT_SUPPORTED: 415,
            TRYING_LIMIT_EXCEED: 429,
            ERROR: 500,
            NO_RESPONSE: 502,
            NOT_AVAILABLE: 503,
            NOT_LOGIN: 511,
            ALREADY_EXIST: 409,
            DATA_ERROR: 207,
        })
        .constant('message', {
            SUCCESS: "Success",
            DATA_INSUFFICIENT: "Kindly Check The Data You Entered",
            NOT_AUTHORIZED: "You Are Unauthenticated",
            NOT_PERMITTED: "You Don't Have Permission to access this",
            CONTACT_DEV: "Kindly Contact the Developers",
            TIME_LIMIT_EXCEED: "Time Limit Exceeded...",
            NOT_FOUND: "URL Not Found...",
            FILE_NOT_SUPPORTED: "This File Is Not Supported...",
            TRYING_LIMIT_EXCEED: "You Made Too Many Attempts Kindly Wait For Some Time...",
            ERROR: "error",
            REQUEST_ERROR: "Your Request Could Not Be Processed At The Moment.",
            NO_RESPONSE: "No Response",
            NOT_AVAILABLE: "This Service Is Currently Unavailable...",
            NOT_LOGIN: "Kindly Login To Your Captive Portal To Access This...",
            ALREADY_EXIST: "Entry Already Found",
            DATA_ERROR: "Data Requested Could Not Be Found",
            CONFLICT: "Conflict",
            WARNING: "Warning",
            EXPIRED: "Session expired",
        })
})();