import { EXPORT_SIZE_LIMIT } from '../constant';
import { ExportSizeLimit } from '../types';

export function useExportSizeLimit(
  total?: number,
  top?: number
): ExportSizeLimit {
  const systemLimitReached = (total || 0) >= EXPORT_SIZE_LIMIT;
  const normalRowsLimit =
    (systemLimitReached ? EXPORT_SIZE_LIMIT : total) - (top ?? 0);
  const totalRowsLimit = systemLimitReached ? EXPORT_SIZE_LIMIT : total;
  return {
    systemLimitReached,
    normalRowsLimit,
    totalRowsLimit,
    systemLimit: EXPORT_SIZE_LIMIT,
  };
}
