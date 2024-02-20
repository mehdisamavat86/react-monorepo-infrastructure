import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

export function resetFormDefaultValues<T extends FieldValues = any>(
  form: UseFormReturn<T>,
  data?: Record<string, any>
) {
  if (!data) return;
  Object.keys(data).forEach((x) => {
    form.setValue(x as Path<T>, (data as any)[x] ?? null);
  });
}
