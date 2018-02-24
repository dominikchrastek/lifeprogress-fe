export interface MetaUnit {
  id: string;
  name: string;
}
export interface Meta {
  units: MetaUnit[];
  ws_types: MetaUnit[];
  currencies: MetaUnit[];
}
