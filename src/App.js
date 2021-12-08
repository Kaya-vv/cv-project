import React, { useState } from 'react'
import General from './components/General';
import Header from './components/Header';
import Educational from './components/Educational';
import Practical from './components/Practical';
import Overview from './components/Overview';
import "./styles/styles.css";
function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [educational, setEducational] = useState({ school: "", study: "", date: "" });
  const [practical, setPractical] = useState({ company: "", position: "", tasks: "", from: "", till: "" });
  const [allData, setAllData] = useState({
    general:{
      name: "",
      email: "",
      phone: ""
    },
    educational: {
      school: "",
      study: "",
      date: ""
    },
    practical: {
      company: "",
      position: "",
      tasks:"",
      from:"",
      till:""
    }
  });
  const [editing, setEditing] = useState(true);
  const handleGeneralOnChange = (e) => {
    e.preventDefault();
    setGeneral({
      name: e.target.form[0].value,
      email: e.target.form[1].value,
      phone: e.target.form[2].value
    })

  }

  const handleEducationalOnChange = (e) => {
    e.preventDefault();
    setEducational({
      school: e.target.form[0].value,
      study: e.target.form[1].value,
      date: e.target.form[2].value
    })
  }

  const handlePracticalOnChange = (e) => {
    e.preventDefault();
    setPractical({
      company: e.target.form[0].value,
      position: e.target.form[1].value,
      tasks: e.target.form[2].value,
      from: e.target.form[3].value,
      till: e.target.form[4].value
    })
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData({
      general: general,
      educational: educational,
      practical: practical
    })
    setEditing(false);

  }
  return (
    <div className="App">
      <div class="container is-flex is-justify-content-space-evenly">
      <section class="section">
        <Header />
        {editing ? 
          <form onSubmit={handleSubmit}>
          <div class="columns ">
            <div class="column">
              <General general={allData.general} handleGeneralOnChange={handleGeneralOnChange} />
            </div>
            <div class="column">
              <Educational educational={allData.educational} handleEducationalOnChange={handleEducationalOnChange} />
            </div>
          </div>
          <div class="columns practical">
            <div class="column is-full practical">
              <Practical practical={allData.practical} handlePracticalOnChange={handlePracticalOnChange} />
            </div>
          </div>
          <button class="button is-primary"> Submit </button>
        </form>
        : 
        <Overview handleEdit= {handleEdit} allData={allData}/>

        }
        
        </section >
      </div>

    </div >
  );
}

export default App;
