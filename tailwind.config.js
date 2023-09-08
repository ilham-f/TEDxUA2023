/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
        fontFamily: {
            canopee: ["Canopee", "display"],
            lazymonday: ["LazyMonday", "script"],
            pastel: ["Pastel", "script"],
            lastik: ["Lastik", "serif"]
        },
        dropShadow: {
            'custom1' : '0 4px 3px rgba(0, 0, 0, 0.69)',
            'custom2' : '0 4px 3px rgba(0, 0, 0, 0.24)'
        },
        fontSize: {
            custom1: ['100px', '1'],
            custom2: ['125px', '1'],
            custom3: ['43px', '1.1'],
            custom4: ['55px', '1.2'],
            custom5: ['125px', '0.9'],
            custom6: ['14px', '1.2'],
            custom7: ['10px', '1.1'],
            custom8: ['35px', '1.1'],
            custom9: ['30px', '1.1'],
            custom10: ['20px', '1.05'],
            custom11: ['25px', '1.05'],
            custom12: ['15px', '1.05'],
         }
    },
    screens: {
        xs: '281px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1430px'
      },
  },
  plugins: [],
}

