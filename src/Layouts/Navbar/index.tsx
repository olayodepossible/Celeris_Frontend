import * as React from 'react';
import Navbar from './Navbar';

export interface IMainProps {
  children: React.ReactNode;
}
export default function Main({ children }: IMainProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
