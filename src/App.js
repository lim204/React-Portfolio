import React, { useState } from 'react';
import NavTabs from './components/NavTab';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <Header/> */}
       <div>
        <title/> Laura Mendez
       </div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
   
  );
}
