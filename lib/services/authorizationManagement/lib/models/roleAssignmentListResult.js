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
 * @class
 * Initializes a new instance of the RoleAssignmentListResult class.
 * @constructor
 * Role assignment list operation result.
 *
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 *
 */
class RoleAssignmentListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RoleAssignmentListResult
   *
   * @returns {object} metadata of RoleAssignmentListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleAssignmentListResult',
      type: {
        name: 'Composite',
        className: 'RoleAssignmentListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoleAssignmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoleAssignment'
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

module.exports = RoleAssignmentListResult;