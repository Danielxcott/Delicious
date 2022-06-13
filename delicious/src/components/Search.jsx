import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
    const [input,setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/'+input);  //bringing search data to searched page
    
    }
    
  return (
<FormStyle onSubmit={submitHandler}>
    <div>
    <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} autoFocus />
    <FaSearch/>
    </div>
</FormStyle>  
)
};
const FormStyle = styled.form`
    margin:0rem 20rem;
   div{
    position:relative;
    width:100%;
   }
    input{
        border :none;
        background: linear-gradient(30deg,#494949,#313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:0;
        transform: translate(100%,-50%);
        color:white;
    }
`

export default Search