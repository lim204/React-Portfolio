import React from 'react';

export default function Footer() {
  return (
    <footer class="p-3 mb-2 bg-body-secondary">

      <section > 
        <ul class="nav justify-content-center">
          <li class="nav item">
            <p> Github </p>
            <a class="nav-link active" href="https://github.com/lim204">
              {" "}
              <img src="#" class="card-img" alt=".." />
            </a>
          </li>

          <li class="nav item">
            <p> linkedIn </p>
            <a class="nav-link active" href="https://www.linkedin.com/in/laura-mendez-66185b244/">
              <img src="#" class="card-img" alt=".." />
            </a>
          </li>

          <li class="nav item">
            <p>Instagram</p>
            {/* <a class="nav-link active" aria-current="page" href="#"> */}
              {/* <img src="#" class="card-img" alt=".." />
            </a> */}

          </li>

        </ul>
      </section>
    </footer>
  );
}