# Javascript API

The Javascript API of the quickbooks package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST`,`GET` requests to the [quickbooks API](API_URL_HERE) like this:
```javascript
var response = pkg.quickbooks.functions.post('/estimate', body)
var response = pkg.quickbooks.functions.post('/estimate')
var response = pkg.quickbooks.functions.get('/journalentry/:entityId')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/account'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.account.post(body)
```
---
* API URL: '/account/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.account.get(entityId)
```
---
* API URL: '/account?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.account.update.post(body)
```
---
* API URL: '/attachable'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.attachable.post(body)
```
---
* API URL: '/attachable/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.attachable.get(entityId)
```
---
* API URL: '/attachable?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.attachable.delete.post(body)
```
---
* API URL: '/attachable?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.attachable.update.post(body)
```
---
* API URL: '/batch'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.batch.post(body)
```
---
* API URL: '/bill'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.bill.post(body)
```
---
* API URL: '/bill/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.bill.get(entityId)
```
---
* API URL: '/bill?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.bill.delete.post(body)
```
---
* API URL: '/bill?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.bill.update.post(body)
```
---
* API URL: '/billpayment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.billpayment.post(body)
```
---
* API URL: '/billpayment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.billpayment.get(entityId)
```
---
* API URL: '/billpayment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.billpayment.delete.post(body)
```
---
* API URL: '/billpayment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.billpayment.update.post(body)
```
---
* API URL: '/cdc?entities=' + httpOptions.query.entities + '&changedSince=' + httpOptions.query.changedSince + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.cdc.get()
```
---
* API URL: '/class'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.class.post(body)
```
---
* API URL: '/class/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.class.get(entityId)
```
---
* API URL: '/class?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.class.update.post(body)
```
---
* API URL: '/companyinfo/:companyId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.companyinfo.get(companyId)
```
---
* API URL: '/creditmemo'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.creditmemo.post(body)
```
---
* API URL: '/creditmemo/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.creditmemo.get(entityId)
```
---
* API URL: '/creditmemo?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.creditmemo.delete.post(body)
```
---
* API URL: '/creditmemo?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.creditmemo.update.post(body)
```
---
* API URL: '/customer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.customer.post(body)
```
---
* API URL: '/customer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.customer.get(entityId)
```
---
* API URL: '/customer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.customer.update.post(body)
```
---
* API URL: '/department'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.department.post(body)
```
---
* API URL: '/department/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.department.get(entityId)
```
---
* API URL: '/department?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.department.update.post(body)
```
---
* API URL: '/deposit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.deposit.post(body)
```
---
* API URL: '/deposit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.deposit.get(entityId)
```
---
* API URL: '/deposit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.deposit.delete.post(body)
```
---
* API URL: '/deposit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.deposit.update.post(body)
```
---
* API URL: '/employee'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.employee.post(body)
```
---
* API URL: '/employee/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.employee.get(entityId)
```
---
* API URL: '/employee?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.employee.update.post(body)
```
---
* API URL: '/estimate'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.estimate.post(body)
```
---
* API URL: '/estimate/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.estimate.get(entityId)
```
---
* API URL: '/estimate?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.estimate.delete.post(body)
```
---
* API URL: '/estimate?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.estimate.update.post(body)
```
---
* API URL: '/invoice'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.invoice.post(body)
```
---
* API URL: '/invoice/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.invoice.get(entityId)
```
---
* API URL: '/invoice/:entityId/send'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.invoice.send.post(entityId, body)
```
---
* API URL: '/invoice?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.invoice.delete.post(body)
```
---
* API URL: '/invoice?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.invoice.update.post(body)
```
---
* API URL: '/item'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.item.post(body)
```
---
* API URL: '/item/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.item.get(entityId)
```
---
* API URL: '/item?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.item.update.post(body)
```
---
* API URL: '/journalentry'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.journalentry.post(body)
```
---
* API URL: '/journalentry/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.journalentry.get(entityId)
```
---
* API URL: '/journalentry?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.journalentry.delete.post(body)
```
---
* API URL: '/payment'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.payment.post(body)
```
---
* API URL: '/payment/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.payment.get(entityId)
```
---
* API URL: '/payment?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.payment.delete.post(body)
```
---
* API URL: '/payment?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.payment.update.post(body)
```
---
* API URL: '/paymentmethod'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.paymentmethod.post(body)
```
---
* API URL: '/paymentmethod/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.paymentmethod.get(entityId)
```
---
* API URL: '/paymentmethod?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.paymentmethod.update.post(body)
```
---
* API URL: '/preferences'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.preferences.get()
```
---
* API URL: '/preferences?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.preferences.update.post(body)
```
---
* API URL: '/purchase'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchase.post(body)
```
---
* API URL: '/purchase/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchase.get(entityId)
```
---
* API URL: '/purchase?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchase.delete.post(body)
```
---
* API URL: '/purchase?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchase.update.post(body)
```
---
* API URL: '/purchaseorder'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchaseorder.post(body)
```
---
* API URL: '/purchaseorder/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchaseorder.get(entityId)
```
---
* API URL: '/purchaseorder?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchaseorder.delete.post(body)
```
---
* API URL: '/purchaseorder?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.purchaseorder.update.post(body)
```
---
* API URL: '/query?query=' + httpOptions.query.query + ''
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.query.get()
```
---
* API URL: '/refundreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.refundreceipt.post(body)
```
---
* API URL: '/refundreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.refundreceipt.get(entityId)
```
---
* API URL: '/refundreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.refundreceipt.delete.post(body)
```
---
* API URL: '/refundreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.refundreceipt.update.post(body)
```
---
* API URL: '/reports/:reportType'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.reports.get(reportType)
```
---
* API URL: '/salesreceipt'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.salesreceipt.post(body)
```
---
* API URL: '/salesreceipt/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.salesreceipt.get(entityId)
```
---
* API URL: '/salesreceipt?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.salesreceipt.delete.post(body)
```
---
* API URL: '/salesreceipt?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.salesreceipt.update.post(body)
```
---
* API URL: '/taxagency'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.taxagency.post(body)
```
---
* API URL: '/taxagency/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.taxagency.get(entityId)
```
---
* API URL: '/taxcode/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.taxcode.get(entityId)
```
---
* API URL: '/taxrate/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.taxrate.get(entityId)
```
---
* API URL: '/taxservice/taxcode'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.taxservice.taxcode.post(body)
```
---
* API URL: '/term'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.term.post(body)
```
---
* API URL: '/term/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.term.get(entityId)
```
---
* API URL: '/term?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.term.update.post(body)
```
---
* API URL: '/timeactivity'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.timeactivity.post(body)
```
---
* API URL: '/timeactivity/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.timeactivity.get(entityId)
```
---
* API URL: '/timeactivity?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.timeactivity.delete.post(body)
```
---
* API URL: '/timeactivity?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.timeactivity.update.post(body)
```
---
* API URL: '/transfer'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.transfer.post(body)
```
---
* API URL: '/transfer/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.transfer.get(entityId)
```
---
* API URL: '/transfer?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.transfer.delete.post(body)
```
---
* API URL: '/transfer?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.transfer.update.post(body)
```
---
* API URL: '/vendor'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendor.post(body)
```
---
* API URL: '/vendor/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendor.get(entityId)
```
---
* API URL: '/vendor?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendor.update.post(body)
```
---
* API URL: '/vendorcredit'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendorcredit.post(body)
```
---
* API URL: '/vendorcredit/:entityId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendorcredit.get(entityId)
```
---
* API URL: '/vendorcredit?operation=delete'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendorcredit.delete.post(body)
```
---
* API URL: '/vendorcredit?operation=update'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account
```javascript
pkg.quickbooks.functions.vendorcredit.update.post(body)
```
---

</details>

