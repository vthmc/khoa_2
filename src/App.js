import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import React, { useState, useCallback } from "react";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Checkbox from "./checkbox";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [dataList, setDataList] = useState([]);
  const [indexActive, setIndexActive] = useState(-1);
  const setDataListFunc = (text) => {
    setDataList([...dataList, text]);
  };
  console.log("adsdsđ", indexActive);
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList
          dataList={dataList}
          setDataList={(res) => {
            console.log(res);
          }}
          indexActive={indexActive}
          setIndexActive={setIndexActive}
        />
        <Form setDataListFunc={setDataListFunc} />
        <Checkbox />
      </div>
      <Footer />
    </div>
  );
};
