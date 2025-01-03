/****************************************************
 Webhooks
 ****************************************************/

listeners.defaultWebhookQuickbooks = {
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
        sys.logs.info("[quickbooks] Received quickbooks webhook event.");
        let body = event.data.rawBody;
        let headers = event.data.headers;
        let signature = headers["Intuit-Signature"] || headers["intuit-signature"];
        if (pkg.quickbooks.utils.verifySignature(body, signature)) {
            sys.logs.info('[quickbooks] Valid webhook event received. Triggering event.');
            sys.events.triggerEvent("quickbooks:webhook", event.data);
        } else {
            sys.logs.warn("[quickbooks] Invalid signature for webhook");
        }
    }
};
