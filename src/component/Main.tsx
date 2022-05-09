import styled from "styled-components"
import Chart from "./Chart"


interface MainProps {
    className?: string
    children?: React.ReactNode
}


const RawMain = (props: MainProps) => {
    return (
        <div className={props.className}>
            <Chart />
        </div>
    )
}


const Main = styled(RawMain)`
    background-color: lightblue;
    flex: 1 1 0;
`


export default Main