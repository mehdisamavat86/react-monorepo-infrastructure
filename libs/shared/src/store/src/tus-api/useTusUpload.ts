import { useAuthContext } from '@myapp/shared/auth';
import { API_URL } from '@myapp/shared/constants';
import { useState } from 'react';
import * as tus from 'tus-js-client';

export function useTusUpload() {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { token } = useAuthContext();

  const uploadFile = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const api = new tus.Upload(file, {
        endpoint: `${API_URL}/media-management/files`,
        headers: {
          Authorization: `Bearer ${token?.access_token}`,
        },
        retryDelays: [0, 3000, 5000, 10000, 20000],
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        onError: (error) => {
          console.error(`failed because:${error}`);
          reject(error);
          setLoading(false);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const val = ((bytesUploaded / bytesTotal) * 100).toFixed(
            2
          ) as unknown as number;
          setPercentage(val);
        },
        onSuccess: () => {
          const result = api as any;
          setLoading(false);
          if (result.url) resolve(result.url);
          else reject(Error('Unknown error'));
        },
      });

      setPercentage(0);
      setLoading(true);
      api.start();
    });

  return { uploadFile, loading, percentage };
}
