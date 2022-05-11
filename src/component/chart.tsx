import styled from "styled-components"
import { gql, useQuery } from "@apollo/client"
import { VictoryAxis, VictoryChart, VictoryScatter, VictoryTooltip } from "victory"
import { useRef, useState } from "react"
import { selectDotSize, selectXField, selectYField } from "../store/slice/chartConfigSlice"
import { useAppSelector } from "../store/store"
import { Element, Field } from "../type"
import { axisWord } from "../type"


interface chartProps {
    className?: string
    children?: React.ReactNode
}

const elementProperties = gql`
    query GET_ALL_ELEMENT {
        data @rest(type: "Elements",  ,path: "/elements") {
            atomicNumber
            symbol
            name
            atomicMass
            electronicConfiguration
            electronegativity
            atomicRadius
            ionRadius
            vanDerWaalsRadius
            ionizationEnergy
            electronAffinity
            oxidationStates
            standardState
            bondingType
            meltingPoint
            boilingPoint
            density
            groupBlock
            yearDiscovered
            block
            cpkHexColor
            period
            group
        }
    }
`

interface ElementData {
    data: Element[]
}

// interface Element {
//     atomicNumber: number
//     name: string
//     meltingPoint: number | 'unknown'
//     boilingPoint: number
// }




const Rawchart = (props: chartProps) => {
    const { loading, error, data } = useQuery<ElementData>(elementProperties)
    const divRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState<number>(2000)

    const dotSize = useAppSelector(selectDotSize)


    const xField: Field = useAppSelector(selectXField)
    const yField: Field = useAppSelector(selectYField)
    

    if (loading) return <span>Loading</span>
    if (error) return <span>Error</span>
    if (data) console.log(data)

    if (!data?.data)
        return null

    // const xField = "atomicNumber"
    // const yField = "meltingPoint"

    let chartData = []


    for (const element of data.data) {
        if (element[xField] && element[yField] && element[yField] !== "unknown" && element[xField] !== "unknown")
            chartData.push({
                x: element[xField],
                y: element[yField],
                label: `${element["name"]}: (${element[xField]},${element[yField]})`,
            })
    }
    
    // let chartData: {x: any, y: any}[] | undefined = data?.data.map(element => {
    //     if (element[xField] && element[yField])
    //         return ({
    //             x: element[xField],
    //             y: element[yField],
    //         })
    //     else return null
    // })
    
    

    return (
        <div className={props.className} ref={divRef}>
            <VictoryChart
                // domain={{ x:[0, 120]}}
                // width={2000}
                // height={1000}
                padding={30}
                animate={{
                    duration: 1000,
                    easing: "cubicInOut"
                }}
            >
                <VictoryAxis
                    label={axisWord[xField].axisLabel + (axisWord[xField].unit ? ` (${axisWord[xField].unit})` : "")}
                    style={{
                        axisLabel: {fontSize: "10", padding: "20"},
                        tickLabels: {fontSize: "8", padding: "0"}
                    }}
                    tickCount={15}
                />
                <VictoryAxis
                    dependentAxis
                    label={axisWord[yField].axisLabel + (axisWord[yField].unit ? ` (${axisWord[yField].unit})` : "")}
                    tickCount={10}
                    style={{
                        axisLabel: {fontSize: "10", padding: "35"},
                        tickLabels: {fontSize: "8", padding: "0"}
                    }}
                />
                <VictoryScatter
                    size={dotSize}
                    data={chartData}
                    labelComponent={<VictoryTooltip />}
                />
            </VictoryChart>
        </div>
    )
}


const Chart = styled(Rawchart)`
    width: 100%;
    height: 100%;
`


export default Chart