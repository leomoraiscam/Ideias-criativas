const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

const ideias = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de programação",
    category: "Estudo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,inventore voluptate! Facilis dolor harum esse libero exercitationem eius, quod officiis quam pariatur sunt neque aliquam repellendus. Cumque quia eius sit!",
    url: "",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Execícios",
    category: "Saúde",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,inventore voluptate! Facilis dolor harum esse libero exercitationem eius, quod officiis quam pariatur sunt neque aliquam repellendus. Cumque quia eius sit!",
    url: "",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg ",
    title: "Meditação",
    category: "Meditação",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,inventore voluptate! Facilis dolor harum esse libero exercitationem eius, quod officiis quam pariatur sunt neque aliquam repellendus. Cumque quia eius sit!",
    url: "",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de programação",
    category: "Estudo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,inventore voluptate! Facilis dolor harum esse libero exercitationem eius, quod officiis quam pariatur sunt neque aliquam repellendus. Cumque quia eius sit!",
    url: "",
  },
];

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("index.html", { ideias });
});

server.get("/ideias", function (req, res) {
  return res.render("ideias.html");
});

server.listen("3333");
