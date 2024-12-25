export interface Certificate {
  id: string;
  title: string;
  organization: string;
  imagePath: string;
}

export type CertificateOrganization = 'MIT WPU' | 'Vishwakarma University' | 'Google' | 'Duke University';