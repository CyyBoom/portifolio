import React from 'react';

function Header() {

    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-dark">º
                <a class="navbar-brand" id="cyy"  href="#">Cyyboom</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://github.com/cyyboom">GitHub</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/cyyboom">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="Contato#Contato">Contato</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
                
    );
  }
  
export default Header;

  