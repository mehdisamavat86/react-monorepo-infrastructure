import { classnames } from '@myapp/shared/utils';
import { forwardRef } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  className?: string;
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export default forwardRef<HTMLFormElement, Props>(
  ({ className, children, onSubmit, methods }, ref) => {
    return (
      <Form {...methods}>
        <form
          ref={ref}
          className={classnames('FormProvider', className)}
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </Form>
    );
  }
);
