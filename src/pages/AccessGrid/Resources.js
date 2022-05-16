const MAX_NUM_LINKS = 6;

const resources = [
  {
    url: "https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184",
    title: "CSS Grid vs. Flexbox",
  },
];

const placeholders = [...Array(MAX_NUM_LINKS - resources.length)].map(
  (_, i) => ({ url: "#", title: `Link ${i}` })
);
const links = [...resources, ...placeholders];

export default links;
