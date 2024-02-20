import {
  CreateWorkspace,
  ReloadButton,
  SplashScreen,
} from '@myapp/shared/components';
import { FullScreenBox } from '@myapp/shared/components/full-screen-box';
import { useMount } from '@myapp/shared/hooks';
import { Typography } from '@mui/material';
import { createContext, useContext, useState } from 'react';
import { useAuthContext } from '@myapp/shared/auth';
import { useCreateWorkspaceMutationApi } from '../api';
import {
  WorkspaceContextData as ContextData,
  WorkspaceContextProps as ContextProps,
} from './types';

const context = createContext<ContextData>({} as ContextData);

export const { Provider } = context;

const useWorkspaceContext = () => useContext(context);
export const useWorkspace = () => useWorkspaceContext().workspace;
export const useUpdateWorkspace = () => useWorkspaceContext().update;

export const WorkspaceProvider = ({ children, value }: ContextProps) => {
  // TODO later user can select workspace after logging in
  const [workspace, setWorkspace] = useState<ContextData['workspace']>();
  // const api = useGetCurrentWorkspaceApi((data) =>
  //   setWorkspace(data.content[0])
  // );

  const { user } = useAuthContext();

  const api = useCreateWorkspaceMutationApi();
  const apiCall = () => {
    api
      .mutateAsync({
        name: `${user?.firstName}-${user?.lastName}`,
      })
      .then((data) => {
        setWorkspace(data);
      });
  };

  useMount(apiCall);

  return (
    <Provider value={value || { workspace, update: setWorkspace }}>
      {api.isLoading && <SplashScreen />}

      {api.error && (
        <FullScreenBox flexDirection="column" gap={2}>
          <Typography color="primary" variant="h5">
            Can not load the workspace
          </Typography>
          <ReloadButton sx={{ width: 'fit-content' }} onReload={apiCall} />
        </FullScreenBox>
      )}

      {workspace && children}

      {api.isLoading && !api.error && !workspace && <CreateWorkspace />}
    </Provider>
  );
};
