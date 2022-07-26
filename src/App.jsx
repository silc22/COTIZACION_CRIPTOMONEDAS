import "./index.css"
import styled from "@emotion/styled"
import cryptoImg from "./img/imagen-criptos.png"
import Form from "./components/Form"
import { useEffect, useState } from "react"
import Result from "./components/Result"
import Spinner from "./components/Spinner"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  min-height: 100vh;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Nunito', sans-serif;
  color: whitesmoke;
  text-align: center;
  font-weight: 700 ;
  margin: 80px 0 50px 0;
  font-size: 34px;
  text-transform: capitalize;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #4faceb;
    display: block;
    margin: 10px auto 0 auto;
  }

`

function App() {

  const [ money, setMoney ] = useState({})
  const [ result, setResult] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(()=>{
    if(Object.keys(money).length > 0 ){

      const cryptoPrice = async () =>{
        setLoading(true)
        setResult({})
        const { currencies, cryptocurrencies } = money
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrencies}&tsyms=${currencies}`

         const response = await fetch(url)
         const result = await response.json()
         setResult(result.DISPLAY[cryptocurrencies][currencies])
         setLoading(false)
      }

      cryptoPrice()
    }
  },[money])

  return (
   <Container>
      
      <Imagen
        src={cryptoImg}
        alt="crypto image"
      />

      <div>
        
        <Heading>Instant cryptocurrency quotes</Heading>
        <Form
          setMoney={setMoney}
        />
        {loading && 
          <Spinner/>
        }
        {result.PRICE && <Result result={result}/>}
      </div>

   </Container>
   
  )
}

export default App
