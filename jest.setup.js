import '@testing-library/jest-dom';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'text-encoding';
configure({ adapter: new Adapter() });

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});