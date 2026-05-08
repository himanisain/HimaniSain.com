interface SiteConfig {
  /** Framer project publish URL */
  framerUrl: string;
  /** Production domain — no trailing slash */
  domain: string;
  /** Site name appended to every page title: "Page | {name}" */
  name: string;
}

const siteConfig: SiteConfig = {
  framerUrl: "https://golden-position-230368.framer.app",
  domain: "https://himanisain.com",
  name: "Himani Sain",
};

export default siteConfig;
