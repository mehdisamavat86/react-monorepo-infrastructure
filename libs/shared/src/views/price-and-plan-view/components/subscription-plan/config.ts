import { SkeletonProps } from '@mui/material';
import { times } from 'lodash-es';

const SKELETON_CONFIG_LENGTH = 4;
const SKELETON_ITEM_WIDTH = 400;

export const SKELETON_CONFIG: SkeletonProps[] = times(
  SKELETON_CONFIG_LENGTH,
  () => ({
    sx: { bgcolor: 'background.paper' },
    height: 939,
    width: SKELETON_ITEM_WIDTH,
  })
);

export const SKELETON_CONFIG_WIDTH =
  SKELETON_CONFIG_LENGTH * SKELETON_ITEM_WIDTH;
