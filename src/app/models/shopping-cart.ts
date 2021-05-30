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
    priceAlteration:
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

export interface TimePeriod{
    startDate:Date,
    expieryDate:Date
}
