
import styled from 'styled-components';

const Option = styled.li`
    display: flex;
`
const Options = styled.ul`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textOptions = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OptionHeader() {
    return (
        <Options>
            {textOptions.map((text) => (
                <Option><p>{text}</p></Option>
            ))}
        </Options>
    )
}

export default OptionHeader