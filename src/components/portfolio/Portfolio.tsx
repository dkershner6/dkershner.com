import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import PortfolioDesign from './PortfolioDesign/PortfolioDesign';
import CodeChallenges from './codeChallenges/CodeChallenges';
import getProject from '../../data/Projects';

interface IPortfolio {
    projectName: string;
}

const Portfolio = (props: IPortfolio) => {
    const project = getProject(props.projectName || 'enterpriseMarketplace');
    return (
        <>
            <PortfolioHeader project={project} menu={false} />
            {project.id === 'codeChallenges' ? <CodeChallenges /> : <PortfolioDesign project={project} menu={false} />}
        </>
    );
};

export default Portfolio;