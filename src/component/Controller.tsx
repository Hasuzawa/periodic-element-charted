import styled from "styled-components"
import { selectAnimate, selectDotSize, selectXField, selectYField, setDotSize, setXField, setYField } from "../store/slice/chartConfigSlice"
import { useAppDispatch, useAppSelector } from "../store/store"
// import { YField } from "../store/slice/chartConfigSlice"
import { xFields, yFields, YField, XField, axisWord } from "../type"
import postmanLogoPath from "../images/postman_logo.svg"
import Footer from "./Footer"


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

            <div>
                <label>Dot Size</label>
                <input type="range" min={0} max={10} step={0.5} value={dotSize} onChange={(e) => dispatch(setDotSize(Number(e.target.value)))} />
                <span>{dotSize}</span>
            </div>
            <div>
                <label>Y-axis</label>
                <select value={yField} onChange={(e) => dispatch(setYField(e.target.value as YField))}>
                    {/* <option value="meltingPoint">Melting Point</option>
                    <option value="boilingPoint">Boiling Point</option> */}
                    {yFields.map((field, idx) => <option key={idx} value={field}>{axisWord[field].axisLabel}</option>)}

                </select>
            </div>
            <div>
                <label>X-axis</label>
                <select value={xField} onChange={(e) => dispatch(setXField(e.target.value as XField))}>
                    {xFields.map((field, idx) => <option key={idx} value={field}>{axisWord[field].axisLabel}</option>)}
                </select>
            </div>
            <Footer />
        </div>
    )
}


const Controller = styled(RawController)`
    position: sticky;
    width: 16em;
    background-color: lightcoral;
    padding: 1em;
    display: flex;
    flex-flow: column nowrap;
`


export default Controller