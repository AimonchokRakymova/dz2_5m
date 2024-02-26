import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../redux/action";

const UsersPage = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleInputChange =(event) => {
        const {name, value} = event.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleAddUser = () => {
        dispatch(addUser(formData))
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <input type="text" name='name' placeholder='name' value={formData.name} onChange={handleInputChange}/>
            <input type="text" name='email' placeholder='email' value={formData.email} onChange={handleInputChange}/>
            <input type="text" name='password' placeholder='password' value={formData.password} onChange={handleInputChange}/>
            <button onClick={handleAddUser}>Add</button>
            {
                user.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <h1>{item.email}</h1>
                        <h1>{item.password}</h1>
                    </div>
                ))
            }
        </div>

    );
};

export default UsersPage;