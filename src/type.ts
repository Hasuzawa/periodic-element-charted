export const fields = [
    "atomicMass",
    "atomicNumber",
    "atomicRadius",
    "block",
    "boilingPoint",
    "bondingType",
    "cpkHexColor",
    "density",
    "electronAffinity",
    "electronegativity",
    "electronicConfiguration",
    "group",
    "groupBlock",
    "ionRadius",
    "ionizationEnergy",
    "meltingPoint",
    "name",
    "oxidationStates",
    "period",
    "standardState",
    "symbol",
    "vanDerWaalsRadius",
    "yearDiscovered",
] as const

export type Field = typeof fields[number]


// these fields can be used as Y axis
export const yFields = [
    "atomicNumber",
    "atomicMass",
    "atomicRadius",
    "block",
    "boilingPoint",
    "bondingType",
    "density",
    "electronAffinity",
    "electronegativity",
    "group",
    "groupBlock",
    "ionRadius",
    "ionizationEnergy",
    "meltingPoint",
    "oxidationStates",
    "period",
    "standardState",
    "vanDerWaalsRadius",
    "yearDiscovered",
] as const

export type YField = typeof yFields[number]


// these fields can be used as X axis
export const xFields = [
    "atomicMass",
    "atomicNumber",
    "atomicRadius",
    "block",
    "boilingPoint",
    "bondingType",
    "density",
    "electronAffinity",
    "electronegativity",
    "group",
    // "groupBlock",
    "ionRadius",
    "ionizationEnergy",
    "meltingPoint",
    "period",
    "standardState",
    // "symbol",
    "vanDerWaalsRadius",
    "yearDiscovered"
] as const

export type XField = typeof xFields[number]




export type Element = {
    [name in Field]: string | number
}


type AxisWord = {
    [key in Field]: {
        axisLabel: string
        unit?: string
    }
}


export const axisWord: AxisWord = {
    symbol: {
        axisLabel: "Symbol",
    },
    atomicNumber: {
        axisLabel: "Atomic Number",
    },
    name: {
        axisLabel: "Name",
    },
    atomicMass: {
        axisLabel: "Atomic Mass",
    },
    electronicConfiguration: {
        axisLabel: "Electronic Configuration",
    },
    electronegativity: {
        axisLabel: "Electronegativity"
    },
    atomicRadius: {
        axisLabel: "Atomic Radius"
    },
    ionRadius: {
        axisLabel: "Ion Radius",
    },
    vanDerWaalsRadius: {
        axisLabel: "Van Der Waals' Radius"
    },
    ionizationEnergy: {
        axisLabel: "Ionization Energy",
        unit: "kJ/mol"
    },
    electronAffinity: {
        axisLabel: "Electron Affinity"
    },
    oxidationStates: {
        axisLabel: "Oxidation States"
    },
    standardState: {
        axisLabel: "Standard State"
    },
    bondingType: {
        axisLabel: "Bonding Type"
    },
    meltingPoint: {
        axisLabel: "Melting Point",
        unit: "K"
    },
    boilingPoint: {
        axisLabel: "Boiling Point",
        unit: "K"
    },
    density: {
        axisLabel: "Density",
        unit: "g/cm^3"
    },
    groupBlock: {
        axisLabel: "Group Block",
    },
    yearDiscovered: {
        axisLabel: "Year Discovered"
    },
    block: {
        axisLabel: "Block"
    },
    cpkHexColor: {
        axisLabel: "cpkHexColor"
    },
    period: {
        axisLabel: "Period"
    },
    group: {
        axisLabel: "Group"
    }
}