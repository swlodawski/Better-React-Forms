import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(
        firstName,
        lastName,
        email,
        contact,
        gender,
        selectedOption,
        subjects,
        resume,
        url,
        about
      );
    };

    const handleSubjectChange = (sub) => {
      setSubjects((prev) => ({
        ...prev,
        [sub]: !prev[sub],
      }));
    };

    const handleReset = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setContact('');
      setGender('male');
      setSelectedOption({
        english: true,
        maths: false,
        physics: false
      });
      setSubjects('');
      setResume('');
      setUrl('');
      setAbout('');
    };

  return (
    <div className='App'>
      <h1>React Forms</h1>
      <fieldset>
        <form action="#" method='get'>
          <label for="firstname">First Name</label>
          <input 
          type="text"
          name='firstname'
          id='firstname'
          value={firstName}
          onChange={(e) => 
            setFirstName(e.target.value)
          }
          placeholder='Enter First Name' required />

          <label for="lastname">Last Name</label>
          <input 
          type="text"
          name='lastname'
          id='lastname'
          value={lastName}
          onChange={(e) => 
            setLastName(e.target.value)
          }
          placeholder='Enter Last Name' required />

          <label for="email">Email</label>
          <input 
          type="text"
          name='email'
          id='email'
          value={email}
          onChange={(e) => 
            setEmail(e.target.value)
          }
          placeholder='Enter Email' required />

          <label for="tel">Contact</label>
          <input 
          type="tel"
          name='contact'
          id='contact'
          value={contact}
          onChange={(e) => 
            setFirstName(e.target.value)
          }
          placeholder='Enter Mobile Number' required />

          <label for="gender">Gender</label>
          <input 
          type="radio"
          name='gender'
          value='male'
          checked={gender === "male"}
          onChange={(e) => 
            setGender(e.target.value)
          } />
          Male
          <input 
          type="radio"
          name='gender'
          value='female'
          id='female'
          checked={gender === "female"}
          onChange={(e) => 
            setGender(e.target.value)
          } />
          Female
          <input
          type="radio"
          name='gender'
          value='other'
          id='other'
          checked={gender === "other"}
          onChange={(e) =>
            setGender(e.target.value)
          } />
          Other

          <label for="lang">Your Best Subject</label>
          <input 
          type="checkbox"
          name='lang'
          id='english'
          checked={subjects.english === true}
          onChange={(e) => 
            handleSubjectChange("english")
          }
           />
          English

          <input 
          type="checkbox"
          name='lang'
          id='math'
          checked={subjects.maths === "true"}
          onChange={(e) =>
            handleSubjectChange("math")
          }
          />
          Maths

          <input 
          type="checkbox"
          name='lang'
          id='physics'
          checked={subjects.physics === "true"}
          onChange={(e) =>
            handleSubjectChange("physics")
          }
          />
          Physics

          <label for="file">Upload Resume</label>
          <input
          type="file"
          name='file'
          id='file'
          onChange={(e) =>
            setResume(e.target.files[0])
          }
          placeholder='Enter File To Upload'
          required
           />

           <label for="url">Enter url</label>
           <input 
           type="url"
           name='url'
           id='url'
           onChange={(e) =>
              setUrl(e.target.value)
           }
           placeholder='Enter a url'
           required
            />

          <label for="url">Select Your Choice</label>
           <select 
           type="select"
           name='select'
           id='select'
           onChange={(e) =>
              selectedOption(e.target.value)
           }>
            <option value=""
            disabled
            selected={selectedOption === ""}>
              Select Answer
            </option>

            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label='Advance'>
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="t">MongoDB</option>
            </optgroup>
           </select>
           <label for="about">About</label>
           <textarea
          name="about" 
          id="about"
          cols="30"
          rows="10"
          onChange={(e) =>
            setAbout(e.target.value)
          }
          placeholder='About Yourself'
          required></textarea>
          <button
          type='reset'
          value='reset'
          onChange={() => handleSubmit(e)}>Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App
