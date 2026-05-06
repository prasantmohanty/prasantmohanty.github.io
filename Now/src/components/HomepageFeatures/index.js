import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: 'Hi! I am  Prasanta',
	Img: require("@site/static/img/MyImage.jpg").default,
    description: (
      <>
	  <p>
	  Driven by the belief that vision combined with execution creates impact, I bring over 18 years of experience in technology strategy and engineering leadership, specializing in the design, build, and operation of secure, scalable, and highly available multi‑platform systems. My expertise spans solution architecture that addresses both current business needs and future growth.
	  </p>
	  <p>
	I am a results-oriented and creative leader, proven in high‑pressure environments and cross‑functional teams. With a strong understanding of both business objectives and engineering excellence, I consistently deliver end‑to‑end solutions that create measurable value.
	</p>
<p>
	I thrive in roles that involve leading with purpose, navigating constraints, and solving complex challenges. Known for collaboration, ownership, and going the extra mile, I focus on building teams and work environments that drive performance, engagement, and shared success.
	</p>
<p>
	If you’d like to know more, feel free to connect with me on LinkedIn or reach out at mohanty.prasant@gmail.com.
	</p>
      </>
    ),
  },

];

function Feature({Img, title, description}) {
   return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
	  <img src={Img}  style={{ width: "220px", height: "220px", borderRadius: "9999px", objectFit: "cover" }} />
       </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
