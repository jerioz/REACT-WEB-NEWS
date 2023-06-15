import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './FormNews.styles.scss'


const FormNews = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        content: "",
        time: "",
    });

const initialState = {
        title: "",
        content: "",
        time: "",
    };
        
const clearState = () => {
        setData({ ...initialState });
    };
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.title} ${data.content} ${data.time} `);
        let dataArray = JSON.parse(localStorage.getItem('news')) || [];
        dataArray.push(data)
        localStorage.setItem('news', JSON.stringify(dataArray))
        clearState()

        setTimeout(() => {
            navigate("/");
            }, 1000);
    };   
      
  return (
    <>
    <h1 className='news__title'>New News</h1>
    <div>
    <form onSubmit={handleSubmit} className='news__form'>
        <input
        type="text"
        placeholder="title"
        value={data.title}
        onChange={handleInputChange}
        name="title"
        className='news__input'
        required
        />
        <textarea
        placeholder='content'
        value={data.content}
        onChange={handleInputChange}
        name="content"
        className='news__textarea'
        required
        />
        <input
        type="time"
        value={data.time}
        onChange={handleInputChange}
        name="time"
        className='news__input'
        required
        />
        <button type="submit" className='news__button'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default FormNews
