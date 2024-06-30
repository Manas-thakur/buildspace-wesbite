import { isMinusToken, transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'half-minus-1': 'calc(50% - 1px)',
        'half-minus-2': 'calc(50% - 2rem)',
        'ok': '600ms ease',
        '1': 1,
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.line': {
          position: 'absolute',
          zIndex: 2,
          left: 'calc(50% - 1px)',
          width: '2px',
          top: '50px',
          bottom: '-50px',
          backgroundColor: "white",
          // display: 'none',
        },
        // '.line::before': {
        //   position: 'absolute',
        //   display: 'block',
        //   content: '""',
        //   height: '1rem',
        //   width: '1rem',
        //   borderRadius: '50%',
        //   backgroundColor: '#000',
        // },
        '.line::after': {
          position: 'absolute',
          display: 'block',
          content: '',
          height: '1rem',
          width: '1rem',
          bottom: 0,
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: 'translate(-50%)',
        },
        // '.section':{
        //   display: 'flex',
        //   transform: 'translateX(-100%)',
        //   transition: "600ms ease",
        //   position: 'relative',
        //   zIndex: 1,
        //   margin: '50px 0',
        //   padding: '1rem',
        
        //   borderRadius: '1rem',
        //   alignitems: 'center',
        //   minHeight: '300px',
        // },

        // '.section:nth-child(odd)':{
        //   flexDirection: 'row-reverse',
        //   transform: 'translateX(100%)',
        // },
      };
      

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
