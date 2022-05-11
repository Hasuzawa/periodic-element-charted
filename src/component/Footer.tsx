import styled from "styled-components"


interface FooterProps {
    className?: string
    children?: React.ReactNode
}

const postmanApiLink = "https://documenter.getpostman.com/view/14793990/TzmCgD9k"

const RawFooter = (props: FooterProps) => {
    return (
        <footer className={props.className}>
            <div>
                Created by <a href="https://github.com/Hasuzawa/periodic-element-charted">Hasuzawa</a>
            </div>
            <div>
                <span>Backend API by</span>
                <a href={postmanApiLink}>
                {/* <img ref={postmanLogoPath} alt="Postman API" />< */}
                </a>
            </div>
        </footer>
    )
}


const Footer = styled(RawFooter)`
    
`


export default Footer