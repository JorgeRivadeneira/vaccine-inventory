import React, {useContext, useEffect} from 'react'
import Card from './shared/Card';
import { FaEdit, FaTimes, FaMailchimp, FaIdCard, FaHome } from 'react-icons/fa';
import UserContext from './context/UserContext';
import { Link, Redirect, Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from './shared/Button';



export const UserDetails = () => {

    const navigate = useNavigate();
    let params = useParams();      
  
    return (
        <Card >



            
            <div className="message"><h3></h3></div>    
            <div className="text-display">
                <FaIdCard color = 'purple' />
                <strong> Detalles del Empleado </strong></div>      
            <div className="text-display">
                <FaMailchimp color = 'purple' /> 
                <strong> Nombre: </strong> </div> 

                <Button onClick={()=>{navigate('/')}}>
                <FaHome />
                Home
            </Button>                
        </Card>);
}
