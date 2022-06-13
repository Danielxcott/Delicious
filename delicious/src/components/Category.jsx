import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export default function Category() {
  return (
    <List>
        <Slink to={'/Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink  to={'/Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink  to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink  to={'/Cuisine/Korean'}>
            <GiChopsticks/>
            <h4>Korean</h4>
        </Slink>
    </List>
  )
}
const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`
const Slink = styled(NavLink)`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    flex-direction:column;
    margin-right:2rem;
    text-decoration:none;
    background: linear-gradient(35deg,#141E30,#243B55);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);
    h4{
        color:white;
        font-size:0.8rem
    }
    svg{
        color:white;
        font-size:1.5rem
    }
    &.active{
        background: linear-gradient(to right,#ffd89b,#19547b);
    
    svg{
        color: white;
    }
    h4{
        color:white;
    }
}
`

