import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import validator from 'validator'
import UserContext from './context/UserContext'
import Spinner from './shared/Spinner'
import { useNavigate } from 'react-router-dom'

export const UserForm = ({item}) => {

    const navigate = useNavigate();

    const {userEdit, addUser, updateUser, isLoading, editUser} = useContext(UserContext);
    const [id, setId] = useState(null);
    const [cedula, setCedula] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        console.log(userEdit);
        if(userEdit.edit === true){
            setId(userEdit.item.id);
            setCedula(userEdit.item.cedula);
            setNombres(userEdit.item.nombres);
            setApellidos(userEdit.item.apellidos);
            setEmail(userEdit.item.email);
        }
    }, [])     

    const onSubmit = async (e) => {
        e.preventDefault();
        if(isFormValid()){
            const user = {
                cedula,
                nombres,
                apellidos,
                email
            }

            if(userEdit.edit === true){ 
                await updateUser(userEdit.item.id, user);
            }else{
                await addUser(user)
            }
            
            

            navigate('/');
        }
    } 
    
    const isFormValid = ()=>{
        let flag = false;
        if(cedula.trim().length === 0 || cedula.trim().length < 10){
            setMessage('Ingrese un número de cédula válido');
            flag = false;
        }else if(nombres.trim().length === 0 ){
            setMessage('El nombre es un campo válido');
            flag = false;
        }else if(!validator.isAlpha(nombres.trim())){
            setMessage('El nombre sólo debe incluir letras');
            flag = false;
        }else if(apellidos.trim().length === 0 ){
            setMessage('El Apellido es un campo válido');
            flag = false;
        }else if(!validator.isAlpha(apellidos.trim())){
            setMessage('El apellido sólo debe incluir letras');
            flag = false;
        } else if(email.trim().length === 0 ){
            setMessage('El Email es un campo válido');
            flag = false;
        }       
        else if(!validator.isEmail(email)){
            setMessage('Debe ingresar un email válido');
            flag = false;
        }else{
            setMessage('');
            flag = true;
        }
        return flag
      }    
    
    const [message, setMessage] = useState(''); 

  return (
    !isLoading ?
    <Card>
        <form onSubmit={onSubmit}>
            <h2>Información de los Empleados</h2>

            <div className="input-group">
                <input type="text" 
                onChange={(e)=>{setCedula(e.target.value)}} 
                name="cedula"
                placeholder='Ingrese Cédula'
                maxLength={10}
                value={cedula || ''} />
                <br/>

                <input type="text" 
                onChange={(e)=>{setNombres(e.target.value)}} 
                name="nombres"
                placeholder='Ingrese Nombres'
                value={nombres || ''} />
                <br/>

                <input type="text" 
                onChange={(e)=>{setApellidos(e.target.value)}} 
                name="apellidos"
                placeholder='Ingrese Apellidos'
                value={apellidos || ''} />
                <br/> 

                <input type="text" 
                onChange={(e)=>{setEmail(e.target.value)}}  
                name="email"
                placeholder='Ingrese Email'
                value={email || ''} />
                <br/>                                
                
                <Button 
                type='submit' 
                version='secondary'
                isDisabled={false}
                >
                    Guardar
                </Button>
        

                {message && 
                <div className='message'>
                        {message}
                </div>
                }                

            </div>


        </form>        
    </Card> : <Spinner />

  )
}
