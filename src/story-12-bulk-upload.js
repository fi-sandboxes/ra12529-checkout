// RAA-17 Story 12: bulk upload
'use strict';

function story12BulkUploadTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story12BulkUploadTotal };
