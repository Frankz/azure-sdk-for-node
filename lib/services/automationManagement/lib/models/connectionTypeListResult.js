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
 * The response model for the list connection type operation.
 */
class ConnectionTypeListResult extends Array {
  /**
   * Create a ConnectionTypeListResult.
   * @member {string} [nextLink] Gets or sets the next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ConnectionTypeListResult
   *
   * @returns {object} metadata of ConnectionTypeListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectionTypeListResult',
      type: {
        name: 'Composite',
        className: 'ConnectionTypeListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnectionTypeElementType',
                  type: {
                    name: 'Composite',
                    className: 'ConnectionType'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectionTypeListResult;