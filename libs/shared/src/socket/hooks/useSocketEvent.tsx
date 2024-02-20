import { useAuthContext } from '@myapp/shared/auth';
import { useDebounceEffect, useUnMount } from '@myapp/shared/hooks';
import { useWorkspace } from '@myapp/shared/workspace';
import { useSocket } from '../context';
import { UseSocketEventOptions } from '../types';

export const useSocketEvent = function <T = unknown>(
  name: string,
  handler: (data: T) => void,
  options?: UseSocketEventOptions
) {
  const workspace = useWorkspace();
  const socket = useSocket();
  const userId = useAuthContext().user?.id;

  const action = name
    .replace('{user}', userId || '')
    .replace('{customer}', workspace?.id || userId || '');

  useDebounceEffect(
    () => {
      if (userId) {
        socket?.on(action, handler);
      }
    },
    options?.wait || 0,
    [socket, userId]
  );

  useUnMount(() => {
    if (userId) {
      socket?.off(action, handler);
    }
  });
};
