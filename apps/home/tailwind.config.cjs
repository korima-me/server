module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: { 
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'lato-hairline': ['LatoHairline'],
      'lato-thin': ['LatoThin'],
      'lato-light': ['LatoLight'],
      'lato': ['Lato'],
      'lato-medium': ['LatoMedium'],
      'lato-semibold': ['LatoSemibold'],
      'lato-bold': ['LatoBold'],
      'lato-heavy': ['LatoHeavy'],
      'lato-black': ['LatoBlack']
    },
  colors:{
    "primary":"",
    "secondary":"",
    "tertiary":"",
    
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  }},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        'primary': '#8f00dc',
        'primary-focus': '#6b08a1',
        'primary-content': '#faffff',
        'secondary': '#dc00a5',
        'secondary-focus': '#a1087b',
        'secondary-content': '#faffff',
        'accent': '#37cdbe',
        'accent-focus': '#2ba69a',
        'accent-content': '#faffff',
        'neutral': '#6E6C7E',
        'neutral-focus': '#575268',
        'neutral-content': '#faffff',
        'base-100': '#faffff',
        'base-200': '#f2f9ff',
        'base-300': '#D9E0EE',
        'base-content': '#1E1E2E',
        'info': '#4fbff3',
        'success': '#4ff37e',
        'warning': '#f3cc30',
        'error': '#e13d53',
        '--rounded-box': '1rem',
        '--rounded-btn': '.5rem',
        '--rounded-badge': '2rem',
        '--animation-btn': '.3s',
        '--animation-input': '.3s',
        '--btn-text-case': 'uppercase',
        '--navbar-padding': '.5rem',
        '--border-btn': '1px'
      },
      dark: {
        'primary': '#8f00dc',
        'primary-focus': '#6b08a1',
        'primary-content': '#D9E0EE',
        'secondary': '#dc00a5',
        'secondary-focus': '#a1087b',
        'secondary-content': '#D9E0EE',
        'accent': '#302D41',
        'accent-focus': '#1E1E2E',
        'accent-content': '#D9E0EE',
        'neutral': '#302D41',
        'neutral-focus': '#1E1E2E',
        'neutral-content': '#D9E0EE',
        'base-100': '#161320',
        'base-200': '#1A1826',
        'base-300': '#1E1E2E',
        'base-content': '#D9E0EE',
        'info': '#4fbff3',
        'success': '#4ff37e',
        'warning': '#f3cc30',
        'error': '#e13d53',
        '--rounded-box': '1rem',
        '--rounded-btn': '99999px',
        '--rounded-badge': '2rem',
        '--animation-btn': '.3s',
        '--animation-input': '.3s',
        '--btn-text-case': 'uppercase',
        '--navbar-padding': '.5rem',
        '--border-btn': '1px'
      }
    }],
  }
}
