/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createAccountQuickbooks = function (inputs) {

	var inputsLogic = {
		name: inputs.name || "",
		accountType: inputs.accountType || ""
	};

	var options = {
		url: config.get("QUICKBOOKS_API_BASE_URL") + parse("/account"),
		body: {
			Name: inputsLogic.name,
			AccountType: inputsLogic.accountType
		}
	}

	options= setApiUri(options);
	options= setRequestHeaders(options);
	options= setAuthorization(options);

	return httpService.post(options);
};

function parse (url, pathVariables){
	var regex = /{([^}]*)}/g;
	if (!url.match(regex)){
		return url;
	}
	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}
	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})
	return url;
}

function setApiUri(options) {
	let QUICKBOOKS_API_BASE_URL = "https://quickbooks.api.intuit.com/v3";
	let QUICKBOOKS_API_BASE_URL_SANDBOX = "https://sandbox-quickbooks.api.intuit.com/v3";
	let API_URL = config.get("quickBooksEnvironment") === "PRODUCTION" ? QUICKBOOKS_API_BASE_URL : QUICKBOOKS_API_BASE_URL_SANDBOX;
	let url = options.path || "";
	options.url = concatQuery(API_URL + "/company/" + config.get("companyId") + url, "minorVersion", config.get("minorVersion"));
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
	let authorization = options.authorization || {};
	authorization = mergeJSON(authorization, {
		type: "oauth2",
		accessToken: config.get("accessToken"),
		headerPrefix: "Bearer"
	});
	options.authorization = authorization;
	return options;
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
