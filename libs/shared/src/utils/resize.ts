import { merge } from 'lodash-es';
import Pica, { PicaResizeOptions } from 'pica';
import { CustomFile } from '../components';
import { Nil } from '../definition';

interface ResizeOptions extends Omit<PicaResizeOptions, 'quality'> {
  width?: number;
  quality?: number;
  height?: number;
  mimeType?: string;
}

const DEFAULT_RESIZE_PARAMS = {
  unsharpAmount: 150,
  unsharpRadius: 1,
  unsharpThreshold: 1,
};

export const resize = (
  file: CustomFile,
  options?: Nil<ResizeOptions>
): Promise<CustomFile> => {
  const { height, width, quality, mimeType, ...resizeOptions } = options || {};
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  const image = new Image();
  image.src = URL.createObjectURL(file);
  return new Promise((resolve, reject) => {
    image.onload = () => {
      canvas.width = width ?? 200;
      canvas.height = height ?? 200;
      const pica = Pica();
      pica
        .resize(image, canvas, merge(resizeOptions, DEFAULT_RESIZE_PARAMS))
        .then((result) =>
          pica.toBlob(result, mimeType || 'image/jpeg', quality ?? 0.9)
        )
        .then((resizedFile) => resolve(resizedFile as CustomFile))
        .catch((error) => reject(error));
    };
  });
};
