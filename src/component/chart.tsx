import styled from "styled-components"
import { gql, useQuery } from "@apollo/client"
import { VictoryAxis, VictoryChart, VictoryScatter, VictoryTooltip } from "victory"
import { useRef, useState } from "react"
import { selectDotSize, selectXField, selectYField } from "../store/slice/chartConfigSlice"
import { useAppSelector } from "../store/store"
import { Element, Field } from "../type"


interface chartProps {
    className?: string
    children?: React.ReactNode
}

const elementProperties = gql`
    query GET_ALL_ELEMENT {
        data @rest(type: "Elements",  ,path: "/elements") {
            atomicNumber
            name
            meltingPoint
            boilingPoint
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

type AxisLabel = {
    [key in Field]: string
}
const AxisLabel: AxisLabel = {
    "symbol": "Symbol",
    "atomicNumber": "Atomic Number",
    "name": "Name",
    "atomicMass": "Atomic Mass",
    "meltingPoint": "Melting Point (K)",
    "boilingPoint": "Boiling POint (K)",
}


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
        if (element[xField] && element[yField] && element[yField] != "unknown")
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
                width={2000}
                height={1000}
                padding={120}
                animate={true}
            >
                <VictoryAxis
                    label={AxisLabel[xField]}
                    style={{
                        axisLabel: {fontSize: "30", padding: "40"},
                        tickLabels: {fontSize: "24", padding: "0"}
                    }}
                    tickCount={15}
                />
                <VictoryAxis
                    dependentAxis
                    label={AxisLabel[yField]}
                    tickCount={10}
                    style={{
                        axisLabel: {fontSize: "30", padding: "70"},
                        tickLabels: {fontSize: "24", padding: "0"}
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
    max-height: 80vh;
`


export default Chart