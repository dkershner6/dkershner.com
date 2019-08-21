import Project from "../classes/Project";
import Technology from "../classes/Technology";

import enterpriseMarketplaceProject from "./projects/EnterpriseMarketplace";
import shopifySearchEngineProject from "./projects/ShopifySearchEngine";
import codeChallengesProject from "./projects/CodeChallenges";

const projects: Project[] = [
  codeChallengesProject,
  enterpriseMarketplaceProject,
  shopifySearchEngineProject
];

const getProject = projectId => {
  const projArray = projects.filter(p => p.id === projectId);
  if (projArray !== undefined && projArray.length > 0) {
    return projArray[0];
  } else {
    return undefined;
  }
};

const getProjectsWithTechnology = (technology: Technology) => {};

export default getProject;
export { projects, getProjectsWithTechnology };