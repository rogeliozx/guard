import React, { useState, useEffect } from 'react';
import Selected from './containers/Selected';
import Register from './containers/Register';
function App() {
  const [userIsSelected, setUserIsSelected] = useState(false);
  const [section, setSection] = useState('');
  const [idUser, setIdUser] = useState('');
  useEffect(() => {
  }, [userIsSelected, section]);
  return (
    <>
      {userIsSelected ? (
        <Register section={section} idUser={idUser} setReset={setUserIsSelected} />
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
