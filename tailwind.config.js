/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        fontFamily: {
            canopee: ["Canopee", "display"],
            lazymonday: ["LazyMonday", "script"],
            pastel: ["Pastel", "script"],
            lastik: ["Lastik", "serif"]
        }
    },
  },
  plugins: [],
}

