/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Job details.
 *
 * @extends models['Resource']
 */
class Job extends models['Resource'] {
  /**
   * Create a Job.
   * @member {object} [properties] The custom data.
   * @member {string} [properties.activityId] The activity id.
   * @member {string} [properties.scenarioName] The ScenarioName.
   * @member {string} [properties.friendlyName] The DisplayName.
   * @member {string} [properties.state] The status of the Job. It is one of
   * these values - NotStarted, InProgress, Succeeded, Failed, Cancelled,
   * Suspended or Other.
   * @member {string} [properties.stateDescription] The description of the
   * state of the Job. For e.g. - For Succeeded state, description can be
   * Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
   * @member {array} [properties.tasks] The tasks.
   * @member {array} [properties.errors] The errors.
   * @member {date} [properties.startTime] The start time.
   * @member {date} [properties.endTime] The end time.
   * @member {array} [properties.allowedActions] The Allowed action the job.
   * @member {string} [properties.targetObjectId] The affected Object Id.
   * @member {string} [properties.targetObjectName] The name of the affected
   * object.
   * @member {string} [properties.targetInstanceType] The type of the affected
   * object which is of
   * {Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType} class.
   * @member {object} [properties.customDetails] The custom job details like
   * test failover job details.
   * @member {object} [properties.customDetails.affectedObjectDetails] The
   * affected object properties like source server, source cloud, target
   * server, target cloud etc. based on the workflow object details.
   * @member {string} [properties.customDetails.instanceType] Polymorphic
   * Discriminator
   * @member {string} [status] The status of the Job. ARM expects the terminal
   * status to be one of (1) Succeeded, (2) Failed or (3) Canceled. All other
   * values imply that the operation is still running / being applied.
   * @member {object} [error] The error.
   * @member {string} [error.code] Gets HTTP status code for the error.
   * @member {string} [error.message] Gets exception message.
   * @member {string} [error.target] Gets exception target.
   * @member {array} [error.details] Gets service based error details.
   * @member {object} [error.innererror] Gets private data for service
   * debugging.
   * @member {string} [error.innererror.trace] Gets complete stack trace of the
   * exception.
   * @member {string} [error.innererror.source] Gets exception source.
   * @member {object} [error.innererror.methodStatus] Gets data related to
   * method which threw the exception.
   * @member {string} [error.innererror.methodStatus.isVirtual] Gets a value
   * indicating whether called method was virtual
   * @member {array} [error.innererror.methodStatus.parameters] Gets parameter
   * list passed to method.
   * @member {string} [error.innererror.methodStatus.containsGenericParameters]
   * Gets a value indicating whether method container generic params.
   * @member {string} [error.innererror.cloudId] Gets cloud Id in exception.
   * @member {string} [error.innererror.hVHostId] Gets hyperV host ID.
   * @member {string} [error.innererror.hVClusterId] Gets hyperV cluster Id.
   * @member {string} [error.innererror.networkId] Gets network Id.
   * @member {string} [error.innererror.vmId] Gets Vm Id.
   * @member {string} [error.innererror.fabricId] Gets Fabric Id.
   * @member {string} [error.innererror.liveId] Gets Live Id of the caller.
   * @member {string} [error.innererror.containerId] Gets container Id of the
   * caller.
   * @member {string} [error.innererror.resourceId] Gets resource id used in
   * the call.
   * @member {string} [error.innererror.resourceName] Gets caller resource
   * name.
   * @member {string} [error.innererror.subscriptionId] Gets subscription Id.
   * @member {string} [error.innererror.serializedSRSLogContext] Gets
   * serialized SRS log context.
   * @member {string} [startTime] The start time.
   * @member {string} [endTime] The start time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Job
   *
   * @returns {object} metadata of Job
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Job',
      type: {
        name: 'Composite',
        className: 'Job',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'JobProperties'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ARMException'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'String'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Job;
