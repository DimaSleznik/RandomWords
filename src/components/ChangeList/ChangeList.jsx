import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { path } from '../../constans';
export function ChangeList() {
   const History = useHistory();
   const inputRef = useRef(null);
   const currentListPosition = localStorage.getItem('current_list');
   const list = JSON.parse(localStorage.getItem('words_lists'))[currentListPosition];
   const [wordsList, setList] = useState(list);


   function deleteClickHandler(e) {
      console.log(e.target)
      let lists = Array.from(wordsList.words);
      lists.splice(e.target.name, 1);
      setList((state) => ({ list_name: state.list_name, words: lists }))


   }
   function saveHandler() {
      let old_lists = JSON.parse(localStorage.getItem('words_lists'));
      let parent = inputRef.current.childNodes;
      let new_list = [];
      for (let node of parent) {
         if (!!node.firstChild.value) {
            new_list.push(node.firstChild.value)
         }
      }
      old_lists.splice(currentListPosition, 1, {
         list_name: wordsList.list_name,
         words: new_list,
      })
      localStorage.setItem('words_lists', JSON.stringify(old_lists));
      History.push({ pathname: path.main })

   }
   return (


      <div className="change-list" ref={inputRef}>{wordsList.words.map((elem, index) => {
         return <div className="list_element" key={uuidv4()}>
            <input type="text" name="" defaultValue={elem} key={uuidv4()} />
            <button name={index} onClick={deleteClickHandler}>X</button>
         </div>
      })}
         <button onClick={saveHandler} className='delete_button'>Сохранить</button>
      </div >


   );
}
