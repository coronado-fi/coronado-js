interface AddressType {
    completeAddress(): string;
    countryCode?: string;
    line1?: string;
    line2?: string;
    locality?: string;
    latitude?: number;
    longitude?: number;
    postalCode?: string;
    province?: string;
}