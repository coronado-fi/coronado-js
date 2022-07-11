class CoronadoUnexpectedError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, CoronadoUnexpectedError.prototype);
    }
}