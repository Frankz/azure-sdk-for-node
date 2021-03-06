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
 * Class representing a JobRecurrenceScheduleMonthlyOccurrence.
 */
class JobRecurrenceScheduleMonthlyOccurrence {
  /**
   * Create a JobRecurrenceScheduleMonthlyOccurrence.
   * @member {string} [day] Gets or sets the day. Must be one of monday,
   * tuesday, wednesday, thursday, friday, saturday, sunday. Possible values
   * include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
   * 'Saturday', 'Sunday'
   * @member {number} [occurrence] Gets or sets the occurrence. Must be between
   * -5 and 5.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobRecurrenceScheduleMonthlyOccurrence
   *
   * @returns {object} metadata of JobRecurrenceScheduleMonthlyOccurrence
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobRecurrenceScheduleMonthlyOccurrence',
      type: {
        name: 'Composite',
        className: 'JobRecurrenceScheduleMonthlyOccurrence',
        modelProperties: {
          day: {
            required: false,
            serializedName: 'day',
            type: {
              name: 'Enum',
              allowedValues: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
            }
          },
          occurrence: {
            required: false,
            serializedName: 'Occurrence',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = JobRecurrenceScheduleMonthlyOccurrence;
