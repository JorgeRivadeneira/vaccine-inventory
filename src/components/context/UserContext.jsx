import {createContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [userEdit, setEdit] = useState({
        item: {},
        edit: false
    })    

    const userDelete = async (id) => {
        if(window.confirm('Estás seguro que deseas eliminar?')){
            const response = await fetch(`http://localhost:7500/users/${id}`, { method: 'DELETE'})
            setData(data.filter((item) => item.id !== id))
        }
    } 
    
    useEffect(() => {
        fetchData()
    }, []) 


    const fetchData = async () => {
        const response = await fetch(`http://localhost:7500/users?_sort=id&_order=asc`)        
        const data = await response.json();        
        setData(data)
        setIsLoading(false)
    }

    const fetchDataById = async (id) => {
        const response = await fetch(`http://localhost:7500/users?_sort=id&_order=asc`)        
        const data = await response.json();        
        setData(data)
        setIsLoading(false)
    }    

    const addUser = async (newFeedback) => {
        const response = await fetch('http://localhost:7500/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });

        const dataSaved = await response.json()
        //newFeedback.id = uuidv4()
        setData([dataSaved, ...data])
    }  

    const editUser = (item) => {
        setEdit({
            item,
            edit: true
        })
    }

    const updateUser = async (id, updtdItem)=>{
        const response = await fetch(`http://localhost:7500/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updtdItem)
        })

        const dataSaved = await response.json()

        fetchData();        

        // setData(
        //     data.map((item) => (item.id === id  ? {
        //         ...item, ...data
        //     } : item))
        // )
    }

    return (
        <UserContext.Provider value={{
            data,
            userEdit,
            isLoading,
            userDelete,
            addUser,
            editUser,            
            updateUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext