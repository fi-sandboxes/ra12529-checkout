// RAA-15 Story 10: session timeout
'use strict';

function story10SessionTimeoutTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story10SessionTimeoutTotal };
