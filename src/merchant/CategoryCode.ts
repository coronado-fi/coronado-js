import Triple from "../triple";

/**
 * A Merchant Category Code, or MCC, is a 4-digit number that indicates a line
 * of business and the types of goods and services that the business provides
 * to their customers.
 *
 * This class is often imported as:
 *
 * ```python
 * from coronado.offers import MerchantCategoryCode as MCC
 * ```
 *
 * <a href='https://www.merchantmaverick.com/merchant-category-code-mcc/' target='_blank'>Merchant Category Codes (MCC):</a>
 * All You Need to Know from *Maverick Merchant*.
 */
class MerchantCategoryCode extends Triple {
    requiredAttributes = [ 'code', 'description', ]

}

export default MerchantCategoryCode
