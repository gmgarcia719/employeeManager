import { Address } from './address';

export class Employee {

  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public address: Address
  ) { }
}
