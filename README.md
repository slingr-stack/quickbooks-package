# Overview

Repo: [https://github.com/slingr-stack/quickbooks-package](https://github.com/slingr-stack/quickbooks-package)

QuickBooks is accounting software designed for small and medium-sized businesses. 
It simplifies financial management with features like invoicing, expense tracking, payroll, and reporting. 
It offers both cloud-based and desktop versions for easy access and is known for its user-friendly interface.

The QuickBooks package has the following features:

- Authentication for the QuickBooks API
- Shortcuts to access the QuickBooks Online API and QuickBooks Payments API
- Support for webhooks

In most cases, you will be using the provided shortcuts to access the API. For example, you could use the API directly by doing an HTTP request like this:

```js
let startPosition = 1;
let maxResults = 1000;
let res = pkg.quickbooks.api.get({
    path: '/query', 
    params: {
        query: `SELECT * FROM Customer STARTPOSITION ${startPosition} MAXRESULTS ${maxResults}`
    } 
});
```

# Configuration

To get the requested fields for configuration, you need to log in to your Intuit developer account and go to 
[OAuth Playground](https://developer.intuit.com/app/developer/playground). 
Follow the instructions, and you will be able to get the information needed for the configuration.

## Client id

**Name**: `clientId` **Type**: text **Mandatory**: true

The client ID coming from the QuickBooks application.

## Client secret

**Name**: `clientSecret` **Type**: text **Mandatory**: true

The client secret coming from the QuickBooks application.

## Company id

**Name**: `companyId` **Type**: text **Mandatory**: true

The company ID that you are connecting with. Also shows up as `Realm ID` in QuickBooks.

## Refresh token

**Name**: `refreshToken` **Type**: text **Mandatory**: true

This is the refresh token you can get from the [OAuth Playground](https://developer.intuit.com/app/developer/playground). 
This will be used to generate the access token automatically.

## QuickBooks environment

**Name**: `quickBooksEnvironment` **Type**: text **Mandatory**: true

Possible values: `sandbox`, `production`

This indicates to which environment the requests will be sent to. QuickBooks supports a sandbox environment and the production one.

## Minor version

**Name**: `minorVersion` **Type**: text **Mandatory**: false

This is the API version to use. Change it only if needed.

## Webhooks verifier token

**Name**: `webhooksVerifierToken` **Type**: text **Mandatory**: false

This is the token to verify the authenticity of webhooks. You can find it in your QuickBooks application.

## Webhook URL

Name: `webhookUrl`

This is the URL webhooks can be sent. You need to configure this URL in the webhooks configuration of the QuickBooks application.

# Javascript API

## HTTP requests

You can make `GET` and `POST` requests to the [QuickBooks API](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) like this:

```js
let startPosition = 1;
let maxResults = 1000;
let res = pkg.quickbooks.api.get({
 path: '/query',
 params: {
  query: `SELECT * FROM Customer STARTPOSITION ${startPosition} MAXRESULTS ${maxResults}`
 }
});
```

```js
let response = pkg.quickbooks.api.post({
 path: '/invoice',
 params: { operation: existingQbInvoice ? 'update' : 'create' },
 body: requestBody
});
```

## Authentication and authorization

The package automatically handles authentication, so you don't need to worry about that.
But you do have to be aware that access and refresh tokens are stored and updated in the App Storage.
(`accessToken-QuickBooks`, `refreshToken-QuickBooks` and `init-Quickbooks`)

Additionally, the package handles calls to QuickBooks Online API and QuickBooks Payments API. Based on the path, the package will decide if the request has to be made to `https://quickbooks.api.intuit.com/v3` (QuickBooks Online) or `https://api.intuit.com/quickbooks/v4` (QuickBooks Payments). For example, if you want to call QuickBooks Payments, it will look the same:

```js
let response = pkg.quickbooks.api.post({
    path: `/customers/${customerId}/cards`,
    body: creditCardInfo
});
```

For more information about making HTTP calls, please refer to the documentation of the [HTTP service](https://github.com/slingr-stack/http-service).

# Events

## Webhook

To receive webhooks from QuickBooks, you should configure the `Webhook URL` in the QuickBooks application. Additionally, you need to set up the `Webhooks Verifier Token` to validate webhooks are valid.

Once everything is set up, you will receive events of type `Webhook` for the QuickBooks package. For more information about the events you can get from QuickBooks, please refer to the [webhooks' documentation](https://developer.intuit.com/app/developer/qbo/docs/develop/webhooks).

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
