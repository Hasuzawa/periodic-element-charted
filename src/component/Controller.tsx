import styled from "styled-components"
import { selectAnimate, selectDotSize, selectXField, selectYField, setDotSize } from "../store/slice/chartConfigSlice"
import { useAppDispatch, useAppSelector } from "../store/store"


interface ControllerProps {
    className?: string
    children?: React.ReactNode
}


const RawController = (props: ControllerProps) => {
    const dotSize = useAppSelector(selectDotSize)
    const xField = useAppSelector(selectXField)
    const yField = useAppSelector(selectYField)
    const animate = useAppSelector(selectAnimate)

    const dispatch = useAppDispatch()


    return (
        <div className={props.className}>
            <span>hello world</span>
            <input type="range" min={0} max={30} value={dotSize} onChange={(e) => dispatch(setDotSize(Number(e.target.value)))} />
        </div>
    )
}


const Controller = styled(RawController)`
    position: sticky;
    width: 18em;
    background-color: lightcoral;
`


export default Controller