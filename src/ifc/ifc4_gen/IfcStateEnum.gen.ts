/* This is generated code, don't alter */
enum IfcStateEnum {
  READWRITE = 0,
  READONLY = 1,
  LOCKED = 2,
  READWRITELOCKED = 3,
  READONLYLOCKED = 4,
}

const IfcStateEnumCount = 5

export { IfcStateEnum, IfcStateEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcStateEnum =
  new Int32Array( [23] )

let prefixSumAddressIfcStateEnum =
  new Uint32Array( [0,8,25,36,46,62] )

let slotMapIfcStateEnum =
  new Int32Array( [2,3,0,1,4] )

let encodedDataIfcStateEnum =
  (new TextEncoder()).encode( ".LOCKED..READWRITELOCKED..READWRITE..READONLY..READONLYLOCKED." )

let IfcStateEnumSearch =
  new MinimalPerfectHash< IfcStateEnum >( gMapIfcStateEnum, prefixSumAddressIfcStateEnum, slotMapIfcStateEnum, encodedDataIfcStateEnum )

export { IfcStateEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcStateEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcStateEnum | undefined {
  return parser.extract< IfcStateEnum >( IfcStateEnumSearch, input, cursor, endCursor )
}
