import { Inter, Lusitana, Poppins, Shadows_Into_Light_Two, New_Rocker } from 'next/font/google';

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
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
  });
  
  export const shadowsIntoLightTwo = Shadows_Into_Light_Two({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-shadows',
  });

  export const newRocker = New_Rocker({  
    weight: ['400'], // New Rocker biasanya hanya memiliki satu bobot  
    subsets: ['latin'],  
    display: 'swap',  
    variable: '--font-new-rocker', // Tambahkan variable untuk CSS custom property  
});  
