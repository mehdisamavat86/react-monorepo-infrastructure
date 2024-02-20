import { UserRelation } from './auth';

export interface Preset {
  id: string;
  refId: string;
  type: string;
  name: string;
  value: string;
  user: UserRelation;
  created: string;
  modified: string;
  favorite?: boolean;
}

export interface ParsedPreset<T = string> extends Omit<Preset, 'value'> {
  value: T;
}
