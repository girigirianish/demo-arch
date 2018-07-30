export interface PublicConfig {
  overbrandLinks: OverbrandLinks[];
  footerLinks: FooterLinks[];
  headerContent: HeaderContent;
}

export interface FooterLinks {
  label: string;
  href: string;
}

export interface OverbrandLinks {
  label: string;
  href: string;
}

export interface HeaderLinks {
  label: string;
  href: string;
}

export interface HeaderContent {
  overbrandContent: string;
  overbrandLinks: OverbrandLinks[];
  publicCustomLinks: HeaderLinks[];
}
