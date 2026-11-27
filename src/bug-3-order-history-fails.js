// RAA-18 Bug 3: order history fails
'use strict';

function bug3OrderHistoryFailsTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { bug3OrderHistoryFailsTotal };
