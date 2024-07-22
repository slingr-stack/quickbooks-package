/****************************************************
 Dependencies
 ****************************************************/

let httpReference = dependencies.http;

let httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};

let httpService = {};

/**
 *
 * Handles a request with retry from the platform side.
 */
function handleRequestWithRetry(requestFn, options, callbackData, callbacks, retry) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        if (!retry && error.additionalInfo && error.additionalInfo.status === 401) {
            sys.logs.info("[quickbooks] Refreshing token for request " + options.path);
            refreshQuickBooksToken();
        } else {
            throw error;
        }
    }
    if (!retry) {
        return handleRequestWithRetry(requestFn, Quickbooks(options), callbackData, callbacks, true);
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (let key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Sends an HTTP GET request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the GET request to.
 * @param {object} httpOptions  - The options to be included in the GET request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the GET request. [optional]
 * @return {object}             - The response of the GET request.
 */
exports.get = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.get(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP POST request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the POST request to.
 * @param {object} httpOptions  - The options to be included in the POST request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the POST request.
 */
exports.post = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.post(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PUT request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PUT request to.
 * @param {object} httpOptions  - The options to be included in the PUT request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PUT request.
 */
exports.put = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.put(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PATCH request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PATCH request to.
 * @param {object} httpOptions  - The options to be included in the PATCH request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PATCH request.
 */
exports.patch = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.patch(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP DELETE request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the DELETE request to.
 * @param {object} httpOptions  - The options to be included in the DELETE request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the DELETE request. [optional]
 * @return {object}             - The response of the DELETE request.
 */
exports.delete = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.delete(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP HEAD request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the HEAD request to.
 * @param {object} httpOptions  - The options to be included in the HEAD request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the HEAD request. [optional]
 * @return {object}             - The response of the HEAD request.
 */
exports.head = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.head(Quickbooks(options), callbackData, callbacks);
};

/**
 * Sends an HTTP OPTIONS request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the OPTIONS request to.
 * @param {object} httpOptions  - The options to be included in the OPTIONS request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the OPTIONS request. [optional]
 * @return {object}             - The response of the OPTIONS request.
 */
exports.options = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.options(Quickbooks(options), callbackData, callbacks);
};

exports.clearTokensFromStorage = function () {
    sys.logs.warn("[quickbooks] Clearing token from storage.");
    sys.storage.remove('quickbooks-access-token');
    sys.storage.remove('quickbooks-refresh-token');
};

/****************************************************
 Private helpers
 ****************************************************/

function checkHttpOptions (path, options) {
    options = options || {};
    if (!!path) {
        if (isObject(path)) {
            // take the 'path' parameter as the options
            options = path || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = path;
            } else {
                // create html package
                options = {
                    path: path,
                    body: options
                }
            }
        }
    }
    return options;
}

function isObject (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString)

/****************************************************
 Configurator
 ****************************************************/

let Quickbooks = function (options) {
    if (sys.storage.get('quickbooks-init', {decrypt:true}) === undefined) {
        refreshQuickBooksToken();
        sys.storage.put('quickbooks-init', true, {encrypt: true});
    }
    options = options || {};
    options = setApiUri(options);
    options = setRequestHeaders(options);
    options = setAuthorization(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    let url = options.path || "";
    // check if the request is for quickbooks payments or quickbooks online
    if (url.startsWith("/payments/") || url.includes("/bank-accounts") || url.includes("/cards")) {
        let QUICKBOOKSPAYMENTS_API_BASE_URL = "https://api.intuit.com/quickbooks/v4";
        let QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX = "https://sandbox.api.intuit.com/quickbooks/v4";
        let API_URL = config.get("quickbooksEnvironment") === "production" ? QUICKBOOKSPAYMENTS_API_BASE_URL : QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX;
        options.url = API_URL + url;
    } else {
        let QUICKBOOKS_API_BASE_URL = "https://quickbooks.api.intuit.com/v3";
        let QUICKBOOKS_API_BASE_URL_SANDBOX = "https://sandbox-quickbooks.api.intuit.com/v3";
        let API_URL = config.get("quickbooksEnvironment") === "production" ? QUICKBOOKS_API_BASE_URL : QUICKBOOKS_API_BASE_URL_SANDBOX;
        if (options.params) {
            for (let key in options.params) {
                if (key.toLowerCase() === 'minorversion') {
                    options.params.minorversion = options.params[key];
                    delete options.params[key];
                }
            }
        }

        let minorversion = options.params && options.params.minorversion;

        if (minorversion !== undefined) {
            options.url = concatQuery(API_URL + "/company/" + config.get("companyId") + url, "minorversion", minorversion);
        } else {
            options.url = concatQuery(API_URL + "/company/" + config.get("companyId") + url, "minorversion", config.get("minorVersion"));
        }
    }
    sys.logs.debug('[quickbooks] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    let headers = options.headers || {};
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Accept": "application/json"});

    options.headers = headers;
    return options;
}

function setAuthorization(options) {
    sys.logs.debug('[quickbooks] Setting header token oauth');
    let authorization = (options.retry ? {} : options.authorization) || {};
    authorization = mergeJSON(authorization, {
        type: "oauth2",
        accessToken: sys.storage.get('quickbooks-access-token', {decrypt:true}),
        headerPrefix: "Bearer"
    });
    options.authorization = authorization;
    return options;
}

function refreshQuickBooksToken() {
    sys.utils.concurrency.lock('quickbooks-refresh-token', function() {
        const refreshTokenFromStorage = sys.storage.get('quickbooks-refresh-token', {decrypt: true});
        let refreshTokenResponse = httpService.post({
            url: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {"grant_type":"refresh_token","refresh_token" : refreshTokenFromStorage === undefined ? config.get("refreshToken") : refreshTokenFromStorage},
            authorization: {
                type: "basic",
                username: config.get("clientId"),
                password: config.get("clientSecret")
            }
        });
        sys.logs.debug('[quickbooks] Refresh token response: ' + JSON.stringify(refreshTokenResponse));
        sys.storage.put('quickbooks-access-token', refreshTokenResponse.access_token, {encrypt: true});
        sys.storage.put('quickbooks-refresh-token', refreshTokenResponse.refresh_token, {encrypt: true});
    });
}

function mergeJSON (json1, json2) {
    const result = {};
    let key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

function concatQuery (path, key, value) {
    return path + ((!path || path.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}
