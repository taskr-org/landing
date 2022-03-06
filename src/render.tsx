import fsp from "fs/promises";
import prettier from "prettier";
import React from "react";
import Landing from "./pages/Landing";
import ReactDOMServer from "react-dom/server";

async function render() {
  const Element = (
    <React.StrictMode>
      <Landing />
    </React.StrictMode>
  );

  const elementHtml = ReactDOMServer.renderToString(Element);

  const baseHtml = await fsp.readFile("../index.html", "utf-8");

  const html = baseHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${elementHtml}</div>`
  );

  const prettyHtml = prettier.format(html, { parser: "html" });

  await fsp.writeFile("static.html", prettyHtml);

  console.log(`[i] render success`);
}

render();
