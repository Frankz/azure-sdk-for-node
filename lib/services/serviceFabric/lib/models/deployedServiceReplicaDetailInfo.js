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
 * Information about a Service Fabric service replica deployed on a node.
 *
 */
class DeployedServiceReplicaDetailInfo {
  /**
   * Create a DeployedServiceReplicaDetailInfo.
   * @member {string} [serviceName]
   * @member {uuid} [partitionId]
   * @member {string} [currentServiceOperation] Possible values include:
   * 'Unknown', 'None', 'Open', 'ChangeRole', 'Close', 'Abort'
   * @member {date} [currentServiceOperationStartTimeUtc] The start time of the
   * current service operation in UTC format.
   * @member {array} [reportedLoad]
   * @member {string} serviceKind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeployedServiceReplicaDetailInfo
   *
   * @returns {object} metadata of DeployedServiceReplicaDetailInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedServiceReplicaDetailInfo',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ServiceKind',
          clientName: 'serviceKind'
        },
        uberParent: 'DeployedServiceReplicaDetailInfo',
        className: 'DeployedServiceReplicaDetailInfo',
        modelProperties: {
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          partitionId: {
            required: false,
            serializedName: 'PartitionId',
            type: {
              name: 'String'
            }
          },
          currentServiceOperation: {
            required: false,
            serializedName: 'CurrentServiceOperation',
            type: {
              name: 'String'
            }
          },
          currentServiceOperationStartTimeUtc: {
            required: false,
            serializedName: 'CurrentServiceOperationStartTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          reportedLoad: {
            required: false,
            serializedName: 'ReportedLoad',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LoadMetricReportInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'LoadMetricReportInfo'
                  }
              }
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedServiceReplicaDetailInfo;