import React, { useState } from "react";
import { connect } from 'react-redux';
import { addList, toggle, temizle } from './actions';
import "./style.css";



const App = (props) => {

  const[text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" value={text} onChange={ e=> setText(e.target.value) }/>
        <button onClick={ () => {
          setText('');
          props.addList(text)}}>Ekle</button>
      </div> 
      {/* state props yazdırıyoruz. Connect fonk. sayesinde */}
      <div className="liste">
        {props.liste.map(item => (
          <div 
          onClick={() => props.toggle(item.id)} 
          key={item.id} 
          className={item.tamamlandi ? "yapildi" : ""}>
            {item.baslik}
            </div>
        ))}
      </div>
      <button className="temizle" onClick={() => props.temizle()}>Tamamlananları Temizle</button>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    liste: state.liste
  };
};

export default connect(mapStateToProps, { addList, toggle, temizle })(App);

//İlk fonksiyon döndürüyor. 
//İkinci component parametre olarak alıyor.