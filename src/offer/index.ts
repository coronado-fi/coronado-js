import Triple from "../triple";

/**
 * Offer objects represent offers from brands and retaliers linked to a payment
 * provider like a debit or credit card.  The offer is redeemed by the consumer
 * when the linked payment card is used at a point-of-sale.  Offer instances
 * connect on-line advertising campaings with concrete purchases.
 *
 * TODO: These objects must be implemented before Offer because some of the
 * attributes are of these classes:
 * 
 * 1. MerchantCategoryCode
 * 2. Merchant
 */
class Offer extends Triple {
    requiredAttributes = [
        'objID',
        'activationRequired',
        'currencyCode',
        'effectiveDate',
        'expirationDate',
        'externalID',
        'headline',
        'isActivated',
        'minimumSpend',
        'mode',
        'rewardType',
        'type',
    ]
}