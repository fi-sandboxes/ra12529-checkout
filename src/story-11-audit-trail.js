// RAA-16 Story 11: audit trail
'use strict';

function story11AuditTrailTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story11AuditTrailTotal };
