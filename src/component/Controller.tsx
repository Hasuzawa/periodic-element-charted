import styled from "styled-components"
import { selectAnimate, selectDotSize, selectXField, selectYField, setDotSize, setYField } from "../store/slice/chartConfigSlice"
import { useAppDispatch, useAppSelector } from "../store/store"
// import { YField } from "../store/slice/chartConfigSlice"
import { fields, Field, axisWord } from "../type"


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
                <input type="range" min={0} max={30} value={dotSize} onChange={(e) => dispatch(setDotSize(Number(e.target.value)))} />
                <span>{dotSize}</span>
            </div>
            <div>
                <label>Y-axis</label>
                <select value={yField} onChange={(e) => dispatch(setYField(e.target.value as Field))}>
                    {/* <option value="meltingPoint">Melting Point</option>
                    <option value="boilingPoint">Boiling Point</option> */}
                    {fields.map((field, idx) => <option key={idx} value={field}>{axisWord[field].axisLabel}</option>)}

                </select>
            </div>
        </div>
    )
}


const Controller = styled(RawController)`
    position: sticky;
    width: 18em;
    background-color: lightcoral;
`


export default Controller