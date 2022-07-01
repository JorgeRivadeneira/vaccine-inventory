// import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import UserContext from './context/UserContext'
import Spinner from './shared/Spinner';
import { UserItem } from './UserItem';
import Button from './shared/Button';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';


function UserList() {
    const {data, isLoading} = useContext(UserContext);

    const navigate = useNavigate();

    if(!isLoading && (!data || data.length === 0)){
        <p>No hay Usuarios registrados</p>
    } 
        
    return isLoading ? <Spinner /> : 
        (
        <div className='feedback-list'>
            <Button 
            type='submit' 
            version='secondary' 
            onClick={()=>{navigate('/user')}}
            >
                <FaPlus></FaPlus>  
                <strong> Nuevo </strong>               
            </Button>   

            <span> </span>
            <Button 
            type='submit' 
            version='secondary' 
            onClick={()=>{navigate('/user')}}
            >
                <FaSearch />  
                <strong> Buscar </strong>               
            </Button>  

            <br/>        
            <AnimatePresence>
            {data.map((item) => (
                <motion.div key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                    <UserItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}
export default UserList;
