import { useSocketEvent } from '@myapp/shared/socket';
import { useState } from 'react';

type DataType = unknown;

export function use{{pascalCase name}}SocketListener() {
  const [result, setResult] = useState<DataType | undefined>();

  useSocketEvent<DataType>(
    '//TODO please set the url',
    (data) => {
      setResult(data)
    }
  );

  return result;
}
