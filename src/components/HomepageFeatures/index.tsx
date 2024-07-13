import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易于使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus 从头开始设计，易于安装和使用，让你的网站快速启动并运行。
      </>
    ),
  },
  {
    title: '专注于重要的事情',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 让你专注于文档，而我们会处理杂务。请继续将你的文档移到<code>docs</code>目录中。
      </>
    ),
  },
  {
    title: '由 React 驱动',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过重用 React 扩展或自定义你的网站布局。Docusaurus 可以在重用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
