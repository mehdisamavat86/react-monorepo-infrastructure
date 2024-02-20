import csv from 'papaparse';

export function readFileContentAsString(file: File) {
  return new Promise<string>((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (event) =>
        event.target && resolve(event.target.result as string);
      reader.readAsText(file);
    } catch (err) {
      reject(err);
    }
  });
}

export function createFileListFromArray(files: File[]): FileList {
  const fileList = {
    ...files,
    length: files.length,
    item: (index: number) => {
      return files[index];
    },
  };

  return fileList;
}

export function convertCsvToArray<T = any>(data: string) {
  try {
    return csv.parse<string[]>(data).data as T[][];
  } catch (err) {
    console.error('[convertCsvToArray]', err);
  }

  return undefined;
}

export function convertCsvToObjectArray<T = any>(data: string) {
  try {
    const [headers, ...values] = convertCsvToArray(data) || [];

    return values.reduce((all: any[], row: any[]) => {
      const item: Record<string, string> = headers.reduce(
        (all2, x, i) => ({
          ...all2,
          [x]: row[i as any],
        }),
        {}
      );

      return [...all, item];
    }, []) as T[];
  } catch (err) {
    console.error('[convertCsvToObject]', err);
  }

  return undefined;
}

export function createFileFromString(
  data: string,
  filename = 'file.txt',
  mimeType = 'text/plain'
) {
  const blob = new Blob([data], { type: mimeType });
  return new File([blob], filename, { type: mimeType });
}
