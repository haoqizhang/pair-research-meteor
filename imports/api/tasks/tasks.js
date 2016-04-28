import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schema } from '../schema';

class TaskCollection extends Mongo.Collection {
  insert(task, callback) {
    return super.insert(task, callback);
  }

  update(selector, modifier) {
    return super.update(selector, modifier);
  }
}

export const Tasks = new TaskCollection('tasks');

Schema.Task = new SimpleSchema({
  name: {
    type: String
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  task: {
    type: String,
    optional: true
  },
  groupId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});

Tasks.attachSchema(Schema.Task);

Tasks.allow({
  insert(userId, doc) {
    return true;
  },
  update(userId, doc, fieldNames, modifier) {
    return true;
  },
  remove(userId, doc) {
    return true;
  }
});