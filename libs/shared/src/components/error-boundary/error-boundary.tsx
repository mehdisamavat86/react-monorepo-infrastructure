import { ErrorView } from '@myapp/shared/views/error';
import React, { ErrorInfo } from 'react';

class ErrorBoundary<T = any> extends React.Component<
  { children: React.ReactNode },
  T
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {} as T;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
    this.setState({ error } as any);
  }

  render(): React.ReactNode {
    if ((this.state as any).error) {
      return (
        <ErrorView
          title="Something went wrong!"
          description={(this.state as any).error.message}
          onRedirect={() => this.setState({ error: null } as any)}
        />
      );
    }

    return (this.props as any).children;
  }
}

export default ErrorBoundary;
