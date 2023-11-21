import React from 'react';
import '@/styles/globals.css';
import Navigation from './Navbar.jsx'; // Assuming you have a Navigation component
import WriteBlogPage from './WriteBlogPage'; // Assuming you have a WriteBlogPage component

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>NewsX</title>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
