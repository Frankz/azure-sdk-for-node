// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Cdn/operations?api-version=2017-10-12')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Cdn/register/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn Resource Provider\",\"operation\":\"Registers the Microsoft.Cdn Resource Provider\",\"description\":\"Registers the subscription for the CDN resource provider and enables the creation of CDN profiles.\"}},{\"name\":\"Microsoft.Cdn/operations/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn Operations\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/edgenodes/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/profiles/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/profiles/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/CheckNameAvailability/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"CheckNameAvailability\"}},{\"name\":\"Microsoft.Cdn/ValidateProbe/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"ValidateProbe\"}},{\"name\":\"Microsoft.Cdn/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"CheckResourceUsage\"}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/logDefinitions/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"The log definition of profiles/endpoints\",\"operation\":\"Read profiles/endpoints log definitions\",\"description\":\"Gets the available logs for Microsoft.Cdn\"},\"properties\":{\"serviceSpecification\":{\"logSpecifications\":[{\"name\":\"CoreAnalytics\",\"displayName\":\"Gets the metrics of the endpoint, e.g., bandwidth, egress, etc.\",\"blobDuration\":\"PT1H\"}]}}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/diagnosticSettings/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"profiles/endpoints\",\"operation\":\"Read diagnostic settings\",\"description\":\"Gets the diagnostic settings for the resource\"}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/diagnosticSettings/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"profiles/endpoints\",\"operation\":\"Write diagnostic settings\",\"description\":\"Creates or updates the diagnostic settings for the resource\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '10097',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e458aca9-88df-4cbf-b5d3-567c26475f6d',
  'x-ms-client-request-id': 'd644b134-3fe7-46c4-bf6e-aad265af864c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '7416a115-72c6-4f2a-877c-d81bd6757441',
  'x-ms-routing-request-id': 'WESTUS2:20180226T203630Z:7416a115-72c6-4f2a-877c-d81bd6757441',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:36:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Cdn/operations?api-version=2017-10-12')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Cdn/register/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn Resource Provider\",\"operation\":\"Registers the Microsoft.Cdn Resource Provider\",\"description\":\"Registers the subscription for the CDN resource provider and enables the creation of CDN profiles.\"}},{\"name\":\"Microsoft.Cdn/operations/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn Operations\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/edgenodes/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/profiles/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/profiles/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"CheckResourceUsage\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/CheckNameAvailability/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"CheckNameAvailability\"}},{\"name\":\"Microsoft.Cdn/ValidateProbe/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"ValidateProbe\"}},{\"name\":\"Microsoft.Cdn/CheckResourceUsage/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Microsoft.Cdn/\",\"operation\":\"CheckResourceUsage\"}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/logDefinitions/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"The log definition of profiles/endpoints\",\"operation\":\"Read profiles/endpoints log definitions\",\"description\":\"Gets the available logs for Microsoft.Cdn\"},\"properties\":{\"serviceSpecification\":{\"logSpecifications\":[{\"name\":\"CoreAnalytics\",\"displayName\":\"Gets the metrics of the endpoint, e.g., bandwidth, egress, etc.\",\"blobDuration\":\"PT1H\"}]}}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/diagnosticSettings/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"profiles/endpoints\",\"operation\":\"Read diagnostic settings\",\"description\":\"Gets the diagnostic settings for the resource\"}},{\"origin\":\"system\",\"name\":\"Microsoft.Cdn/profiles/endpoints/providers/Microsoft.Insights/diagnosticSettings/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"profiles/endpoints\",\"operation\":\"Write diagnostic settings\",\"description\":\"Creates or updates the diagnostic settings for the resource\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '10097',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e458aca9-88df-4cbf-b5d3-567c26475f6d',
  'x-ms-client-request-id': 'd644b134-3fe7-46c4-bf6e-aad265af864c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '7416a115-72c6-4f2a-877c-d81bd6757441',
  'x-ms-routing-request-id': 'WESTUS2:20180226T203630Z:7416a115-72c6-4f2a-877c-d81bd6757441',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:36:30 GMT',
  connection: 'close' });
 return result; }]];