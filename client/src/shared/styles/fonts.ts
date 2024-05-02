import localFont from 'next/font/local';

const Inter = localFont({
  src: '../../../public/fonts/Inter-VariableFont_slnt,wght.ttf',
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
});

const Lora = localFont({
  src: '../../../public/fonts/Lora-VariableFont_wght.ttf',
  variable: '--font-lora',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'serif'],
});

const Esti = localFont({
  src: '../../../public/fonts/Gteestiprodisplay_medium.otf',
  variable: '--font-lora',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'serif'],
});

const Roboto = localFont({
  src: '../../../public/fonts/Roboto.ttf',
  variable: '--font-roboto',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
});

export { Lora, Inter, Esti, Roboto };
