export interface PublicConfig {
  overbrandLinks: Array<Link>;
  footerLinks: Array<Link>;
  headerContent: HeaderContent;
}

export class Link {
  constructor(public label: string, public href: string) {}
}

export class LinkMaker {
  static createLink(label: string, href: string): Link {
    return new Link(label, href);
  }
}

export interface HeaderContent {
  overbrandContent: string;
  overbrandLinks: Array<Link>;
  publicCustomLinks: Array<Link>;
}
