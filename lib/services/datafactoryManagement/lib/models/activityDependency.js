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
 * Activity dependency information.
 *
 */
class ActivityDependency {
  /**
   * Create a ActivityDependency.
   * @member {string} activity Activity name.
   * @member {array} dependencyConditions Match-Condition for the dependency.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActivityDependency
   *
   * @returns {object} metadata of ActivityDependency
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActivityDependency',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ObjectElementType',
                type: {
                  name: 'Object'
                }
            }
          }
        },
        className: 'ActivityDependency',
        modelProperties: {
          activity: {
            required: true,
            serializedName: 'activity',
            type: {
              name: 'String'
            }
          },
          dependencyConditions: {
            required: true,
            serializedName: 'dependencyConditions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ActivityDependency;
