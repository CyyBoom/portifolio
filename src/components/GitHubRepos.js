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
            <ul>
            {repositories.map(repo => (
                <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
            ))}
        </ul>
      );
  }
  
export default GitHubRepos;

  