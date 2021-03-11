import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]); 

    /**
     * Quando o parâmetro está vazio ele é executado uma única vez
     * Quando é colocado a dependência ele é executado a cada mudança dessa variável
     */
    useEffect(() => {
        fetch('https://api.github.com/users/franklaercio/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repo => {
                    return <RepositoryItem key={repo.name} repository={repo} />
                })}
            </ul>
        </section>
    );
}