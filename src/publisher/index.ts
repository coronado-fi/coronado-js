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
     *
     * TODO create a PublisherType for spec to resolve to
     */
    create(spec : any) {
    }

    /**
     * Return a list of publishers.
     *
     * TODO write code which hits the Publisher endpoint
     */
    list() {
    }

    /**
     * Return the publisher associated with objID.
     *
     * TODO lookup publisher by ID
     */
    byID(objID : string) {
    }

    /**
     * Update the receiver with a new assumed name or update its address.
     *
     * TODO object id with contents of spec
     */
    updateWith(objID : string, spec : any) {
    }

}

export default Publisher
