import {useEffect,useState} from 'react'; //for showing detail items whatever you click each items with id
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function Recipe() {
    let params = useParams()
    const [detail,setDetail] =useState({});
    const [activeTab,setActiveTab] = useState('instruction');

    useEffect(()=>{
      fetchDetails(params.id)
    },[params.id])

    const fetchDetails = async (id) =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const detailData = await data.json();
      setDetail(detailData)
    }

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt={detail.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instruction'? 'active':''} onClick={()=>setActiveTab('instruction')}>Instruction</Button>
        <Button className={activeTab === 'ingredients'? 'active':''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instruction' && (
           <div>
           <h3 dangerouslySetInnerHTML={{ __html: detail.summary}}></h3>
           <h3 dangerouslySetInnerHTML={{ __html: detail.instructions}}></h3>
         </div>
        )}
        {activeTab === 'ingredients' && (
           <ul>
           {detail.extendedIngredients.map((el=>
               <li key={el.id}>{el.original}</li>
             ))}
         </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}
  const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display:flex;
  .active{
    background: linear-gradient(30deg,#494949,#313131);
    color:white;
  }
  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  `
  const Button = styled.button`
    padding:1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right:2rem;
    font-weight:600;
    margin-bottom:20px;
  `
  const Info = styled.div`
    margin-left:10rem;
  `
export default Recipe