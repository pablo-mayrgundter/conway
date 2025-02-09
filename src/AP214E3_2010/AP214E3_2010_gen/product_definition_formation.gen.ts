
import { identifier } from "./index"
import { text } from "./index"
import { product } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class product_definition_formation extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.PRODUCT_DEFINITION_FORMATION
  }
  private id_? : string
  private description_? : string | null
  private of_product_? : product

  public get id() : string {
    if ( this.id_ === void 0 ) {
      this.id_ = this.extractString( 0, false )
    }

    return this.id_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get of_product() : product {
    if ( this.of_product_ === void 0 ) {
      this.of_product_ = this.extractElement( 2, false, product )
    }

    return this.of_product_ as product
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.PRODUCT_DEFINITION_FORMATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.PRODUCT_DEFINITION_FORMATION
}
