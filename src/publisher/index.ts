import Triple from "../triple"

/**
 * Publisher objects are used for managing portfolios of publishers.  Partners
 * who manage card programs for multiple publishers may wish to organize them
 * into portfolios.  Portfolios allow offer exclusions which may be applied
 * across multiple publishers without having to add individual publishers to
 * an offer exclusion.
 */
class Publisher extends Triple {
    SERVICE_PATH : string = 'partner/publishers'

    requiredAttributes = [ 'objID', 'assumedName', 'address', 'createdAt', 'updatedAt', ]

    constructor() {
        super({})
    }

    /**
     * Create a new Publisher instance using the spec
     */
    create() {
    }
}

export default Publisher
