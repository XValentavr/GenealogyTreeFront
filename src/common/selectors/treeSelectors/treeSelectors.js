import { createSelector } from "@reduxjs/toolkit";

export const getInitialTree = state => state.tree.treeData

export const getInitialTreeId = createSelector(
  getInitialTree,
  initialTree => initialTree?.id);