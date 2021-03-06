// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain4491\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain4491\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"customHttpsProvisioningSubstate\":\"PendingDomainControlValidationRequestApproval\",\"validationData\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '684',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9dc63bbe-f931-4252-b136-990cb1c50c4a',
  'x-ms-client-request-id': '3d1c2803-f779-43ac-ae0d-aec1087b78bb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd6625f0f-3382-4bdd-8746-787299163061',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202028Z:d6625f0f-3382-4bdd-8746-787299163061',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:20:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain4491\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain4491\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"customHttpsProvisioningSubstate\":\"PendingDomainControlValidationRequestApproval\",\"validationData\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '684',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9dc63bbe-f931-4252-b136-990cb1c50c4a',
  'x-ms-client-request-id': '3d1c2803-f779-43ac-ae0d-aec1087b78bb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd6625f0f-3382-4bdd-8746-787299163061',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202028Z:d6625f0f-3382-4bdd-8746-787299163061',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:20:27 GMT',
  connection: 'close' });
 return result; }]];