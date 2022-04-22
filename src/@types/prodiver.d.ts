interface Provider extends BaseRepository {
  name: string;
  address: string;
  avatar: string;
  lat?: number;
  long?: number;
  contactEmail?: string;
  contactPhoneNumber?: string;
  employers?: Employer[];
  status: 'enabled' | 'disabled';
}

type ProviderEmployer = Pick<
  Provider,
  'id' | 'name' | 'avatar' | 'contactEmail' | 'contactPhoneNumber'
>;
interface Employer extends BaseRepository {
  userId: string;
  role: 'OWNER' | 'SALE';
  provider: ProviderEmployer;
}
