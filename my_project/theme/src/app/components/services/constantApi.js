(function() {
    'use strict';
    angular
        .module('minotaur').service('constApi', function($state, $cookies, BaseUrl, $http, ResponseCheck, REQUEST_METHOD, REQUEST_KEY) {
            var headers_data = {};
            headers_data[REQUEST_KEY.COOKIE_HEADERS] = $cookies.get(REQUEST_KEY.SESSION_HEADERS);
            this.getRequest = function(params, url) {
                url = BaseUrl.RetBaseUrl() + url;
                var promise = $http({
                    method: REQUEST_METHOD.GET,
                    params: params,
                    url: url,
                    headers: headers_data,
                    withCredentials: REQUEST_KEY.WITH_CREDENTIAL_TRUE
                }).then(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response.data, 'status': response.status };
                }).catch(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response, 'status': 'error' };
                });
                return promise;
            }
            this.postRequest = function(data, url) {
                url = BaseUrl.RetBaseUrl() + url;
                var promise = $http({
                    method: REQUEST_METHOD.POST,
                    data: data,
                    url: url,
                    headers: headers_data,
                    withCredentials: REQUEST_KEY.WITH_CREDENTIAL_TRUE
                }).then(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response.data, 'status': response.status };
                }).catch(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response, 'status': 'error' };
                });
                return promise;
            };
            this.deleteRequest = function(id, url) {
                url = BaseUrl.RetBaseUrl() + url;
                var promise = $http({
                    method: REQUEST_METHOD.DELETE,
                    url: url,
                    data: id,
                    headers: headers_data,
                    withCredentials: REQUEST_KEY.WITH_CREDENTIAL_TRUE
                }).then(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response.data, 'status': response.status };
                }).catch(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response, 'status': 'error' };
                });
                return promise;
            };
            this.putRequest = function(data, url) {
                url = BaseUrl.RetBaseUrl() + url;
                var promise = $http({
                    method: REQUEST_METHOD.PUT,
                    data: data,
                    url: url,
                    headers: headers_data,
                    withCredentials: REQUEST_KEY.WITH_CREDENTIAL_TRUE
                }).then(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response.data, 'status': response.status };
                }).catch(function(response) {
                    ResponseCheck.ResponseStatus(response);
                    return { 'data': response, 'status': 'error' };
                });
                return promise;
            };
            // };
        });
})();