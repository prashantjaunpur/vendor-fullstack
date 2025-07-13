export interface Vendor {
    id?: number | any;
    name: string;
    contact_person: string;
    email: string;
    partner_type: 'Supplier' | 'Partner';
}