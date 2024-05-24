import * as React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

export interface IMainProps {
  children: React.ReactNode;
}
export default function Main({ children }: IMainProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
