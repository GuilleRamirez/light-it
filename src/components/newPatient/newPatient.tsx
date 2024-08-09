import './newPatient.scss';
import { PatientInterface } from '../../pages/patients/interface/patientInterface';
import { useState } from 'react';

interface NewPatientProps {
  patientData: PatientInterface;
  patients: PatientInterface[];
  setPatients: (value: PatientInterface[]) => void;
  setDisplayModal: (value: boolean) => void;
}

const NewPatient = ({
  patientData,
  patients,
  setPatients,
  setDisplayModal,
}: NewPatientProps) => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(patientData.avatar);
  const [name, setName] = useState<string>(patientData.name);
  const [website, setWebsite] = useState<string>(patientData.website);
  const [description, setDescription] = useState<string>(
    patientData.description
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('handle submit');
    e.preventDefault();
    if (!uploadedImage) {
      console.error('Please upload an image');
    } else {
      const newPatient: PatientInterface = {
        name,
        avatar: String(uploadedImage),
        description,
        website,
        id: patientData.id,
      };
      let patientExists = false;
      let newPatients: PatientInterface[] = patients.map((patient) => {
        if (patient.id === patientData.id) {
          patientExists = true;
          console.log(patientExists);
          return newPatient;
        } else {
          return patient;
        }
      });
      if (!patientExists) newPatients = [...newPatients, newPatient];

      setPatients(newPatients);
      setDisplayModal(false);
    }
  };
  const handleFileInputClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='formWrapper'>
        <div className='patientWrapper'>
          <div className='imageWrapper'>
            {uploadedImage && (
              <img src={uploadedImage as string} alt='Uploaded' />
            )}
            <input
              type='file'
              id='fileInput'
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div className='patientContentWrapper'>
            <div className='textInput'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                required
              />
            </div>
            <div className='textInput'>
              <input
                type='text'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder='Website'
                required
              />
            </div>
            <div className='textInput'>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
                required
              />
            </div>
          </div>
        </div>
        <div className='formButtonWrapper'>
          <button
            className='button'
            onClick={handleFileInputClick}
            type='button'
          >
            Choose File
          </button>
          <button className='button' type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPatient;
