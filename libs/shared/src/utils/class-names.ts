export function classnames(...classes: (undefined | string | Record<string, any>)[]) {
  const result: string[] = [];
  classes.filter(Boolean).forEach((cls: any) => {
    if (typeof cls === 'string') result.push(cls);
    else result.push(...Object.keys(cls).filter((k) => !!cls[k as any]));
  });

  return result.join(' ');
}
