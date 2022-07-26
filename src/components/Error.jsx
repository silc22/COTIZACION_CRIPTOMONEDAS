import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #b43030;
    color: whitesmoke;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) =>{

    return(
        <Texto>
            {children}
        </Texto>
    )
}

export default Error