import type { Workspace } from '@myapp/shared/definition';
import type { PropsWithChildren } from 'react';

export interface WorkspaceContextData {
  workspace?: Workspace;
  update: (data: Workspace) => void;
}

export interface WorkspaceContextProps extends PropsWithChildren {
  value?: WorkspaceContextData;
}
