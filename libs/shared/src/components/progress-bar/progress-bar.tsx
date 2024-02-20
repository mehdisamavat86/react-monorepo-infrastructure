import NProgress from 'nprogress';
import { useEffect } from 'react';
import StyledProgressBar from './styles';

type PushStateInput = [
  data: any,
  unused: string,
  url?: string | URL | null | undefined
];

export default function ProgressBar() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const targetUrl = target.href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl && !targetUrl.startsWith('http')) {
        NProgress.start();
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll('a[href]');

      anchorElements.forEach((anchor) =>
        anchor.addEventListener('click', handleAnchorClick)
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      },
    });
  });

  return <StyledProgressBar />;
}
