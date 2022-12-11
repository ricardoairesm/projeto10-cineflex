import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeScreen() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        request.then(answ =>
            setMovieList(answ.data));

    }, [])

    function teste() {
        console.log(movieList);
    }


    return (
        <>
            <Title onClick={teste}>Selecione o filme</Title>
            <MovieList>
                {movieList.map((movie) => 
                    <Poster key = {movie.id}>
                        <img src={movie.posterURL} />
                    </Poster>
                )}
            </MovieList>
        </>
    )
}



const Title = styled.div`
position: absolute;
width: 375px;
height: 110px;
left: 0px;
top: 67px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
`

const MovieList = styled.div`
position: absolute;
left: 30px;
top: 169px;
width: 375px;
display:flex;
flex-wrap:wrap;
position:absolute;
top:169px;
left:30px;
`

const Poster = styled.div`
width: 145px;
height: 209px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
margin-right:30px;
margin-bottom:11px;
img{
    width: 129px;
    height: 193px;
    margin: 8px;
}
`
