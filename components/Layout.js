import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />
      </head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and Musical events",
  keywords: "music, dj, edm, events",
};
