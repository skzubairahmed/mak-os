import localFont from 'next/font/local';
import "./globals.css";

import Provider from './components/provider';

const fontInter = localFont({src:'../public/fonts/Inter.ttf', variable:'--font-inter'});
const fontGeist = localFont({src:'../public/fonts/Geist.ttf', variable:'--font-geist'});
const fontSpaceGrotesk = localFont({src:'../public/fonts/SpaceGrotesk.ttf', variable:'--font-spacegrotesk'});
const fontOswald = localFont({src:'../public/fonts/Oswald.ttf', variable:'--font-oswald'});

export const metadata = {
  title: "MakOS",
  description: "My submission for the WebOS sidequest of Flavortown Program",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${fontSpaceGrotesk.variable} ${fontGeist.variable} ${fontInter.variable} ${fontOswald.variable}`} lang="en">
      <body
        className='antialiased'
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
