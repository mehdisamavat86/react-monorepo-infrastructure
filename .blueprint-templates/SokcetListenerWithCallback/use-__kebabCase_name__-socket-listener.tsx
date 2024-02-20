import { VoidFunc } from '@myapp/shared/definition';
import { useSocketEvent } from '@myapp/shared/socket';

type DataType = unknown;

export function use{{pascalCase name}}SocketListener(cb: VoidFunc<DataType>) {
  useSocketEvent<DataType>(
    '//TODO please set the url',
    (data) => {
      cb(data)
    }
  );
}
