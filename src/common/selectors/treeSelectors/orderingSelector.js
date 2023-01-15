import { createSelector } from "@reduxjs/toolkit";

export const getOrdering = state => state.ordering.orderingData

export const getOrderingIds = createSelector(
  getOrdering,
  (ordering) => {
    return ordering.map(({ id }) => ({ id }));

  })

export const getOrderingStatuses = createSelector(
  getOrdering,
  (ordering) => {
    return ordering.map(({ id, status }) => ({ id, status }));
  },
);

export const getCurrentOrderingStatus = orderId => createSelector(
  getOrdering,
  (ordering) => {
    if (orderId && ordering.length > 0) {
      return ordering.filter(order => order.id === orderId)[0].status;
    }
    return []
  },
);

export const getCurrentOrderingColor= orderId => createSelector(
  getOrdering,
  (ordering) => {
    if (orderId && ordering.length > 0) {
      return ordering.filter(order => order.id === orderId)[0].colorCode;
    }
  },
);