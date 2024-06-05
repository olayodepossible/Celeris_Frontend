import homelogo from '../../assets/logos/home.svg';
import joblistlogo from '../../assets/logos/barchar.svg';

export const links = [
  {
    icon: homelogo,
    name: 'Dashboard',
    path: '/dashboard',
  },
  { icon: joblistlogo, name: 'Job Lists', path: '/jobList' },
  { icon: joblistlogo, name: 'About', path: '/about' },
  { icon: joblistlogo, name: 'Contact', path: '/contact' },
];

export const filterInputs = [
  {
    label: 'Product Type',
    type: 'select',
    value: ['Electronics', 'Books', 'Clothing'],
  },
  { label: 'Result Type', type: 'select', value: ['Apple', 'Samsung', 'Sony'] },
  {
    label: 'Period',
    type: 'select',
    value: ['Under $50', '$50 to $100', 'Above $100'],
  },
];

export const data = Array.from({ length: 200 }, (_, index) => ({
  name: `Name ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
  country: `Country ${index + 1}`,
}));
