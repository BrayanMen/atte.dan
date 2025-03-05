export const COLORS = {
  hex: {
    olivine: '#b4c88a',
    ebony: '#4e5648',
    lavenderWeb: '#e4e1ec',
    asparagus: '#7b9b48',
    spaceCadet: '#1e1f33',
    roseQuartz: '#a6a0a4'
  },
  hsl: {
    olivine: 'hsla(79, 36%, 66%, 1)',
    ebony: 'hsla(94, 9%, 31%, 1)'
  },
  getColor: (color) => `text-${color}`,
  getBgColor: (color) => `bg-${color}`,
  withOpacity: (color, opacity = 1) => color.replace('1)', `${opacity})`)
};