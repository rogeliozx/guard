import React, { useState, useEffect, useCallback } from 'react';
import ButtonGrid from '../components/selected/ButtonsGrid';
import { axios } from '../services';
import Loading from '../components/ui/Loading';

const SelectedSections = ({ setGetUsers, setIsSelected,setSection }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const loadSections = useCallback(async () => {
    try {
      const {
        data: {  sections },
      } = await axios.get('all-names');
      setSections(sections);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const loadSectionsUsers = useCallback(async (section) => {
    try {
      const {
        data: { succes, users },
      } = await axios.get(`users-sections?section=${section}`);
      if (!succes) {
        console.log('entre');
      }
      setSection(section)
      setGetUsers(users);
      setIsSelected(true);
    } catch (error) {
      console.log(error);
    }
  }, [setGetUsers,setSection,setIsSelected]);
  useEffect(() => {
    loadSections();
    setIsLoading(false);
  }, [loadSections]);
  useEffect(() => {}, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ButtonGrid idSections={sections} handleClick={loadSectionsUsers} />
      )}
    </>
  );
};

export default SelectedSections;
