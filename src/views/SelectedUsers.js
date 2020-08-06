import React, { useState, useEffect, useCallback } from 'react';
import ButtonGrid from '../components/selected/ButtonsGrid';
import Loading from '../components/ui/Loading';
import Butons from '../components/ui/Butons';
const SelectedUsers = ({ getUsers,setUserIsSelected,setIdUser,setIsSelected }) => {
  const [isLoading, setIsLoading] = useState(true);
  const createVisits = useCallback((userId) => {
    setIdUser(userId)
    setUserIsSelected(true)
  }, [setIdUser,setUserIsSelected]);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {}, [isLoading,]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ButtonGrid idSections={getUsers} users handleClick={createVisits} />
      )}
      <Butons backFunction={setIsSelected}/>
    </>
  );
};

export default SelectedUsers;
