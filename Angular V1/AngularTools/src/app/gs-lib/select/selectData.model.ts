export interface selectData {
  parent: option,
  children: Array<option>
}

export interface option{
  value: string;
  text: string;
  checked?:boolean;
  search?:boolean;
}
