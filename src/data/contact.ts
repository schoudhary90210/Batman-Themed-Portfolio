export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export const contactLinks: ContactLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/schoudhary90210',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/siddhantchoudhary–',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:csiddhant12@gmail.com',
    icon: 'mail',
  },
];

export const EMAIL_ADDRESS = 'csiddhant12@gmail.com';
