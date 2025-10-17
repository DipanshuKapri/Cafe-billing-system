declare module 'lucide-react';

// minimal JSX fallback for libraries without types
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// allow relative utils import to be found by the checker
declare module '../utils';
