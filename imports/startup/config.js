import { Meteor } from 'meteor/meteor';

export const DEV_OPTIONS = {
  CLEAN_DB: 0,
  AUTOJOIN: 1,
  LATENCY: 2000
};


export const PAIR_SCRIPT = 'assets/app/scripts/pair_research.py';

export const TEST_SCRIPT = 'assets/app/scripts/test.py'

export const HELPER_SCRIPT = 'assets/app/scripts/get_helpers.py'

export const STATS_SCRIPT = 'assets/app/scripts/get_tasks.py'

export const ADMIN_ID = Meteor.settings.adminId;
