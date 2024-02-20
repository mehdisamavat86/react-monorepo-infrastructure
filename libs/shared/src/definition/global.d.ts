import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { MemoExoticComponent } from 'react';

export type Nullable<T = any> = null | T;
export type Maybe<T = undefined> = undefined | T;
export type Nil<T = undefined> = undefined | null | T;
export type BoolStr = 'true' | 'false';

export type ReactElement<P = any> =
  | ((props: P) => JSX.Element | null)
  | MemoExoticComponent<(props: P) => EmotionJSX.Element | null>
  | React.FC;

export type RelationRefObject = {
  id: string;
};

export type First<T extends any[]> = T extends [] ? never : T[0];

export type Prettify<T> = {
  [x in keyof T]: T[x];
} & unknown;

export type Nullify<T, K extends keyof T> = Prettify<{
  [x in keyof T]: x extends K ? Nullable<T[x]> : T[x];
}>;

// TODO replace in all entities in ai-elephant project
export enum ArchiveStatus {
  archived = 'ARCHIVED',
  active = 'ACTIVE',
}

// TODO please change this to handle multiple dynamic params
export type VoidFunc<P1 = unknown, P2 = unknown, P3 = unknown> = (
  p1: P1
) => void;
