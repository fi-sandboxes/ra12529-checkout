// RAA-10 Story 9: price rounding
'use strict';

function story9PriceRoundingTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

module.exports = { story9PriceRoundingTotal };
