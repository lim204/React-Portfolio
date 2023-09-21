import React from 'react';

export default function Footer() {

  // <footer class="p-3 mb-2 bg-body-secondary">

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]
  // </footer>

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
      )}
    </footer>
  );
}