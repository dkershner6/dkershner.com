import technologies from "../data/Technologies";
import Technology, { internalLink as techInternalLink } from "./Technology";

export default class ProjectAttribute {
  name: string;
  value: string;
  link?: string;
}

export const createAttributeFromTechnology = (technologyId: string) => {
  const tempTechnologies = technologies.filter(
    technology => technology.id === technologyId
  );
  if (tempTechnologies.length > 0) {
    const technology = tempTechnologies[0];
    let attribute = new ProjectAttribute();
    if (technology.type === "deployment") {
      attribute.name = "Deployment";
    } else {
      attribute.name = "Technology";
    }

    attribute.value = technology.label;
    attribute.link = techInternalLink(technology);
    return attribute;
  } else {
    console.warn(technologyId + " undefined?");
    return undefined;
  }
};

export const getTechnologiesFromAttributes = (
  attributes: ProjectAttribute[]
): Technology[] => {
  let returnTechnologies = [];

  attributes.forEach(attribute => {
    let tempTechs = technologies.filter(
      technology => technology.label === attribute.value
    );
    if (tempTechs.length > 0) {
      returnTechnologies.push(...tempTechs);
    }
  });

  return returnTechnologies;
};
