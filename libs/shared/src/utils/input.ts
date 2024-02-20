import React from 'react';
import { Maybe } from '../definition';

export function updateRefValue(
  ref: React.RefObject<HTMLInputElement>,
  value: Maybe<string | number>
) {
  if (ref && ref.current) {
    if (value?.toString() !== ref.current.value) {
      ref.current.value = value ? value.toString() : '';
    }
  }
}
