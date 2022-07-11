import {camelToSnakeCase} from "../common";
import Triple from "../triple";

class Address extends Triple implements AddressType {
    countryCode: string = '';
    line1: string = '';
    line2?: string;
    locality: string = '';
    latitude: number = 0;
    longitude: number = 0;
    postalCode: string = '';
    province: string = '';

    includedProperties = ['line1', 'line2', 'countryCode', 'locality', 'latitude', 'longitude', 'postalCode', 'province', 'completeAddress']

    constructor(obj : any) {
        super(obj)
    }

    public completeAddress() : string {
        return [
            `${this.line1} ${this.line2}`.trim(),
            `${this.locality}, ${this.province}, ${this.postalCode}`,
        ].join('\n')
    }

    public toJSON() : string {
        super.toJSON()
        return JSON.stringify(Object.assign({}, this as AddressType), this.includedProperties)
    }

    public toSnakeCaseJSON() : string {
        const onlyProperties : any = JSON.parse(JSON.stringify(Object.assign({}, this as AddressType), this.includedProperties))

        const snakeCased = Object.keys(onlyProperties).map((key : string) => {
            const snakeCaseKey : string = camelToSnakeCase(key)

            return {[snakeCaseKey]: onlyProperties[key]}
        }).reduce((a, b) => Object.assign({}, a, b))

        return JSON.stringify(snakeCased)
    }

    public toString = () : string => {
        return `${this.line1}\n${this.line2}\n${this.locality}, ${this.province} ${this.postalCode} ${this.countryCode}`
    }
}

export default Address
