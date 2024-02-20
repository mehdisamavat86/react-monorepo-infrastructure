import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/tomorrow-night.css';

declare global {
  interface Window {
    hljs: any;
  }
}

hljs.configure({
  languages: ['html', 'json'],
});

if (typeof window !== 'undefined') {
  window.hljs = hljs;
}
