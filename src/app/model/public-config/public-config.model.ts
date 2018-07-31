export interface PublicConfig {
  overbrandLinks: Array<Link>;
  footerLinks: Array<Link>;
  headerContent: HeaderContent;
  isiContent: IsiContent;
}

export interface Link {
  label: string;
  href: string;
}

export interface HeaderContent {
  overbrandContent: string;
  overbrandLinks: Array<Link>;
  publicCustomLinks: Array<Link>;
}

export interface IsiContent {
  isiHeaderContent: string;
  isiPageContent: string;
  isiDisClaimer: string;
}

export class LinkMaker {

  static createLink(label: string, href: string): Link {
    return {
      label: label,
      href: href
    };
  }
}
