import React, { useState, useEffect, useCallback } from 'react';
import ButtonGrid from '../components/selected/ButtonsGrid';
import Loading from '../components/ui/Loading';
const SelectedUsers = ({ getUsers,setUserIsSelected,setIdUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const createVisits = useCallback((userId) => {
    setIdUser(userId)
    setUserIsSelected(true)
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {}, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ButtonGrid idSections={getUsers} users handleClick={createVisits} />
      )}
    </>
  );
};

export default SelectedUsers;
