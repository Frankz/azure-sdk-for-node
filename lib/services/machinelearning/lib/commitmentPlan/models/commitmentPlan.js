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
 * @class
 * Initializes a new instance of the CommitmentPlan class.
 * @constructor
 * An Azure ML commitment plan resource.
 *
 * @member {string} [etag] An entity tag used to enforce optimistic
 * concurrency.
 *
 * @member {object} [properties] The commitment plan properties.
 *
 * @member {boolean} [properties.chargeForOverage] Indicates whether usage
 * beyond the commitment plan's included quantities will be charged.
 *
 * @member {boolean} [properties.chargeForPlan] Indicates whether the
 * commitment plan will incur a charge.
 *
 * @member {date} [properties.creationDate] The date at which this commitment
 * plan was created, in ISO 8601 format.
 *
 * @member {object} [properties.includedQuantities] The included resource
 * quantities this plan gives you.
 *
 * @member {number} [properties.maxAssociationLimit] The maximum number of
 * commitment associations that can be children of this commitment plan.
 *
 * @member {number} [properties.maxCapacityLimit] The maximum scale-out
 * capacity for this commitment plan.
 *
 * @member {number} [properties.minCapacityLimit] The minimum scale-out
 * capacity for this commitment plan.
 *
 * @member {string} [properties.planMeter] The Azure meter which will be used
 * to charge for this commitment plan.
 *
 * @member {number} [properties.refillFrequencyInDays] The frequency at which
 * this commitment plan's included quantities are refilled.
 *
 * @member {boolean} [properties.suspendPlanOnOverage] Indicates whether this
 * commitment plan will be moved into a suspended state if usage goes beyond
 * the commitment plan's included quantities.
 *
 * @member {object} [sku] The commitment plan SKU.
 *
 * @member {number} [sku.capacity] The scale-out capacity of the resource. 1 is
 * 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment
 * plan resource.
 *
 * @member {string} [sku.name] The SKU name. Along with tier, uniquely
 * identifies the SKU.
 *
 * @member {string} [sku.tier] The SKU tier. Along with name, uniquely
 * identifies the SKU.
 *
 */
class CommitmentPlan extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CommitmentPlan
   *
   * @returns {object} metadata of CommitmentPlan
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CommitmentPlan',
      type: {
        name: 'Composite',
        className: 'CommitmentPlan',
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
          location: {
            required: true,
            serializedName: 'location',
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
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'CommitmentPlanProperties'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'ResourceSku'
            }
          }
        }
      }
    };
  }
}

module.exports = CommitmentPlan;