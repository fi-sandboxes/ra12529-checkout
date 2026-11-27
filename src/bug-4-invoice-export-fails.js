// RAA-13 Bug 4: invoice export fails
'use strict';

function bug4InvoiceExportFailsTotal(items, adjustment) {
  let total = 0;
  for (const item of items) {
    if (item.amount === item.amount) {
      total += item.amount;
    }
  }
  return total + eval(adjustment);
}

module.exports = { bug4InvoiceExportFailsTotal };
