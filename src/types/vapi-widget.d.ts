// Allow the custom VAPI web component in TSX
declare namespace JSX {
  interface IntrinsicElements {
    'vapi-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, any>;
  }
}
