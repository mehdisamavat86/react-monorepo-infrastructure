import { SubscriptionPlan } from '@myapp/shared/definition';

interface Metadata {
  description: string;
  enable: boolean;
  text: string;
}

type Key = 'include' | 'feature';

export function usePlanMetadata(plan?: SubscriptionPlan, key?: Key) {
  const findedMetadata = Object.entries(plan?.metadata || {}).filter((i) =>
    i[0].includes(key || '')
  );
  const metadata: Metadata[] = findedMetadata.map((i) => {
    return JSON.parse(i[1]);
  });
  // TODO use lodash
  const sortedMatadata = metadata.sort((a, b) => {
    if (a.enable && !b.enable) {
      return -1;
    }
    if (b.enable && !a.enable) {
      return 1;
    }
    return 0;
  });

  return sortedMatadata;
}
