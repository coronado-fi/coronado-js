import Address from '../'

describe("test Address object", () => {
    it("toString should properly output based on given inputs", () => {
        let address = new Address({
            line1: '123 Elm St',
            line2: 'Ste 987',
            locality: 'Beverly Hills',
        })
        address.line1 = "123 Elm St"
        address.line2 = "Ste 987"
        address.locality = "Beverly Hills"
        address.province = "California"
        address.postalCode = "90210"
        address.countryCode = "USA"

        expect(address.toString()).toEqual("123 Elm St\nSte 987\nBeverly Hills, California 90210 USA")
    })

    it("completeAddress should show a human readable representation of address", () => {
        let address = new Address({
            line1: '123 Elm St',
            line2: 'Ste 987',
            locality: 'Beverly Hills',
        })
        address.line1 = "123 Elm St"
        address.line2 = "Ste 987"
        address.locality = "Beverly Hills"
        address.province = "California"
        address.postalCode = "90210"
        address.countryCode = "USA"

        console.dir(address.toJSON())
        expect(address.completeAddress()).toEqual("123 Elm St Ste 987\nBeverly Hills, California, 90210")
    })

    it("toSnakeCaseJSON prints out snake cased JSON representation of object", () => {
        let address = new Address({
            line1: '123 Elm St',
            line2: 'Ste 987',
            locality: 'Beverly Hills',
        })
        address.line1 = "123 Elm St"
        address.line2 = "Ste 987"
        address.locality = "Beverly Hills"
        address.province = "California"
        address.postalCode = "90210"
        address.countryCode = "USA"

        const jsonAddress : string = address.toSnakeCaseJSON()
        const snakeAddress = JSON.parse(jsonAddress)
        console.dir(snakeAddress)

        expect(Object.prototype.hasOwnProperty.call(snakeAddress, 'postal_code')).toBeTruthy()
        expect(Object.prototype.hasOwnProperty.call(snakeAddress, 'country_code')).toBeTruthy()
    })
})