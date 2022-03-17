function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-bg': '#fffffe',
        'color-text-h': '#2b2c34',
        'color-btn': '#6246ea',
        'color-bg-secondary': '#d1d1e9',
        'color-border': '#2b2c34',
        'color-tertiary': '#e45858',
      }
      
      }
     
    }

}
