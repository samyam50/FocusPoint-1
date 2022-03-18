import React, {useState} from "react";
import {Text} from 'react-native';

//components
import Header from "./Header";
import ListItems from "./ListItems";

const Home = () => {

    //intial items

    const initialTodos =[{
        title: "Reply Important Email",
        date: "fri, 08 March 2022 15:45:00 GMT",
        Key: "1"
    }, {
        title: "Meeting With John",
        date: "fri, 09 March 2022 09:00:00 GMT",
        Key: "2"
    },{
        title: "Coffe with sarah",
        date: "fri, 08 March 2022 12:30:00 GMT",
        Key: "3"

    }]

    const [todos, setTodos]= useState(initialTodos);
    return (
        <>
        <Header/>
        <ListItems
        todos={todos}
        setTodos={setTodos}
        />
        </>

    );
}

export default Home;
