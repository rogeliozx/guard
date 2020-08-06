import React, { useState, useEffect } from 'react';
import SelectedSections from '../views/SelectedSections';
import SelectedUsers from '../views/SelectedUsers';

const Selected = ({ setUserIsSelected, setIdUser,setSection }) => {
  const [sectionIsSelected, setSectionIsSelected] = useState(false);
  const [getUsers, setGetUsers] = useState([]);
  useEffect(() => {}, [sectionIsSelected]);
  return (
    <>
      {sectionIsSelected ? (
        <SelectedUsers
          setIdUser={setIdUser}
          getUsers={getUsers}
          setUserIsSelected={setUserIsSelected}
          setIsSelected={setSectionIsSelected}
        />
      ) : (
        <SelectedSections
        setSection={setSection}
          setGetUsers={setGetUsers}
          setIsSelected={setSectionIsSelected}
        />
      )}
    </>
  );
};

export default Selected;
