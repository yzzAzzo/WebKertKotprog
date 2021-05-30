export interface ShoppingCart{
    cartItem: CartItem[],
    cartTotalPrice: CartPrice[],
    contactMedium: ContactMedium[],
    href:String,
    id:String,
    relatedParty: RelatedParty[],
    validFor: Number
}

export interface CartItem{
    itemTotalPrice: CartPrice[],
    action: "add" | "modify" | "delete" | "noChange",
    cartItem: CartItem,
    cartItemRelationShip: CartItemRelationShip[],
    id: String,
    itemPrice: CartPrice[],
    itemTerm: CartTerm[],
    note: Note[],
    product: ProductRefValue,
    productOffering: ProductOfferingRef,
    quantity:Number
    status:CartItemStatusType
}

export interface CartItemRelationship{
    cartItem: CartItemRef[],
    id:String,
    relationshipType:String,

}

export interface CartPrice{
    description: String
    name:String
    price:Number
    priceAlteration:PriceAlteration[]
}

export interface ContactMedium{
    description:String,
    name:String,
    price:Price,
    priceAlteration:PriceAlteration[],
    priceType:String,
    productOfferingPrice:ProductOfferingPriceRef,
    recurringChargePeriod:String,
    unitOfMeasure:String
}

export interface CartTerm{
    description:String,
    duration:Quantity,
    name:String
}
export interface Characteristic{
    name:String,
    value:any,
    valueType:String
}

export interface RelatedParty{
    characteristic:MediumCharacteristic,
    mediumType:String,
    preferred:boolean,
    validFor:TimePeriod
}

export interface MediumCharacteristic{
    city:String,
    contactType:String,
    country:String,
    emailAddress:String,
    faxNumber:String,
    phoneNumber:String,
    postCode:String,
    socialNetworkId:String,
    stateOrProvince:String,
    street1:String,
    street2:String 
}

export interface CartItemRelationShip{
    cartItem:CartItemRef[],
    id:String,
    relationshipType:String   
}

export interface CartPrice{
    description:String,
    name:String,
    price:Number,
    priceAlteration:PriceAlteration[],
    priceType:String,
    productOfferingPrice:ProductOfferingPriceRef,
    recurringChargePeriod:String,
    unitOfMeasure:String
}

export interface CartTerm{
    name:String,
    value:any,
    valueType:String
}

export interface ContactMedium{
    characteristic:MediumCharacteristic,
    mediumType:String,
    preferred:boolean,
    validFor:TimePeriod
}

export interface MediumCharacteristic{
    city:String,
    contactType:String,
    country:String,
    emailAddress:String,
    faxNumber:String,
    phoneNumber:String,
    postCode:String,
    socialNetworkId:String,
    stateOrProvince:String,
    street1:String,
    street2:String
}

export interface Money{
    unit:String,
    value:Number
}
export interface Note{
    author:String,
    date:Date,
    id:String,
    text:String
}
export interface Price{
    dutyFreeAmount:Money,
    percentage:Number,
    taxIncludedAmount:Money,
    taxRate:Number
}

export interface PriceAlteration{
    applicationDuration:Number,
    description:String,
    name:String,
    price:Price,
    priceType:String,
    priority:Number,
    productOfferingPrice:ProductOfferingPriceRef,
    recurringChargePeriod:String,
    unitOfMeasure:String
}
export interface ProductPrice{
    billingAccount:BillingAccountRef,
    description:String,
    name:String,
    price:Price,
    priceType:String,
    productOfferingPrice:ProductOfferingPriceRef,
    productPriceAlteration:PriceAlteration[],
    recurringChargePeriod:String,
    unitOfMeasure:String
}

export interface ProductRefOrValue{
    href:String,
    id:String,
    name:String,
    description:String,
    isBundle:boolean,
    isCustomerVisible:boolean,
    orderDate:Date,
    productSerialNumber:String,
    startDate:Date,
    terminationDate:Date,
    agreement:AgreementItemRef[],
    billingAccount:BillingAccountRef,
    place:RelatedPlaceRefOrValue[],
    product:ProductRefOrValue[],
    productCharacteristic:Characteristic[],
    productOffering:ProductOfferingRef,
    productOrderItem:RelatedProductOrderItem[],
    productPrice:ProductPrice[],
    productRelationship:ProductRelationship[],
    productSpecification:ProductSpecificationRef[],
    productTerm:ProductTerm[],
    realizingResource:ResourceRef[],
    realizingService:ServiceRef[],
    relatedParty:RelatedParty[],
    status:ProductStatusType
}

export interface ProductRelationship{
    product:ProductRefOrValue,
    relationshipType:String,
}

export interface ProductTerm{
    description:String,
    duration:Quantity,
    name:String,
    validFor:Date,

}

export interface Quantity{
    amount:Number,
    units:String
}

export interface RelatedParty{
    href:String,
    id:String,
    name:String,
    role:String,
}

export interface RelatedPlaceRefOrValue{
    href:String,
    id:String,
    name:String,
    role:String
}

export interface RelatedProductOrderItem{
    orderItemAction:String,
    orderItemId:String,
    productOrderHref:String,
    productOrderId:String,
    role:String,
}

export interface TargetProductSchema{

}

export interface AgreementItemRef{
    href:String,
    id:String,
    name:String,
    agreementItemId:String
}

export interface BillingAccountRef{
    href:String,
    id:String,
    name:String
}

export interface CartItemRef{
    id:String
}

export interface ProductOfferingPriceRef{
    href:String,
    id:String,
    name:String
}

export interface ProductOffering{
    href:String,
    id:String,
    name:String
}

export interface ProductSpecificationRef{
    href:String,
    id:String,
    name:String,
    targetProductSchema:TargetProductSchema,
    version:String
}

export interface ResourceRef{
    href:String,
    id:String,
    name:String,
    value:String
}

export interface ServiceRef{
    href:String,
    id:String,
    name:String
}
export interface ProductStatusType{
    href:String,
    id:String,
    name:String
}

export interface ProductOfferingRef{
    href:String,
    id:String,
    name:String
}

export interface ProductRefValue{
    href:String,
    id:String,
    name:String
}

export interface CartItemStatusType{
    href:String,
    id:String,
    name:String
}

export interface TimePeriod{
    startDate:Date,
    expieryDate:Date
}
