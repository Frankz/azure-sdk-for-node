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
 * Information about a stateful replica running in a code package. Please note
 * DeployedServiceReplicaQueryResult will contain duplicate data like
 * ServiceKind, ServiceName, PartitionId and replicaId.
 *
 * @extends models['DeployedServiceReplicaDetailInfo']
 */
class DeployedStatefulServiceReplicaDetailInfo extends models['DeployedServiceReplicaDetailInfo'] {
  /**
   * Create a DeployedStatefulServiceReplicaDetailInfo.
   * @member {string} [replicaId]
   * @member {string} [currentReplicatorOperation] Possible values include:
   * 'Invalid', 'None', 'Open', 'ChangeRole', 'UpdateEpoch', 'Close', 'Abort',
   * 'OnDataLoss', 'WaitForCatchup', 'Build'
   * @member {string} [readStatus] Possible values include: 'Invalid',
   * 'Granted', 'ReconfigurationPending', 'NotPrimary', 'NoWriteQuorum'
   * @member {string} [writeStatus] Possible values include: 'Invalid',
   * 'Granted', 'ReconfigurationPending', 'NotPrimary', 'NoWriteQuorum'
   * @member {object} [replicatorStatus]
   * @member {string} [replicatorStatus.kind] Polymorphic Discriminator
   * @member {object} [replicaStatus]
   * @member {string} [replicaStatus.databaseRowCountEstimate] Value indicating
   * the estimated number of rows in the underlying database.
   * @member {string} [replicaStatus.databaseLogicalSizeEstimate] Value
   * indicating the estimated size of the underlying database.
   * @member {string} [replicaStatus.copyNotificationCurrentKeyFilter] Value
   * indicating the latest key-prefix filter applied to enumeration during the
   * callback. Null if there is no pending callback.
   * @member {string} [replicaStatus.copyNotificationCurrentProgress] Value
   * indicating the latest number of keys enumerated during the callback. 0 if
   * there is no pending callback.
   * @member {string} [replicaStatus.statusDetails] Value indicating the
   * current status details of the replica.
   * @member {object} [deployedServiceReplicaQueryResult]
   * @member {string} [deployedServiceReplicaQueryResult.replicaId]
   * @member {string} [deployedServiceReplicaQueryResult.replicaRole] Possible
   * values include: 'Unknown', 'None', 'Primary', 'IdleSecondary',
   * 'ActiveSecondary'
   * @member {object}
   * [deployedServiceReplicaQueryResult.reconfigurationInformation]
   * @member {string}
   * [deployedServiceReplicaQueryResult.reconfigurationInformation.previousConfigurationRole]
   * Possible values include: 'Unknown', 'None', 'Primary', 'IdleSecondary',
   * 'ActiveSecondary'
   * @member {string}
   * [deployedServiceReplicaQueryResult.reconfigurationInformation.reconfigurationPhase]
   * Possible values include: 'Unknown', 'None', 'Phase0', 'Phase1', 'Phase2',
   * 'Phase3', 'Phase4', 'AbortPhaseZero'
   * @member {string}
   * [deployedServiceReplicaQueryResult.reconfigurationInformation.reconfigurationType]
   * Possible values include: 'Unknown', 'SwapPrimary', 'Failover', 'Other'
   * @member {date}
   * [deployedServiceReplicaQueryResult.reconfigurationInformation.reconfigurationStartTimeUtc]
   * Start time (in UTC) of the ongoing reconfiguration. If no reconfiguration
   * is taking place then this value will be zero date-time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedStatefulServiceReplicaDetailInfo
   *
   * @returns {object} metadata of DeployedStatefulServiceReplicaDetailInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateful',
      type: {
        name: 'Composite',
        className: 'DeployedStatefulServiceReplicaDetailInfo',
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
          },
          replicaId: {
            required: false,
            serializedName: 'ReplicaId',
            type: {
              name: 'String'
            }
          },
          currentReplicatorOperation: {
            required: false,
            serializedName: 'CurrentReplicatorOperation',
            type: {
              name: 'String'
            }
          },
          readStatus: {
            required: false,
            serializedName: 'ReadStatus',
            type: {
              name: 'String'
            }
          },
          writeStatus: {
            required: false,
            serializedName: 'WriteStatus',
            type: {
              name: 'String'
            }
          },
          replicatorStatus: {
            required: false,
            serializedName: 'ReplicatorStatus',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'Kind',
                clientName: 'kind'
              },
              uberParent: 'ReplicatorStatus',
              className: 'ReplicatorStatus'
            }
          },
          replicaStatus: {
            required: false,
            serializedName: 'ReplicaStatus',
            type: {
              name: 'Composite',
              className: 'KeyValueStoreReplicaStatus'
            }
          },
          deployedServiceReplicaQueryResult: {
            required: false,
            serializedName: 'DeployedServiceReplicaQueryResult',
            type: {
              name: 'Composite',
              className: 'DeployedStatefulServiceReplicaInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedStatefulServiceReplicaDetailInfo;
