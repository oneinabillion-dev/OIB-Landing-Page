declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        className?: string;
        'data-aos'?: string;
        'data-aos-easing'?: string;
        'data-aos-delay'?: string;
        'data-aos-duration'?: string;
      };
    }
  }
}

export {};