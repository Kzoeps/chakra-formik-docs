import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Quickly bind formik with chakra forms. No more setting up MyAppInput again and again
      </>
    ),
  },
  {
    title: 'Chakra UI',
	  link: 'https://chakra-ui.com/',
    description: (
      <>
		  Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications
      </>
    ),
  },
  {
    title: 'Formik',
	  link: 'https://formik.org/',
    description: (
      <>
		  Build forms in React, without the tears.
	  </>
    ),
  },
];

function Feature({link = undefined, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
		  {link ? <Link target="_blank" to={link} className={styles.featureTitle} rel="noreferrer">{title}</Link> : <span className={styles.featureTitle}>{title}</span>}
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
