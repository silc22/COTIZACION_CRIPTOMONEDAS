import styled from "@emotion/styled"

const ResultContainer = styled.div`
    color: whitesmoke;
    font-family: 'Nunito', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Text = styled.p`
    font-size:  18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size:  24px;
    span{
        font-weight: 700;
    }
`
const Image = styled.img`
    display: block;
    width: 120px;

`


const Result = ({result}) =>{

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE, FROMSYMBOL} = result
    return(
        <ResultContainer>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt={FROMSYMBOL} />
            <div>
                <Price>Price is: <span>{PRICE}</span></Price>
                <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price of the day: <span>{LOWDAY}</span></Text>
                <Text>Variation last 24hs: <span>{CHANGEPCT24HOUR} %</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </ResultContainer>
    )
}

export default Result