import React from "react";
import { useState, useCallback } from "react";
import { inputTitleState } from "../states/inputTitleState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addTitleState } from "../states/addTitleState";
import "./InputTask.css";

const getKey = () => Math.random().toString(32).substring(2); // 0〜1未満の乱数字を取得して、数字を32進法に文字列に変換。前から３番目から文字を抽出

const InputTask = () => {
  const inputTitle = useRecoilValue(inputTitleState);
  const setInputTitle = useSetRecoilState(inputTitleState);
  const addTitle = useRecoilValue(addTitleState);
  const setAddTitle = useSetRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [setInputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("");
  };

  return (
    <div className="inputField">
      {/* 再レンダリングは1度だけ */}
      <input
        className="inputTitle"
        type="text"
        onChange={onChange}
        value={inputTitle}
      />
      <button type="button" onClick={handleClick} className="addButton">
        追加
      </button>
    </div>
  );
};

export default InputTask;
