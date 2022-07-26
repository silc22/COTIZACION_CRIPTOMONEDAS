import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectCurrencies from "../hooks/useSelectCurrencies";
import { coins } from "../data/coins";

const InputSubmit = styled.input`
    background-color:  #696cdd;
    border: none;
    width: 100%;
    padding: 10px;
    color: whitesmoke;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;

    &:hover{
        cursor: pointer;
        background-color:  #5457c5;
        transition: .3s;
    }   
`

const Form = ({setMoney}) =>{

    const [ cryptos, setCryptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ currencies, SelectCurrencies ] = useSelectCurrencies("Choose currency:", coins)
    const [ cryptocurrencies, SelectCryptocurrencies ] = useSelectCurrencies("Choose cryptocurrency:", cryptos)


    useEffect(()=>{
        const fetchApi = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const response = await fetch(url)
            const result = await response.json()

            const cryptoArray = result.Data.map( crypto => {
                const objetc = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return objetc
            })

            setCryptos(cryptoArray)
        }

        fetchApi()
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        if([currencies, cryptocurrencies].includes("")){
            setError(true)
            return
        }

            setError(false)
            setMoney({
                currencies,
                cryptocurrencies
            })
    }

    return(
        <>
            {error && <Error >All fields are required</Error>}

            <form
            onSubmit={handleSubmit}>

            <SelectCurrencies/>
            <SelectCryptocurrencies/>

                <InputSubmit 
                    type="submit"
                    value="Price"
                    />
            
            </form>
        </>
)}

export default Form