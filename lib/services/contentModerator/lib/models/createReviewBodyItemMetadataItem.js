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
 * Class representing a CreateReviewBodyItemMetadataItem.
 */
class CreateReviewBodyItemMetadataItem {
  /**
   * Create a CreateReviewBodyItemMetadataItem.
   * @member {string} key Your key parameter.
   * @member {string} value Your value parameter.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateReviewBodyItemMetadataItem
   *
   * @returns {object} metadata of CreateReviewBodyItemMetadataItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'createReviewBodyItem_MetadataItem',
      type: {
        name: 'Composite',
        className: 'CreateReviewBodyItemMetadataItem',
        modelProperties: {
          key: {
            required: true,
            serializedName: 'Key',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'Value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateReviewBodyItemMetadataItem;
