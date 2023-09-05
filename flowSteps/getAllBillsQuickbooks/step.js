/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.getAllBillsQuickbooks = function (inputs) {

	var options = {
		url: config.get("QUICKBOOKS_API_BASE_URL") + parse("/query?query='select * from bill'"),
		body: {
			Name: inputsLogic.name,
			AccountType: inputsLogic.accountType
		}
	}

	return httpService.get(options);
};

var parse = function (url, pathVariables){

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