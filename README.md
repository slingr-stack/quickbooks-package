<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Quickbooks package</td>
        <td>November 15, 2023</td>
        <td>Detailed description of the API of the Quickbooks package.</td>
    </tr>
    </tbody>
</table>

# Overview

The QuickBooks package allows you to interact with the QuickBooks Account API.

## Configuration

To obtain the requested fields for configuration, you need to log in to your intuit developer account and go to
 [Test connect to app (OAuth)](https://developer.intuit.com/v2/ui#/playground). On this page, you need to:

 - Complete the form selecting the app you want to configure on the package.

 - Once you select the app the Client ID and Client Secret fields are being populated. You can copy this values to the package configuration.

 - Select the Scopes (Accounting is the only available for now).

 - Click on Get authorization code and authorize the app.

 - Then click on Get Tokens button.

 - Once you have the Tokens you can start making calls to the API. On this screen you need to access to the step 4 and copy
 the Access Token and the Refresh Token to the package configuration. QuickBooks Online data services support 
 minor versions in order to provide a way for you to access incremental changes without breaking existing apps.

## Webhooks

 To use API Web-hooks you need to copy the generated `Webhook URL` to the QuickBooks webhooks app
 configuration. For now, the only supported events are the ones for Account.

 To verify Webhooks request to your package you need to configure the `Webhooks Verifier Token` to make your package
 more secure. This is recommended although is not required. You can find more information about [QuickBooks Webhooks here](https://developer.intuit.com/app/developer/qbo/docs/develop/webhooks)

# Javascript API

The Javascript API of the quickbooks package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `POST`,`GET` requests to the [quickbooks API](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) like this:
```javascript
var response = pkg.quickbooks.api.post('/estimate', body)
var response = pkg.quickbooks.api.post('/estimate')
var response = pkg.quickbooks.api.get('/journalentry/:entityId')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,GET</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/account<br>/account?operation=update<br>/attachable<br>/attachable?operation=update<br>/attachable?operation=delete<br>/batch<br>/bill<br>/bill?operation=update<br>/bill?operation=delete<br>/billpayment<br>/billpayment?operation=update<br>/billpayment?operation=delete<br>/class<br>/class?operation=update<br>/creditmemo<br>/creditmemo?operation=update<br>/creditmemo?operation=delete<br>/customer<br>/customer?operation=update<br>/department<br>/department?operation=update<br>/deposit<br>/deposit?operation=update<br>/deposit?operation=delete<br>/employee<br>/employee?operation=update<br>/estimate<br>/estimate?operation=update<br>/estimate?operation=delete<br>/invoice<br>/invoice?operation=update<br>/invoice?operation=delete<br>/invoice/{entityId}/send<br>/item<br>/item?operation=update<br>/journalentry<br>/journalentry?operation=delete<br>/payment<br>/payment?operation=update<br>/payment?operation=delete<br>/paymentmethod<br>/paymentmethod?operation=update<br>/preferences?operation=update<br>/purchase<br>/purchase?operation=update<br>/purchase?operation=delete<br>/purchaseorder<br>/purchaseorder?operation=update<br>/purchaseorder?operation=delete<br>/refundreceipt<br>/refundreceipt?operation=update<br>/refundreceipt?operation=delete<br>/salesreceipt<br>/salesreceipt?operation=update<br>/salesreceipt?operation=delete<br>/taxagency<br>/taxservice/taxcode<br>/term<br>/term?operation=update<br>/timeactivity<br>/timeactivity?operation=update<br>/timeactivity?operation=delete<br>/transfer<br>/transfer?operation=update<br>/transfer?operation=delete<br>/vendor<br>/vendor?operation=update<br>/vendorcredit<br>/vendorcredit?operation=update<br>/vendorcredit?operation=delete<br>/account/{entityId}<br>/query?query=' + httpOptions.query.query + '<br>/attachable/{entityId}<br>/bill/{entityId}<br>/billpayment/{entityId}<br>/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + '<br>/class/{entityId}<br>/companyinfo/{companyId}<br>/creditmemo/{entityId}<br>/customer/{entityId}<br>/department/{entityId}<br>/deposit/{entityId}<br>/employee/{entityId}<br>/estimate/{entityId}<br>/invoice/{entityId}<br>/item/{entityId}<br>/journalentry/{entityId}<br>/payment/{entityId}<br>/paymentmethod/{entityId}<br>/preferences<br>/purchase/{entityId}<br>/purchaseorder/{entityId}<br>/refundreceipt/{entityId}<br>/reports/{reportType}<br>/salesreceipt/{entityId}<br>/taxagency/{entityId}<br>/taxcode/{entityId}<br>/taxrate/{entityId}<br>/term/{entityId}<br>/timeactivity/{entityId}<br>/transfer/{entityId}<br>/vendor/{entityId}<br>/vendorcredit/{entityId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Create Account

This step allow you to create a new account in the system of quickbook accounting.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Name</td>
        <td>text</td>
        <td>yes</td>
        <td></td>
        <td> Allways </td>
        <td> Name for the account </td>
    </tr>
    <tr>
        <td>Account Type</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the Account Type required by Quickbook. <br>
            Possible values are: <br>
            <i><strong>Bank, Other Current Asset, Fixed Asset, Other Asset, Accounts Receivable</strong></i>
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>



### Create Costumer

This step allow you to create a new costumer in the system of quickbook accounting.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Display Name</td>
        <td>text</td>
        <td>yes</td>
        <td></td>
        <td> Always </td>
        <td> Name to display for the costumer </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>



### Get All Bills

This step allow you to obtain all the bills from the system of quickbook accounting.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
