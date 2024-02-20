export interface Customer {
  name: string;
  email: string;
  address: {
    country: string;
    state?: string;
    city: string;
    line1: string;
    line2?: string;
    postalCode: string;
  };
}
