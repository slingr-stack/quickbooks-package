/****************************************************
 Webhooks
 ****************************************************/

listeners.defaultWebhookStripe = {
    label: 'Catch HTTP QuickBooks events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/quickbooks',
        }
    },
    callback: function(event) {
        let body = event.data.rawBody;
        let headers = event.data.headers;
        let signature = headers["Intuit-Signature"] || headers["intuit-signature"];
        if (pkg.quickbooks.utils.verifySignature(body, signature)) {
            sys.events.triggerEvent("quickbooks:webhook", event.data);
        } else {
            sys.logs.warn("[quickbooks] Invalid signature for webhook");
        }
    }
};