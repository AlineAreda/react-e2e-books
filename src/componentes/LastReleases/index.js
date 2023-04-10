import { books } from "./dataBooks";
import styled from 'styled-components';
import imgBook from '../../imagens/dados.png'
import { Title } from '../Title';
import CardRecommendation from "../CardRecommendation";

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
   
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title cor="#0A4563" fontSize="36px">ÚLTIMOS LANCAMENTOS</Title>
            <NewBooksContainer>
                {books.map(books => (
                    <img src={books.src} />
                ))}
            </NewBooksContainer>
            <CardRecommendation
                title="Talvez você se interesse por..."
                subtitle="Storytelling com dados"
                description="Um guia sobre visualização de dados para profissionais de negócios"
                img={imgBook}
            />  
           
        </LastReleasesContainer>
    )
}

export default LastReleases