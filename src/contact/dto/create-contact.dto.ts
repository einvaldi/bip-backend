export class CreateContactDto {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
}
