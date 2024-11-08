import { html } from "lit";

export const isolation = true;
export const prerender = true;

async function getBody() {
  return html`picking pairs`;
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
