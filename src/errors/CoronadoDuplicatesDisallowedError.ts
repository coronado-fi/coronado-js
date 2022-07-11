class CoronadoDuplicatesDisallowedError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, CoronadoDuplicatesDisallowedError.prototype);
    }
}