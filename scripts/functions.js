/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.info("[quickbooks] Handling request "+JSON.stringify(error));
        refreshQuickBooksToken();
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.account = {};

exports.account.update = {};

exports.query = {};

exports.attachable = {};

exports.attachable.update = {};

exports.attachable.delete = {};

exports.batch = {};

exports.bill = {};

exports.bill.update = {};

exports.bill.delete = {};

exports.billpayment = {};

exports.billpayment.update = {};

exports.billpayment.delete = {};

exports.cdc = {};

exports.class = {};

exports.class.update = {};

exports.companyinfo = {};

exports.creditmemo = {};

exports.creditmemo.update = {};

exports.creditmemo.delete = {};

exports.customer = {};

exports.customer.update = {};

exports.department = {};

exports.department.update = {};

exports.deposit = {};

exports.deposit.update = {};

exports.deposit.delete = {};

exports.employee = {};

exports.employee.update = {};

exports.estimate = {};

exports.estimate.update = {};

exports.estimate.delete = {};

exports.invoice = {};

exports.invoice.update = {};

exports.invoice.delete = {};

exports.invoice.send = {};

exports.item = {};

exports.item.update = {};

exports.journalentry = {};

exports.journalentry.delete = {};

exports.payment = {};

exports.payment.update = {};

exports.payment.delete = {};

exports.paymentmethod = {};

exports.paymentmethod.update = {};

exports.preferences = {};

exports.preferences.update = {};

exports.purchase = {};

exports.purchase.update = {};

exports.purchase.delete = {};

exports.purchaseorder = {};

exports.purchaseorder.update = {};

exports.purchaseorder.delete = {};

exports.refundreceipt = {};

exports.refundreceipt.update = {};

exports.refundreceipt.delete = {};

exports.reports = {};

exports.salesreceipt = {};

exports.salesreceipt.update = {};

exports.salesreceipt.delete = {};

exports.taxagency = {};

exports.taxcode = {};

exports.taxrate = {};

exports.taxservice = {};

exports.taxservice.taxcode = {};

exports.term = {};

exports.term.update = {};

exports.timeactivity = {};

exports.timeactivity.update = {};

exports.timeactivity.delete = {};

exports.transfer = {};

exports.transfer.update = {};

exports.transfer.delete = {};

exports.vendor = {};

exports.vendor.update = {};

exports.vendorcredit = {};

exports.vendorcredit.update = {};

exports.vendorcredit.delete = {};

exports.account.post = function(httpOptions) {
    var url = parse('/account');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.account.update.post = function(httpOptions) {
    var url = parse('/account?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.account.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/account/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.query.get = function(httpOptions) {
    var url = parse('/query?query=' + httpOptions.query.query + '');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.attachable.post = function(httpOptions) {
    var url = parse('/attachable');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.attachable.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/attachable/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.attachable.update.post = function(httpOptions) {
    var url = parse('/attachable?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.attachable.delete.post = function(httpOptions) {
    var url = parse('/attachable?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.batch.post = function(httpOptions) {
    var url = parse('/batch');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.bill.post = function(httpOptions) {
    var url = parse('/bill');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.bill.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/bill/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.bill.update.post = function(httpOptions) {
    var url = parse('/bill?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.bill.delete.post = function(httpOptions) {
    var url = parse('/bill?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.billpayment.post = function(httpOptions) {
    var url = parse('/billpayment');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.billpayment.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/billpayment/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.billpayment.update.post = function(httpOptions) {
    var url = parse('/billpayment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.billpayment.delete.post = function(httpOptions) {
    var url = parse('/billpayment?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.cdc.get = function(httpOptions) {
    var url = parse('/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + '');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.class.post = function(httpOptions) {
    var url = parse('/class');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.class.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/class/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.class.update.post = function(httpOptions) {
    var url = parse('/class?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.companyinfo.get = function(companyId, httpOptions) {
    if (!companyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [companyId].');
        return;
    }
    var url = parse('/companyinfo/:companyId', [companyId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.creditmemo.post = function(httpOptions) {
    var url = parse('/creditmemo');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.creditmemo.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/creditmemo/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.creditmemo.update.post = function(httpOptions) {
    var url = parse('/creditmemo?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.creditmemo.delete.post = function(httpOptions) {
    var url = parse('/creditmemo?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.customer.post = function(httpOptions) {
    var url = parse('/customer');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.customer.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/customer/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.customer.update.post = function(httpOptions) {
    var url = parse('/customer?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.department.post = function(httpOptions) {
    var url = parse('/department');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.department.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/department/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.department.update.post = function(httpOptions) {
    var url = parse('/department?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.deposit.post = function(httpOptions) {
    var url = parse('/deposit');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.deposit.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/deposit/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.deposit.update.post = function(httpOptions) {
    var url = parse('/deposit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.deposit.delete.post = function(httpOptions) {
    var url = parse('/deposit?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.employee.post = function(httpOptions) {
    var url = parse('/employee');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.employee.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/employee/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.employee.update.post = function(httpOptions) {
    var url = parse('/employee?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.estimate.post = function(httpOptions) {
    var url = parse('/estimate');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.estimate.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/estimate/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.estimate.update.post = function(httpOptions) {
    var url = parse('/estimate?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.estimate.delete.post = function(httpOptions) {
    var url = parse('/estimate?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.invoice.post = function(httpOptions) {
    var url = parse('/invoice');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.invoice.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/invoice/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.invoice.update.post = function(httpOptions) {
    var url = parse('/invoice?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.invoice.delete.post = function(httpOptions) {
    var url = parse('/invoice?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.invoice.send.post = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/invoice/:entityId/send', [entityId]);
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.item.post = function(httpOptions) {
    var url = parse('/item');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.item.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/item/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.item.update.post = function(httpOptions) {
    var url = parse('/item?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.journalentry.post = function(httpOptions) {
    var url = parse('/journalentry');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.journalentry.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/journalentry/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.journalentry.delete.post = function(httpOptions) {
    var url = parse('/journalentry?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.payment.post = function(httpOptions) {
    var url = parse('/payment');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.payment.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/payment/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.payment.update.post = function(httpOptions) {
    var url = parse('/payment?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.payment.delete.post = function(httpOptions) {
    var url = parse('/payment?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.paymentmethod.post = function(httpOptions) {
    var url = parse('/paymentmethod');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.paymentmethod.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/paymentmethod/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.paymentmethod.update.post = function(httpOptions) {
    var url = parse('/paymentmethod?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.preferences.get = function(httpOptions) {
    var url = parse('/preferences');
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.preferences.update.post = function(httpOptions) {
    var url = parse('/preferences?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchase.post = function(httpOptions) {
    var url = parse('/purchase');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchase.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/purchase/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.purchase.update.post = function(httpOptions) {
    var url = parse('/purchase?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchase.delete.post = function(httpOptions) {
    var url = parse('/purchase?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchaseorder.post = function(httpOptions) {
    var url = parse('/purchaseorder');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchaseorder.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/purchaseorder/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.purchaseorder.update.post = function(httpOptions) {
    var url = parse('/purchaseorder?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.purchaseorder.delete.post = function(httpOptions) {
    var url = parse('/purchaseorder?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.refundreceipt.post = function(httpOptions) {
    var url = parse('/refundreceipt');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.refundreceipt.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/refundreceipt/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.refundreceipt.update.post = function(httpOptions) {
    var url = parse('/refundreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.refundreceipt.delete.post = function(httpOptions) {
    var url = parse('/refundreceipt?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.reports.get = function(reportType, httpOptions) {
    if (!reportType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reportType].');
        return;
    }
    var url = parse('/reports/:reportType', [reportType]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.salesreceipt.post = function(httpOptions) {
    var url = parse('/salesreceipt');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.salesreceipt.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/salesreceipt/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.salesreceipt.update.post = function(httpOptions) {
    var url = parse('/salesreceipt?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.salesreceipt.delete.post = function(httpOptions) {
    var url = parse('/salesreceipt?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.taxagency.post = function(httpOptions) {
    var url = parse('/taxagency');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.taxagency.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxagency/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.taxcode.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxcode/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.taxrate.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/taxrate/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.taxservice.taxcode.post = function(httpOptions) {
    var url = parse('/taxservice/taxcode');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.term.post = function(httpOptions) {
    var url = parse('/term');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.term.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/term/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.term.update.post = function(httpOptions) {
    var url = parse('/term?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.timeactivity.post = function(httpOptions) {
    var url = parse('/timeactivity');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.timeactivity.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/timeactivity/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.timeactivity.update.post = function(httpOptions) {
    var url = parse('/timeactivity?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.timeactivity.delete.post = function(httpOptions) {
    var url = parse('/timeactivity?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.transfer.post = function(httpOptions) {
    var url = parse('/transfer');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.transfer.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/transfer/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.transfer.update.post = function(httpOptions) {
    var url = parse('/transfer?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.transfer.delete.post = function(httpOptions) {
    var url = parse('/transfer?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.vendor.post = function(httpOptions) {
    var url = parse('/vendor');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.vendor.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/vendor/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.vendor.update.post = function(httpOptions) {
    var url = parse('/vendor?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.vendorcredit.post = function(httpOptions) {
    var url = parse('/vendorcredit');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.vendorcredit.get = function(entityId, httpOptions) {
    if (!entityId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [entityId].');
        return;
    }
    var url = parse('/vendorcredit/:entityId', [entityId]);
    sys.logs.debug('[quickbooks] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options));
};

exports.vendorcredit.update.post = function(httpOptions) {
    var url = parse('/vendorcredit?operation=update');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

exports.vendorcredit.delete.post = function(httpOptions) {
    var url = parse('/vendorcredit?operation=delete');
    sys.logs.debug('[quickbooks] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Quickbooks(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Quickbooks(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Quickbooks(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Quickbooks(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Quickbooks(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Quickbooks(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Quickbooks(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[quickbooks] Get property: '+property);
    return config.get(property);
};

exports.utils.verifySignature = function (body, signature) {
    sys.logs.info("Checking signature");
    var secret = config.get("webhookSecret");
    if (!body || body === "") {
        sys.logs.warn("The body is null or empty");
        return false;
    }
    if (!secret || secret === "" || !signature || signature === "") {
        if (!sys.utils.crypto.verifySignatureWithHmac(body, signature, secret, "HmacSHA256")) {
            sys.logs.warn("Invalid signature or body");
            return false;
        }
        if (!sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha1=",""), secret, "HmacSHA1")) {
            sys.logs.warn("Invalid signature or body");
            return false;
        }
    }
    return true;
};

/****************************************************
 Private helpers
 ****************************************************/


var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string' && typeof (args[i]) != 'number') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Configurator
 ****************************************************/

var Quickbooks = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    options= setAuthorization(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var QUICKBOOKS_API_BASE_URL = "https://quickbooks.api.intuit.com/v3";
    var QUICKBOOKS_API_BASE_URL_SANDBOX = "https://sandbox-quickbooks.api.intuit.com/v3";
    var API_URL = config.get("quickBooksEnvironment") === "PRODUCTION" ? QUICKBOOKS_API_BASE_URL : QUICKBOOKS_API_BASE_URL_SANDBOX;
    var url = options.path || "";
    options.url = concatQuery(API_URL + "/company/" + config.get("companyId") + url, "minorVersion", config.get("minorVersion"));
    sys.logs.debug('[quickbooks] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Accept": "application/json"});

    options.headers = headers;
    return options;
}

function setAuthorization(options) {
    sys.logs.debug('[quickbooks] Setting header token oauth');
    var authorization = options.authorization || {};
    authorization = mergeJSON(authorization, {
        type: "oauth2",
        accessToken: config.get("accessToken"),
        headerPrefix: "Bearer"
    });
    options.authorization = authorization;
    return options;
}

function refreshQuickBooksToken() {
    var refreshTokenResponse = httpService.post({
        url: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {
            client_id: config.get("clientId"),
            client_secret: config.get("clientSecret"),
            grant_type: "refresh_token",
            refresh_token: config.get("refreshToken")
        },
        authorization: {
            type: "basic",
            username: config.get("clientId"),
            password: config.get("clientSecret")
        }
    });
    sys.logs.debug('[quickbooks] Refresh token response: ' + JSON.stringify(refreshTokenResponse));
    config.set("accessToken", refreshTokenResponse.access_token);
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
