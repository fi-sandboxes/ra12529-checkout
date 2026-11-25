// RAA-8 Story 7: address book
'use strict';

function story7AddressBookTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story7AddressBookTotal };
