/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the PolicyAssignmentProperties class.
 * @constructor
 * Policy Assignment properties.
 * @member {string} [scope] Gets or sets the policy assignment scope.
 * 
 * @member {string} [displayName] Gets or sets the policy assignment display
 * name.
 * 
 * @member {string} [policyDefinitionId] Gets or sets the policy definition Id.
 * 
 */
export interface PolicyAssignmentProperties {
    scope?: string;
    displayName?: string;
    policyDefinitionId?: string;
}

/**
 * @class
 * Initializes a new instance of the PolicyAssignment class.
 * @constructor
 * Policy assignment.
 * @member {object} [properties] Gets or sets the policy assignment properties.
 * 
 * @member {string} [properties.scope] Gets or sets the policy assignment
 * scope.
 * 
 * @member {string} [properties.displayName] Gets or sets the policy
 * assignment display name.
 * 
 * @member {string} [properties.policyDefinitionId] Gets or sets the policy
 * definition Id.
 * 
 * @member {string} [name] Gets or sets the policy assignment name.
 * 
 */
export interface PolicyAssignment {
    properties?: PolicyAssignmentProperties;
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the PolicyDefinitionProperties class.
 * @constructor
 * Policy definition properties.
 * @member {string} [description] Gets or sets the policy definition
 * description.
 * 
 * @member {string} [displayName] Gets or sets the policy definition display
 * name.
 * 
 * @member {object} [policyRule] The policy rule json.
 * 
 */
export interface PolicyDefinitionProperties {
    description?: string;
    displayName?: string;
    policyRule?: any;
}

/**
 * @class
 * Initializes a new instance of the PolicyDefinition class.
 * @constructor
 * Policy definition.
 * @member {object} [properties] Gets or sets the policy definition properties.
 * 
 * @member {string} [properties.description] Gets or sets the policy
 * definition description.
 * 
 * @member {string} [properties.displayName] Gets or sets the policy
 * definition display name.
 * 
 * @member {object} [properties.policyRule] The policy rule json.
 * 
 * @member {string} [name] Gets or sets the policy definition name.
 * 
 */
export interface PolicyDefinition {
    properties?: PolicyDefinitionProperties;
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the DeploymentExtendedFilter class.
 * @constructor
 * Deployment filter.
 * @member {string} [provisioningState] Gets or sets the provisioning state.
 * 
 */
export interface DeploymentExtendedFilter {
    provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the GenericResourceFilter class.
 * @constructor
 * Resource filter.
 * @member {string} [resourceType] Gets or sets the resource type.
 * 
 * @member {string} [tagname] Gets or sets the tag name.
 * 
 * @member {string} [tagvalue] Gets or sets the tag value.
 * 
 */
export interface GenericResourceFilter {
    resourceType?: string;
    tagname?: string;
    tagvalue?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceGroupFilter class.
 * @constructor
 * Resource group filter.
 * @member {string} [tagName] Gets or sets the tag name.
 * 
 * @member {string} [tagValue] Gets or sets the tag value.
 * 
 */
export interface ResourceGroupFilter {
    tagName?: string;
    tagValue?: string;
}

/**
 * @class
 * Initializes a new instance of the TemplateLink class.
 * @constructor
 * Entity representing the reference to the template.
 * @member {string} uri URI referencing the template.
 * 
 * @member {string} [contentVersion] If included it must match the
 * ContentVersion in the template.
 * 
 */
export interface TemplateLink {
    uri: string;
    contentVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the ParametersLink class.
 * @constructor
 * Entity representing the reference to the deployment paramaters.
 * @member {string} uri URI referencing the template.
 * 
 * @member {string} [contentVersion] If included it must match the
 * ContentVersion in the template.
 * 
 */
export interface ParametersLink {
    uri: string;
    contentVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the DeploymentProperties class.
 * @constructor
 * Deployment properties.
 * @member {object} [template] Gets or sets the template content. Use only one
 * of Template or TemplateLink.
 * 
 * @member {object} [templateLink] Gets or sets the URI referencing the
 * template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [templateLink.uri] URI referencing the template.
 * 
 * @member {string} [templateLink.contentVersion] If included it must match
 * the ContentVersion in the template.
 * 
 * @member {object} [parameters] Deployment parameters. Use only one of
 * Parameters or ParametersLink.
 * 
 * @member {object} [parametersLink] Gets or sets the URI referencing the
 * parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [parametersLink.uri] URI referencing the template.
 * 
 * @member {string} [parametersLink.contentVersion] If included it must match
 * the ContentVersion in the template.
 * 
 * @member {string} [mode] Gets or sets the deployment mode. Possible values
 * include: 'Incremental', 'Complete'
 * 
 * @member {object} [debugSetting] Gets or sets the debug setting of the
 * deployment.
 * 
 * @member {string} [debugSetting.detailLevel] Gets or sets the debug detail
 * level.
 * 
 */
export interface DeploymentProperties {
    template?: any;
    templateLink?: TemplateLink;
    parameters?: any;
    parametersLink?: ParametersLink;
    mode?: string;
    debugSetting?: DebugSetting;
}

/**
 * @class
 * Initializes a new instance of the DebugSetting class.
 * @constructor
 * @member {string} [detailLevel] Gets or sets the debug detail level.
 * 
 */
export interface DebugSetting {
    detailLevel?: string;
}

/**
 * @class
 * Initializes a new instance of the Deployment class.
 * @constructor
 * Deployment operation parameters.
 * @member {object} [properties] Gets or sets the deployment properties.
 * 
 * @member {object} [properties.template] Gets or sets the template content.
 * Use only one of Template or TemplateLink.
 * 
 * @member {object} [properties.templateLink] Gets or sets the URI referencing
 * the template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [properties.templateLink.uri] URI referencing the template.
 * 
 * @member {string} [properties.templateLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {object} [properties.parameters] Deployment parameters. Use only
 * one of Parameters or ParametersLink.
 * 
 * @member {object} [properties.parametersLink] Gets or sets the URI
 * referencing the parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [properties.parametersLink.uri] URI referencing the
 * template.
 * 
 * @member {string} [properties.parametersLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {string} [properties.mode] Gets or sets the deployment mode.
 * Possible values include: 'Incremental', 'Complete'
 * 
 * @member {object} [properties.debugSetting] Gets or sets the debug setting
 * of the deployment.
 * 
 * @member {string} [properties.debugSetting.detailLevel] Gets or sets the
 * debug detail level.
 * 
 */
export interface Deployment {
    properties?: DeploymentProperties;
}

/**
 * @class
 * Initializes a new instance of the DeploymentExportResult class.
 * @constructor
 * @member {object} [template] Gets or sets the template content.
 * 
 */
export interface DeploymentExportResult {
    template?: any;
}

/**
 * @class
 * Initializes a new instance of the ResourceManagementError class.
 * @constructor
 * @member {string} code Gets or sets the error code returned from the server.
 * 
 * @member {string} message Gets or sets the error message returned from the
 * server.
 * 
 * @member {string} [target] Gets or sets the target of the error.
 * 
 */
export interface ResourceManagementError {
    code: string;
    message: string;
    target?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceManagementErrorWithDetails class.
 * @constructor
 * @member {array} [details] Gets or sets validation error.
 * 
 */
export interface ResourceManagementErrorWithDetails extends ResourceManagementError {
    details?: ResourceManagementError[];
}

/**
 * @class
 * Initializes a new instance of the ProviderResourceType class.
 * @constructor
 * Resource type managed by the resource provider.
 * @member {string} [resourceType] Gets or sets the resource type.
 * 
 * @member {array} [locations] Gets or sets the collection of locations where
 * this resource type can be created in.
 * 
 * @member {array} [apiVersions] Gets or sets the api version.
 * 
 * @member {object} [properties] Gets or sets the properties.
 * 
 */
export interface ProviderResourceType {
    resourceType?: string;
    locations?: string[];
    apiVersions?: string[];
    properties?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Provider class.
 * @constructor
 * Resource provider information.
 * @member {string} [id] Gets or sets the provider id.
 * 
 * @member {string} [namespace] Gets or sets the namespace of the provider.
 * 
 * @member {string} [registrationState] Gets or sets the registration state of
 * the provider.
 * 
 * @member {array} [resourceTypes] Gets or sets the collection of provider
 * resource types.
 * 
 */
export interface Provider {
    id?: string;
    namespace?: string;
    registrationState?: string;
    resourceTypes?: ProviderResourceType[];
}

/**
 * @class
 * Initializes a new instance of the BasicDependency class.
 * @constructor
 * Deployment dependency information.
 * @member {string} [id] Gets or sets the ID of the dependency.
 * 
 * @member {string} [resourceType] Gets or sets the dependency resource type.
 * 
 * @member {string} [resourceName] Gets or sets the dependency resource name.
 * 
 */
export interface BasicDependency {
    id?: string;
    resourceType?: string;
    resourceName?: string;
}

/**
 * @class
 * Initializes a new instance of the Dependency class.
 * @constructor
 * Deployment dependency information.
 * @member {array} [dependsOn] Gets the list of dependencies.
 * 
 * @member {string} [id] Gets or sets the ID of the dependency.
 * 
 * @member {string} [resourceType] Gets or sets the dependency resource type.
 * 
 * @member {string} [resourceName] Gets or sets the dependency resource name.
 * 
 */
export interface Dependency {
    dependsOn?: BasicDependency[];
    id?: string;
    resourceType?: string;
    resourceName?: string;
}

/**
 * @class
 * Initializes a new instance of the DeploymentPropertiesExtended class.
 * @constructor
 * Deployment properties with additional details.
 * @member {string} [provisioningState] Gets or sets the state of the
 * provisioning.
 * 
 * @member {string} [correlationId] Gets or sets the correlation ID of the
 * deployment.
 * 
 * @member {date} [timestamp] Gets or sets the timestamp of the template
 * deployment.
 * 
 * @member {object} [outputs] Gets or sets key/value pairs that represent
 * deploymentoutput.
 * 
 * @member {array} [providers] Gets the list of resource providers needed for
 * the deployment.
 * 
 * @member {array} [dependencies] Gets the list of deployment dependencies.
 * 
 * @member {object} [template] Gets or sets the template content. Use only one
 * of Template or TemplateLink.
 * 
 * @member {object} [templateLink] Gets or sets the URI referencing the
 * template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [templateLink.uri] URI referencing the template.
 * 
 * @member {string} [templateLink.contentVersion] If included it must match
 * the ContentVersion in the template.
 * 
 * @member {object} [parameters] Deployment parameters. Use only one of
 * Parameters or ParametersLink.
 * 
 * @member {object} [parametersLink] Gets or sets the URI referencing the
 * parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [parametersLink.uri] URI referencing the template.
 * 
 * @member {string} [parametersLink.contentVersion] If included it must match
 * the ContentVersion in the template.
 * 
 * @member {string} [mode] Gets or sets the deployment mode. Possible values
 * include: 'Incremental', 'Complete'
 * 
 * @member {object} [debugSetting] Gets or sets the debug setting of the
 * deployment.
 * 
 * @member {string} [debugSetting.detailLevel] Gets or sets the debug detail
 * level.
 * 
 */
export interface DeploymentPropertiesExtended {
    provisioningState?: string;
    correlationId?: string;
    timestamp?: Date;
    outputs?: any;
    providers?: Provider[];
    dependencies?: Dependency[];
    template?: any;
    templateLink?: TemplateLink;
    parameters?: any;
    parametersLink?: ParametersLink;
    mode?: string;
    debugSetting?: DebugSetting;
}

/**
 * @class
 * Initializes a new instance of the DeploymentValidateResult class.
 * @constructor
 * Information from validate template deployment response.
 * @member {object} [error] Gets or sets validation error.
 * 
 * @member {array} [error.details] Gets or sets validation error.
 * 
 * @member {object} [properties] Gets or sets the template deployment
 * properties.
 * 
 * @member {string} [properties.provisioningState] Gets or sets the state of
 * the provisioning.
 * 
 * @member {string} [properties.correlationId] Gets or sets the correlation ID
 * of the deployment.
 * 
 * @member {date} [properties.timestamp] Gets or sets the timestamp of the
 * template deployment.
 * 
 * @member {object} [properties.outputs] Gets or sets key/value pairs that
 * represent deploymentoutput.
 * 
 * @member {array} [properties.providers] Gets the list of resource providers
 * needed for the deployment.
 * 
 * @member {array} [properties.dependencies] Gets the list of deployment
 * dependencies.
 * 
 * @member {object} [properties.template] Gets or sets the template content.
 * Use only one of Template or TemplateLink.
 * 
 * @member {object} [properties.templateLink] Gets or sets the URI referencing
 * the template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [properties.templateLink.uri] URI referencing the template.
 * 
 * @member {string} [properties.templateLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {object} [properties.parameters] Deployment parameters. Use only
 * one of Parameters or ParametersLink.
 * 
 * @member {object} [properties.parametersLink] Gets or sets the URI
 * referencing the parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [properties.parametersLink.uri] URI referencing the
 * template.
 * 
 * @member {string} [properties.parametersLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {string} [properties.mode] Gets or sets the deployment mode.
 * Possible values include: 'Incremental', 'Complete'
 * 
 * @member {object} [properties.debugSetting] Gets or sets the debug setting
 * of the deployment.
 * 
 * @member {string} [properties.debugSetting.detailLevel] Gets or sets the
 * debug detail level.
 * 
 */
export interface DeploymentValidateResult {
    error?: ResourceManagementErrorWithDetails;
    properties?: DeploymentPropertiesExtended;
}

/**
 * @class
 * Initializes a new instance of the DeploymentExtended class.
 * @constructor
 * Deployment information.
 * @member {string} [id] Gets or sets the ID of the deployment.
 * 
 * @member {string} name Gets or sets the name of the deployment.
 * 
 * @member {object} [properties] Gets or sets deployment properties.
 * 
 * @member {string} [properties.provisioningState] Gets or sets the state of
 * the provisioning.
 * 
 * @member {string} [properties.correlationId] Gets or sets the correlation ID
 * of the deployment.
 * 
 * @member {date} [properties.timestamp] Gets or sets the timestamp of the
 * template deployment.
 * 
 * @member {object} [properties.outputs] Gets or sets key/value pairs that
 * represent deploymentoutput.
 * 
 * @member {array} [properties.providers] Gets the list of resource providers
 * needed for the deployment.
 * 
 * @member {array} [properties.dependencies] Gets the list of deployment
 * dependencies.
 * 
 * @member {object} [properties.template] Gets or sets the template content.
 * Use only one of Template or TemplateLink.
 * 
 * @member {object} [properties.templateLink] Gets or sets the URI referencing
 * the template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [properties.templateLink.uri] URI referencing the template.
 * 
 * @member {string} [properties.templateLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {object} [properties.parameters] Deployment parameters. Use only
 * one of Parameters or ParametersLink.
 * 
 * @member {object} [properties.parametersLink] Gets or sets the URI
 * referencing the parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [properties.parametersLink.uri] URI referencing the
 * template.
 * 
 * @member {string} [properties.parametersLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {string} [properties.mode] Gets or sets the deployment mode.
 * Possible values include: 'Incremental', 'Complete'
 * 
 * @member {object} [properties.debugSetting] Gets or sets the debug setting
 * of the deployment.
 * 
 * @member {string} [properties.debugSetting.detailLevel] Gets or sets the
 * debug detail level.
 * 
 */
export interface DeploymentExtended {
    id?: string;
    name: string;
    properties?: DeploymentPropertiesExtended;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the GenericResource class.
 * @constructor
 * Resource information.
 * @member {object} [plan] Gets or sets the plan of the resource.
 * 
 * @member {string} [plan.name] Gets or sets the plan ID.
 * 
 * @member {string} [plan.publisher] Gets or sets the publisher ID.
 * 
 * @member {string} [plan.product] Gets or sets the offer ID.
 * 
 * @member {string} [plan.promotionCode] Gets or sets the promotion code.
 * 
 * @member {object} [properties] Gets or sets the resource properties.
 * 
 */
export interface GenericResource extends Resource {
    plan?: Plan;
    properties?: any;
}

/**
 * @class
 * Initializes a new instance of the Plan class.
 * @constructor
 * Plan for the resource.
 * @member {string} [name] Gets or sets the plan ID.
 * 
 * @member {string} [publisher] Gets or sets the publisher ID.
 * 
 * @member {string} [product] Gets or sets the offer ID.
 * 
 * @member {string} [promotionCode] Gets or sets the promotion code.
 * 
 */
export interface Plan {
    name?: string;
    publisher?: string;
    product?: string;
    promotionCode?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceGroup class.
 * @constructor
 * Resource group information.
 * @member {string} [id] Gets the ID of the resource group.
 * 
 * @member {string} [name] Gets or sets the Name of the resource group.
 * 
 * @member {object} [properties]
 * 
 * @member {string} [properties.provisioningState] Gets resource group
 * provisioning state.
 * 
 * @member {string} location Gets or sets the location of the resource group.
 * It cannot be changed after the resource group has been created. Has to be
 * one of the supported Azure Locations, such as West US, East US, West
 * Europe, East Asia, etc.
 * 
 * @member {object} [tags] Gets or sets the tags attached to the resource
 * group.
 * 
 */
export interface ResourceGroup {
    id?: string;
    name?: string;
    properties?: ResourceGroupProperties;
    location: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ResourceGroupProperties class.
 * @constructor
 * The resource group properties.
 * @member {string} [provisioningState] Gets resource group provisioning state.
 * 
 */
export interface ResourceGroupProperties {
    provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourcesMoveInfo class.
 * @constructor
 * Parameters of move resources.
 * @member {array} [resources] Gets or sets the ids of the resources.
 * 
 * @member {string} [targetResourceGroup] The target resource group.
 * 
 */
export interface ResourcesMoveInfo {
    resources?: string[];
    targetResourceGroup?: string;
}

/**
 * @class
 * Initializes a new instance of the ExportTemplateRequest class.
 * @constructor
 * Export resource group template request parameters.
 * @member {array} [resources] Gets or sets the ids of the resources. The only
 * supported string currently is '*' (all resources). Future api updates will
 * support exporting specific resources.
 * 
 * @member {string} [options] The export template options. Supported values
 * include 'IncludeParameterDefaultValue', 'IncludeComments' or
 * 'IncludeParameterDefaultValue, IncludeComments
 * 
 */
export interface ExportTemplateRequest {
    resources?: string[];
    options?: string;
}

/**
 * @class
 * Initializes a new instance of the TagCount class.
 * @constructor
 * Tag count.
 * @member {string} [type] Type of count.
 * 
 * @member {string} [value] Value of count.
 * 
 */
export interface TagCount {
    type?: string;
    value?: string;
}

/**
 * @class
 * Initializes a new instance of the TagValue class.
 * @constructor
 * Tag information.
 * @member {string} [id] Gets or sets the tag ID.
 * 
 * @member {string} [tagValueProperty] Gets or sets the tag value.
 * 
 * @member {object} [count] Gets or sets the tag value count.
 * 
 * @member {string} [count.type] Type of count.
 * 
 * @member {string} [count.value] Value of count.
 * 
 */
export interface TagValue {
    id?: string;
    tagValueProperty?: string;
    count?: TagCount;
}

/**
 * @class
 * Initializes a new instance of the TagDetails class.
 * @constructor
 * Tag details.
 * @member {string} [id] Gets or sets the tag ID.
 * 
 * @member {string} [tagName] Gets or sets the tag name.
 * 
 * @member {object} [count] Gets or sets the tag count.
 * 
 * @member {string} [count.type] Type of count.
 * 
 * @member {string} [count.value] Value of count.
 * 
 * @member {array} [values] Gets or sets the list of tag values.
 * 
 */
export interface TagDetails {
    id?: string;
    tagName?: string;
    count?: TagCount;
    values?: TagValue[];
}

/**
 * @class
 * Initializes a new instance of the TargetResource class.
 * @constructor
 * Target resource.
 * @member {string} [id] Gets or sets the ID of the resource.
 * 
 * @member {string} [resourceName] Gets or sets the name of the resource.
 * 
 * @member {string} [resourceType] Gets or sets the type of the resource.
 * 
 */
export interface TargetResource {
    id?: string;
    resourceName?: string;
    resourceType?: string;
}

/**
 * @class
 * Initializes a new instance of the HttpMessage class.
 * @constructor
 * @member {object} [content] Gets or sets HTTP message content.
 * 
 */
export interface HttpMessage {
    content?: any;
}

/**
 * @class
 * Initializes a new instance of the DeploymentOperationProperties class.
 * @constructor
 * Deployment operation properties.
 * @member {string} [provisioningState] Gets or sets the state of the
 * provisioning.
 * 
 * @member {date} [timestamp] Gets or sets the date and time of the operation.
 * 
 * @member {string} [serviceRequestId] Gets or sets deployment operation
 * service request id.
 * 
 * @member {string} [statusCode] Gets or sets operation status code.
 * 
 * @member {object} [statusMessage] Gets or sets operation status message.
 * 
 * @member {object} [targetResource] Gets or sets the target resource.
 * 
 * @member {string} [targetResource.id] Gets or sets the ID of the resource.
 * 
 * @member {string} [targetResource.resourceName] Gets or sets the name of the
 * resource.
 * 
 * @member {string} [targetResource.resourceType] Gets or sets the type of the
 * resource.
 * 
 * @member {object} [request] Gets or sets the HTTP request message.
 * 
 * @member {object} [request.content] Gets or sets HTTP message content.
 * 
 * @member {object} [response] Gets or sets the HTTP response message.
 * 
 * @member {object} [response.content] Gets or sets HTTP message content.
 * 
 */
export interface DeploymentOperationProperties {
    provisioningState?: string;
    timestamp?: Date;
    serviceRequestId?: string;
    statusCode?: string;
    statusMessage?: any;
    targetResource?: TargetResource;
    request?: HttpMessage;
    response?: HttpMessage;
}

/**
 * @class
 * Initializes a new instance of the DeploymentOperation class.
 * @constructor
 * Deployment operation information.
 * @member {string} [id] Gets or sets full deployment operation id.
 * 
 * @member {string} [operationId] Gets or sets deployment operation id.
 * 
 * @member {object} [properties] Gets or sets deployment properties.
 * 
 * @member {string} [properties.provisioningState] Gets or sets the state of
 * the provisioning.
 * 
 * @member {date} [properties.timestamp] Gets or sets the date and time of the
 * operation.
 * 
 * @member {string} [properties.serviceRequestId] Gets or sets deployment
 * operation service request id.
 * 
 * @member {string} [properties.statusCode] Gets or sets operation status code.
 * 
 * @member {object} [properties.statusMessage] Gets or sets operation status
 * message.
 * 
 * @member {object} [properties.targetResource] Gets or sets the target
 * resource.
 * 
 * @member {string} [properties.targetResource.id] Gets or sets the ID of the
 * resource.
 * 
 * @member {string} [properties.targetResource.resourceName] Gets or sets the
 * name of the resource.
 * 
 * @member {string} [properties.targetResource.resourceType] Gets or sets the
 * type of the resource.
 * 
 * @member {object} [properties.request] Gets or sets the HTTP request message.
 * 
 * @member {object} [properties.request.content] Gets or sets HTTP message
 * content.
 * 
 * @member {object} [properties.response] Gets or sets the HTTP response
 * message.
 * 
 * @member {object} [properties.response.content] Gets or sets HTTP message
 * content.
 * 
 */
export interface DeploymentOperation {
    id?: string;
    operationId?: string;
    properties?: DeploymentOperationProperties;
}

/**
 * @class
 * Initializes a new instance of the ResourceProviderOperationDisplayProperties class.
 * @constructor
 * Resource provider operation's display properties.
 * @member {string} [publisher] Gets or sets operation description.
 * 
 * @member {string} [provider] Gets or sets operation provider.
 * 
 * @member {string} [resource] Gets or sets operation resource.
 * 
 * @member {string} [operation] Gets or sets operation.
 * 
 * @member {string} [description] Gets or sets operation description.
 * 
 */
export interface ResourceProviderOperationDisplayProperties {
    publisher?: string;
    provider?: string;
    resource?: string;
    operation?: string;
    description?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceProviderOperationDefinition class.
 * @constructor
 * Resource provider operation information.
 * @member {string} [name] Gets or sets the provider operation name.
 * 
 * @member {object} [display] Gets or sets the display property of the
 * provider operation.
 * 
 * @member {string} [display.publisher] Gets or sets operation description.
 * 
 * @member {string} [display.provider] Gets or sets operation provider.
 * 
 * @member {string} [display.resource] Gets or sets operation resource.
 * 
 * @member {string} [display.operation] Gets or sets operation.
 * 
 * @member {string} [display.description] Gets or sets operation description.
 * 
 */
export interface ResourceProviderOperationDefinition {
    name?: string;
    display?: ResourceProviderOperationDisplayProperties;
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 */
export interface SubResource extends BaseResource {
    id?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceGroupExportResult class.
 * @constructor
 * @member {object} [template] Gets or sets the template content.
 * 
 * @member {object} [error] Gets or sets the error.
 * 
 * @member {array} [error.details] Gets or sets validation error.
 * 
 */
export interface ResourceGroupExportResult {
    template?: any;
    error?: ResourceManagementErrorWithDetails;
}
