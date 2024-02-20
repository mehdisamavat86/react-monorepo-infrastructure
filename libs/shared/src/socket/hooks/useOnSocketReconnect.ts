import { useDebounceEffect } from '@myapp/shared/hooks';
import { useSocket } from '../context';

type Func = () => void;

export function useOnSocketReconnect(callback: Func) {
  const socket = useSocket();

  useDebounceEffect(
    () => {
      socket?.connect();

      socket?.on('connect', callback);

      return () => {
        socket?.off('connect', callback);
      };
    },
    0,
    [socket]
  );
}
