/* This is generated code, don't alter */
enum IfcFanTypeEnum {
  CENTRIFUGALFORWARDCURVED = 0,
  CENTRIFUGALRADIAL = 1,
  CENTRIFUGALBACKWARDINCLINEDCURVED = 2,
  CENTRIFUGALAIRFOIL = 3,
  TUBEAXIAL = 4,
  VANEAXIAL = 5,
  PROPELLORAXIAL = 6,
  USERDEFINED = 7,
  NOTDEFINED = 8,
}

const IfcFanTypeEnumCount = 9

export { IfcFanTypeEnum, IfcFanTypeEnumCount }

/* This is generated code, don't alter */
import MinimalPerfectHash from '../../indexing/minimal_perfect_hash'

let gMapIfcFanTypeEnum =
  new Int32Array( [13,1,12] )

let prefixSumAddressIfcFanTypeEnum =
  new Uint32Array( [0,35,46,62,75,86,98,118,144,163] )

let slotMapIfcFanTypeEnum =
  new Int32Array( [2,4,6,7,5,8,3,0,1] )

let encodedDataIfcFanTypeEnum =
  (new TextEncoder()).encode( ".CENTRIFUGALBACKWARDINCLINEDCURVED..TUBEAXIAL..PROPELLORAXIAL..USERDEFINED..VANEAXIAL..NOTDEFINED..CENTRIFUGALAIRFOIL..CENTRIFUGALFORWARDCURVED..CENTRIFUGALRADIAL." )

let IfcFanTypeEnumSearch =
  new MinimalPerfectHash< IfcFanTypeEnum >( gMapIfcFanTypeEnum, prefixSumAddressIfcFanTypeEnum, slotMapIfcFanTypeEnum, encodedDataIfcFanTypeEnum )

export { IfcFanTypeEnumSearch }


/* This is generated cold, don't alter */
import StepEnumParser from '../../step/parsing/step_enum_parser'

const parser = StepEnumParser.Instance

export function IfcFanTypeEnumDeserializeStep(
  input: Uint8Array,
  cursor: number,
  endCursor: number ): IfcFanTypeEnum | undefined {
  return parser.extract< IfcFanTypeEnum >( IfcFanTypeEnumSearch, input, cursor, endCursor )
}
