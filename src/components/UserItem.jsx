import React, {useContext} from 'react'
import Card from './shared/Card';
import { FaEdit, FaTimes, FaMailchimp, FaIdCard } from 'react-icons/fa';
import UserContext from './context/UserContext';
import { Link, Redirect, Navigate, useNavigate } from 'react-router-dom';
import Button from './shared/Button';

export const UserItem = ({item}) => {
    const {userDelete, editUser} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Card >
            <div className='num-display'>{item.id}</div>
            <button onClick={() => userDelete(item.id)} className='close'>
                <FaTimes color = 'purple' />
            </button>
            

            <button onClick={() => {
                editUser(item);
                navigate(`/user`);                
            }} className="edit">
                <FaEdit color='purple' />
            </button>

            
            <div className="message"><h3>{item.nombres}  {item.apellidos}</h3></div>    
            <div className="text-display">
                <FaIdCard color = 'purple' />
                <strong> Cédula: </strong>{item.cedula}</div>      
            <div className="text-display">
                <FaMailchimp color = 'purple' /> 
                <strong> Email: </strong> {item.email}</div> 
            <br/>
            <Button
                onClick={()=>{navigate(`/user-details/${item.id}`)}} >
                Ver Detalles
            </Button>
        </Card>);
}
