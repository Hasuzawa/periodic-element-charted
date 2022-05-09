import styled from "styled-components"
import { gql, useQuery } from "@apollo/client"
import { VictoryChart, VictoryScatter } from "victory"


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
        <>
        <VictoryChart
            domain={{ x:[0, 120]}}
        >
            <VictoryScatter
                size={1}
                data={chartData}
            />
        </VictoryChart>
        <ul>
            {data?.data.map((x: any, idx: any) => {console.log(x); return <li key={idx}>{x.atomicNumber}</li>})}
        </ul>
        </>
    )
}


const Chart = styled(Rawchart)`
`


export default Chart