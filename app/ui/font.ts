import { Inter, Lusitana, Poppins, Shadows_Into_Light_Two } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})


  
  export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600'],
    variable: '--font-poppins',
  });
  
  export const shadowsIntoLightTwo = Shadows_Into_Light_Two({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-shadows',
  });
