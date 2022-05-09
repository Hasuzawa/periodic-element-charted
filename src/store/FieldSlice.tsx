

interface Element {
    atomicNumber: number
    symbol: string
    name: string
    atomicMass: number
    electronicConfiguration: string
    electronegativity: number
    atomicRadius: number
    ionRadius: number
    vanDerWaalsRadius: number
    ionizationEnergy: number
    electronAffinity: number
    oxidationStates: string
    standardState: "gas" | "solid" | "liquid"
    bondingType: "metallic" | "covalent network" | "diatomic" | "atomic"
    meltingPoint: number
    boilingPoint: number
    density: number
    groupBlock: "nonmetal" | "metal" | "metalloid" | "halogen" | "noble gas" | "actinoid" | "transition metal" | "post-transition metal"
    yearDiscovered: number
    block: string
    cpkHexColor: string
    period: number
    group: number
}











export type { Element }