// RAA-3 Story 2: password reset
'use strict';

function story2PasswordResetTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story2PasswordResetTotal };
