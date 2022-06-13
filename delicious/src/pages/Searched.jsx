import styled from 'styled-components'; //for showing search text;
import React, { useState,useEffect } from 'react';
import {useParams,Link} from 'react-router-dom';

function Searched() {
    let params = useParams()
    const [searchRecipes,setSearchRecipes] = useState([]);

    useEffect(()=>{
        getSearch(params.search)
    },[params.search])

    const getSearch = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchRecipes(recipes.results)
      }

  return (
    <Grid>
        {searchRecipes.map((el)=>{
            return(
                <Card key={el.id}>
                  <Link to={'/Recipe/'+el.id}>
                    <img src={el.image} alt={el.title} />
                    <h4>{el.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}
const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img{
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`

export default Searched