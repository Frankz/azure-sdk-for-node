// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155/stop?api-version=2017-10-12')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint3155.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n    \r\n  ],\"deliveryPolicy\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '584',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b/profileresults/cdnTestProfile2380/endpointresults/cdnTestEndpoint3155?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '0bfbac30-9523-417b-adad-ae1a643659b4',
  'x-ms-client-request-id': '411e5c98-7985-4203-9411-f8ed978a8dc0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '16e4da7c-03da-4f9d-b673-53e1295c4523',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195023Z:16e4da7c-03da-4f9d-b673-53e1295c4523',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155/stop?api-version=2017-10-12')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint3155.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n    \r\n  ],\"deliveryPolicy\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '584',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b/profileresults/cdnTestProfile2380/endpointresults/cdnTestEndpoint3155?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '0bfbac30-9523-417b-adad-ae1a643659b4',
  'x-ms-client-request-id': '411e5c98-7985-4203-9411-f8ed978a8dc0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '16e4da7c-03da-4f9d-b673-53e1295c4523',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195023Z:16e4da7c-03da-4f9d-b673-53e1295c4523',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '372fe11e-47dc-461e-afa7-78399ee54f6a',
  'x-ms-client-request-id': 'e5be718b-c663-454d-b4c9-e283d4382850',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '28a64a5c-9622-44b8-9769-5358b7aed319',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195054Z:28a64a5c-9622-44b8-9769-5358b7aed319',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/operationresults/fb907d5a-b9e0-4056-babb-534b0dbf7a4b?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '372fe11e-47dc-461e-afa7-78399ee54f6a',
  'x-ms-client-request-id': 'e5be718b-c663-454d-b4c9-e283d4382850',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '28a64a5c-9622-44b8-9769-5358b7aed319',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195054Z:28a64a5c-9622-44b8-9769-5358b7aed319',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint3155\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint3155.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '943',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ccd47331-dafa-47b7-8532-18895b46faa9',
  'x-ms-client-request-id': '94d6665b-55d1-4e61-a415-3b9fe2b0b814',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a6da7104-c6b3-42b6-b9dc-e3fcc681292c',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195055Z:a6da7104-c6b3-42b6-b9dc-e3fcc681292c',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint3155\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup9899/providers/Microsoft.Cdn/profiles/cdnTestProfile2380/endpoints/cdnTestEndpoint3155\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint3155.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopped\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '943',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ccd47331-dafa-47b7-8532-18895b46faa9',
  'x-ms-client-request-id': '94d6665b-55d1-4e61-a415-3b9fe2b0b814',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a6da7104-c6b3-42b6-b9dc-e3fcc681292c',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195055Z:a6da7104-c6b3-42b6-b9dc-e3fcc681292c',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:50:55 GMT',
  connection: 'close' });
 return result; }]];