// RAA-9 Story 8: email receipts
'use strict';

function story8EmailReceiptsTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story8EmailReceiptsTotal };
