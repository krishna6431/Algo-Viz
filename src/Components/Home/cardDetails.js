import sort from "./images/sorting.png";
import searching from "./images/searching.jpg";

export function getDetails() {
  return [
    {
      id: 1,
      title: "Sorting",
      description: "Compare different sorting algorithms",
      route: "/sort",
      img: sort,
    },
    {
      id: 2,
      title: "Searching",
      description: "Visualize Searching Algorithms",
      route: "/searching",
      img: searching,
    },
  ];
}
