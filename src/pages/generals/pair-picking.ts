async function getBody() {
  return ` <p>picking pairs</p> `;
}

async function getFrontmatter() {
  return {
    title: "Evaluating Relative Strength of Pairs",
    collection: "generals",
    author: "Luke Schierer",
    layout: "generals",
  };
}

export { getFrontmatter, getBody };
