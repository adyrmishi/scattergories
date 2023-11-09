module.exports = {
    plugins: {
      tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
    theme: {
        colors: {
            'my-blue': '#183067',
            'coral': '#db4f4f'
        }
    }
  };