import { createSelector } from "@reduxjs/toolkit";

export const getOrderingGenealogist = state => state.orderingGenealogist.orderingDataGenealogist


export const getOrderingForCurrentGenealogist = createSelector(
  getOrderingGenealogist,
  ordering => ordering
);
