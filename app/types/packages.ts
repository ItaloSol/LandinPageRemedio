export interface Package {
  title: string;
  subtitle: string;
  discount: string;
  price: number;
  originalPrice: number;
  installments: number;
  pix: number;
  popular: boolean;
  savings: number;
  bonus: string[];
  hasMassager: boolean;
}