type Moment = import("moment").Moment;

interface EffectState {
  loading?: boolean;
  error?: Error;
  itemId?: ID;
}

interface caIDItemProps {
  appId: string;
  appKey: string;
}
type some = { [key: string]: any };
type timestamp = string;
type ID = string | number;

interface BaseRepository {
  id: ID;
  createAt: timestamp;
  updateAt?: timestamp;
  deleteAt?: timestamp;
}

interface AccountRole {
  id: number;
  code: string;
  name: string;
}

type OptionSelects<T = any, K = any> = {
  label: string;
  value: T;
  key?: K;
  id?: ID;
}[];
