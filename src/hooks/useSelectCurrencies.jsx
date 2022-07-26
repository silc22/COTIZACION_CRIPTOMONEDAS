import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    color: whitesmoke;
    display: block;
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0 ;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
    
`

const useSelectCurrencies = (label, options) => {

    const [state, setState ] = useState("")

    const SelectCurrencies = () =>(
        <>

            <Label>{label}</Label>
            
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
                >
                    <option value="">
                    -- Select --
                    </option>
                    {options.map(option => (
                        <option
                            key={option.id}
                            value={option.id}
                            >
                            {option.name}
                        </option>
                        ))}
            </Select>

        </>
    )


    return [state, SelectCurrencies]

}

export default useSelectCurrencies