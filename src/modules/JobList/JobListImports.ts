import homelogo from '../../assets/logos/home.svg';
import joblistlogo from '../../assets/logos/barchar.svg';


export const filterInputs = [
  {
    label: 'This month',
    type: 'select',
    value: ['Electronics', 'Books', 'Clothing'],
  },
  { label: 'Status', type: 'select', value: ['Apple', 'Samsung', 'Sony'] },
  {
    label: 'File Type',
    type: 'select',
    value: ['Under $50', '$50 to $100', 'Above $100'],
  },
  {
    label: 'File Name',
    placeholder: 'File Name',
    type: 'input',
    value: [],
  },
];
