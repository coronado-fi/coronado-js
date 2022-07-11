class CoronadoMalformedObjectError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, CoronadoMalformedObjectError.prototype);
    }
}