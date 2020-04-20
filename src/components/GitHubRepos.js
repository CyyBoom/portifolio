import React, { useState, useEffect } from 'react';

function GitHubRepos() {
    const [repositories, setRepositories] = useState ([]);

    useEffect(async () => {
        const response = await fetch("https://api.github.com/users/cyyboom/repos");
        const data = await response.json();

        setRepositories(data);
        console.log(data);
    }, []);

    

   
    return (
        <div class="container">
            <div class="row">
                <div class="col-12"><h3 class="sobre">Repositórios GitHub</h3></div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ul className="repos">
                        {repositories.map(repo => (
                            <li key={repo.id}>
                                <span className="hexagon"></span>
                                <a href={repo.html_url}>{repo.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
            
    );
  }
  
export default GitHubRepos;

  