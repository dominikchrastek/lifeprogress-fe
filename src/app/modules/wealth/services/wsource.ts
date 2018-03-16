import { Currency } from './currency';
import { MetaUnit } from '../../../services/meta';

export class WSource {
  id?: string;
  currency_id?: string;
  name: string;
  type: string;
  currencies?: Currency[];
}
