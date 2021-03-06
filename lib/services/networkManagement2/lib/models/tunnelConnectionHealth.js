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

/**
 * VirtualNetworkGatewayConnection properties
 *
 */
class TunnelConnectionHealth {
  /**
   * Create a TunnelConnectionHealth.
   * @member {string} [tunnel] Tunnel name.
   * @member {string} [connectionStatus] Virtual network Gateway connection
   * status. Possible values include: 'Unknown', 'Connecting', 'Connected',
   * 'NotConnected'
   * @member {number} [ingressBytesTransferred] The Ingress Bytes Transferred
   * in this connection
   * @member {number} [egressBytesTransferred] The Egress Bytes Transferred in
   * this connection
   * @member {string} [lastConnectionEstablishedUtcTime] The time at which
   * connection was established in Utc format.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TunnelConnectionHealth
   *
   * @returns {object} metadata of TunnelConnectionHealth
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TunnelConnectionHealth',
      type: {
        name: 'Composite',
        className: 'TunnelConnectionHealth',
        modelProperties: {
          tunnel: {
            required: false,
            readOnly: true,
            serializedName: 'tunnel',
            type: {
              name: 'String'
            }
          },
          connectionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'connectionStatus',
            type: {
              name: 'String'
            }
          },
          ingressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'ingressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          egressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'egressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          lastConnectionEstablishedUtcTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastConnectionEstablishedUtcTime',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TunnelConnectionHealth;
