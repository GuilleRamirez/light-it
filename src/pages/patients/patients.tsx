import { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import { PatientInterface } from './interface/patientInterface';
import { fetchPatients } from '../../handlers/patients';
import './patients.scss';
import NewPatient from '../../components/newPatient/newPatient';

const Patient = () => {
  const [patients, setPatients] = useState<PatientInterface[]>([]);
  const [patientData, setPatientData] = useState<PatientInterface>({
    name: '',
    avatar: '',
    description: '',
    website: '',
    id: -1,
  });
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchPatient = async () => {
      const data = await fetchPatients();
      setPatients(data);
    };
    fetchPatient();
  }, []);

  const addNewPatient = () => {
    setPatientData({
      name: '',
      avatar: '',
      description: '',
      website: '',
      id: Number(patients[patients.length - 1].id) + 1,
    });
    console.log(patients);
    console.log(patientData.id);
    setDisplayModal(true);
  };

  return (
    <div>
      <button onClick={addNewPatient} className='button'>
        Add New Patient
      </button>
      <div className='patientWrapper'>
        {patients.map((patient: PatientInterface) => (
          <Card
            key={patient.id}
            name={patient.name}
            avatar={patient.avatar}
            description={patient.description}
            website={patient.website}
            id={patient.id}
            setDisplayModal={setDisplayModal}
            setPatientData={setPatientData}
          />
        ))}
      </div>
      {displayModal && (
        <div className='modal-overlay' onClick={() => setDisplayModal(false)}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <NewPatient
              patientData={patientData}
              patients={patients}
              setPatients={setPatients}
              setDisplayModal={setDisplayModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient;
