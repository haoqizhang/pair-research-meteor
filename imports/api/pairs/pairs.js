import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Schema } from '../schema.js';

// For now, expecting this collection to be purely for analytic purposes.

class PairsCollection extends Mongo.Collection {

}

export const Pairs = new PairsCollection('pairs');

Schema.Pair = new SimpleSchema({
  groupId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  pairingId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  firstUserId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  firstUserName: {
    type: String
  },
  secondUserId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  secondUserName: {
    type: String,
    optional: true
  }
});

Pairs.attachSchema(Schema.Pair);
