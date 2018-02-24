import { MetaUnit } from '../../../services/meta';

export class WSourceResponse<T> {
  data: T;
}

export class WSource {
  id?: string;
  currency_id?: string;
  name: string;
  type: string;
  currencies?: object;
}
