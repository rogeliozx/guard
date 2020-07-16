import React, { useState, useEffect } from 'react';
import { axios } from '../services';
import Reason from '../views/Reason';
import Pictures from '../views/Pictures';
import Loading from '../components/ui/Loading';
const Register = ({ section, idUser,setReset }) => {
  const [dataVisit, setDataVisit] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const createVisit = async (reason) => {
    setLoading(true);
    try {
      const {
        data: { picture },
      } = await axios.post('new-visit', {
        codeHouse: idUser,
        section,
        reason,
      });
      console.log(picture);
      setDataVisit(picture);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [dataVisit]);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      {dataVisit ? (
        <Pictures picture={dataVisit} setReset={setReset}/>
      ) : (
        <Reason createVisit={createVisit} />
      )}
    </>
  );
};

export default Register;
