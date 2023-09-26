import React, { useEffect }from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function NavTabs(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <NavTabs>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </NavTabs>
  );
}


export default NavTabs;