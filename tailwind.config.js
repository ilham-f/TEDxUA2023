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
            custom1: ['75px', '1.10'],
            custom2: ['150px', '0.83'],
            custom3: ['43px', '1.1']
         }
    },
  },
  plugins: [],
}

