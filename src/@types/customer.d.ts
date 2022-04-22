interface Customer extends BaseRepository {
  name: string;
  avatar: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  status: 'enabled' | 'disabled';
  emailConfirm?: boolean;
  dob?: Moment | string;
  numberOfOders?: number;
}

interface CustomerContact extends BaseRepository {
  name?: string;
  phoneNumber?: string;
  addressCode?: 'company' | 'home' | string;
  addressName: string;
  address: string;
  userID: string;
  lat?: number;
  long?: number;
}

interface CustomerDetail extends Customer {
  contacts: CustomerContact;
  orderNumber?: number;
}
