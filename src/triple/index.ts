abstract class Triple {

    servicePath?: string = ''
    serviceURL: string = ''

    constructor(obj: any) {
    }

    protected toJSON() : string {
        // console.log(`type: ${this.constructor.name}`)
        return "{}"
    }
}

export default Triple
