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
 * Gets a paged list of import tasks.
 */
class ImportTaskListResult extends Array {
  /**
   * Create a ImportTaskListResult.
   * @member {string} [nextLink] When the results are paged, the nextLink is
   * the URI for the next page of results. This property is empty when there
   * are no additional pages.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImportTaskListResult
   *
   * @returns {object} metadata of ImportTaskListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'importTaskListResult',
      type: {
        name: 'Composite',
        className: 'ImportTaskListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImportTaskResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImportTaskResult'
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

module.exports = ImportTaskListResult;