class CoronadoAPIError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, CoronadoAPIError.prototype);
    }
}