import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { XField, YField } from "../../type"


interface ChartConfig {
    dotSize: number
    xField: XField
    yField: YField
    animate: boolean
}


const initialState: ChartConfig = {
    dotSize: 2,
    xField: "atomicNumber",
    yField: "meltingPoint",
    animate: true
}


const chartConfigSlice = createSlice({
    name: "chartConfig",
    initialState,
    reducers: {
        setDotSize: (state, action: PayloadAction<number>) => {
            state.dotSize = action.payload
        },
        setXField: (state, action: PayloadAction<XField>) => {
            state.xField = action.payload
        },
        setYField: (state, action: PayloadAction<YField>) => {
            state.yField = action.payload
        },
        setAnimate: (state, action: PayloadAction<boolean>) => {
            state.animate = action.payload
        },
    }
})

// method to mutate the state
export const {
    setDotSize,
    setXField,
    setYField,
    setAnimate
} = chartConfigSlice.actions


// method to read the state
export const selectDotSize = (state: RootState) => state.chartConfig.dotSize
export const selectXField = (state: RootState) => state.chartConfig.xField
export const selectYField = (state: RootState) => state.chartConfig.yField
export const selectAnimate = (state: RootState) => state.chartConfig.animate






export default chartConfigSlice.reducer