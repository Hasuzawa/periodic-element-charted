import styled from "styled-components"
import { gql, useQuery } from "@apollo/client"
import { VictoryChart, VictoryScatter } from "victory"
import { useRef, useState } from "react"
import { selectDotSize } from "../store/slice/chartConfigSlice"
import { useAppSelector } from "../store/store"


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

interface Element {
    atomicNumber: number
    name: string
    meltingPoint: number | 'unknown'
    boilingPoint: number
}


const Rawchart = (props: chartProps) => {
    const { loading, error, data } = useQuery<ElementData>(elementProperties)
    const divRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState<number>(2000)

    const dotSize = useAppSelector(selectDotSize)
    

    if (loading) return <span>Loading</span>
    if (error) return <span>Error</span>
    if (data) console.log(data)

    if (!data?.data)
        return null

    const xField = "atomicNumber"
    const yField = "meltingPoint"

    let chartData = []

    for (const element of data.data) {
        if (element[xField] && element[yField] && element[yField] != "unknown")
            chartData.push({
                x: element[xField],
                y: element[yField]
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
                domain={{ x:[0, 120]}}
                width={2000}
                height={1000}
            >
                <VictoryScatter
                    size={dotSize}
                    data={chartData}
                />
            </VictoryChart>
        </div>
    )
}


const Chart = styled(Rawchart)`
    max-height: 80vh;
`


export default Chart