export interface PublicConfig {
  overbrandLinks: OverbrandLinks[];
  footerLinks: FooterLinks[];
}

export interface FooterLinks {
  label: string;
  href: string;
}

export interface OverbrandLinks {
  label: string;
  href: string;
}
