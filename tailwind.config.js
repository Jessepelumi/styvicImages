/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(./images/camera.jpg)",
        'about1': "url(./images/about1.jpg)",
        'about2': "url(./images/about2.jpg)",
        'about3': "url(./images/about3.jpg)"
      },
      fontFamily: {
        'logo': ["Courgette"],
        'body': ["Averia Serif Libre"],

      }
    },
  },
  plugins: [],
}

