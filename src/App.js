import React,{useState} from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
const App = () =>{
const [addItem, setAddItem] = useState([]);
  const addNote = (note)=>{ 
    setAddItem((prevData) =>{
      return [...prevData, note];
    })
  };
  const onDelete = (id) =>{
    setAddItem((olddata) =>
      olddata.filter((currdata, ind) =>{
        return ind != id;
      })
    )
  };

  return(
  <>
    <Header/>
    <CreateNote passNote ={addNote}/>

    {addItem.map((val, index)=>{
      return(
        <Note 
          key={index}
          id={index}
          title={val.title}
          content = {val.content}
          deleteItem ={onDelete}
        />
      );
    })}

    <Footer/>
  </>
  );
}

export default App;
