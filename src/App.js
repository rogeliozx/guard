import React, { useState, useEffect } from 'react';
import Selected from './containers/Selected';
import Register from './containers/Register';
function App() {
  const [userIsSelected, setUserIsSelected] = useState(false);
  const [section, setSection] = useState('');
  const [idUser, setIdUser] = useState('');
  const [reset, setReset] = useState(false);
  useEffect(() => {
  }, [userIsSelected, section]);
  useEffect(() => {
    setUserIsSelected(false);
    setSection('');
    setIdUser('');
  }, [reset]);
  return (
    <>
      {userIsSelected ? (
        <Register section={section} idUser={idUser} setReset={setReset} />
      ) : (
        <Selected
          setUserIsSelected={setUserIsSelected}
          setIdUser={setIdUser}
          setSection={setSection}
        />
      )}
    </>
  );
}

export default App;
