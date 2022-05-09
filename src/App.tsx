import Chart from "./component/Chart"
import styled from "styled-components"
import Controller from "./component/Controller"
import Main from "./component/Main"


interface AppProps {
    className?: string
    children?: React.ReactNode
}


const RawApp = (props: AppProps) => {
    return (
        <div className={props.className}>
            <Controller />
            <Main />
        </div>
    )
}


const App = styled(RawApp)`
    display: flex;
    flex-flow: row nowrap;
`


export default App