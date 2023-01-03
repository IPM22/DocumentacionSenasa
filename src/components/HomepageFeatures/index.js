import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Facil de usar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Acceda al menu documentacion, donde luego podra navegar en el lado
        izquierdo entre las diferentes documentaciones y sus secciones
      </>
    ),
  },
  {
    title: "Diversas herramientas",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Podra notar que las documentaciones poseen diversas herramientas que le
        ayudaran a tener una mejor esperiencia, como : contenedor de codigo,
        copiado en un click, guia de contenido, entre otros.
      </>
    ),
  },
  {
    title: "Modos de visualizacion",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Cambia el modo de visualizacion a tu gusto, entre ligth o dark, en el
        boton superior derecho
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
