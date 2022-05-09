export type Field = 
    "atomicNumber" |
    "symbol" |
    "name" |
    "atomicMass" |
    "meltingPoint" |
    "boilingPoint"




export type Element = {
    [name in Field]: string | number
}