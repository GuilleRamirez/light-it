import './card.scss';
import { PatientInterface } from '../../pages/patients/interface/patientInterface';
import { useState } from 'react';
import viewMoreIcon from '../../assets/viewMore.svg';
import viewLessIcon from '../../assets/viewLess.svg';
import { truncateDescription } from '../../helper/cardHelper';
import editIcon from '../../assets/edit.svg';

interface cardProps extends PatientInterface {
  setDisplayModal: (value: boolean) => void;
  setPatientData: (value: PatientInterface) => void;
}

const Card = ({
  name,
  avatar,
  description,
  website,
  id,
  setDisplayModal,
  setPatientData,
}: cardProps) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  const truncatedDescription = truncateDescription(description);

  const handleToggleDescription = () => {
    setIsTruncated(!isTruncated);
  };
  const handleEditClick = () => {
    setDisplayModal(true);
    setPatientData({ name, avatar, description, website, id });
  };
  return (
    <div className='cardWrapper'>
      <div className='cardImage'>
        <a href={website}>
          <img
            src={avatar ? avatar : 'https://placehold.co/300x300'}
            alt='avatar'
          />
        </a>
      </div>
      <div className='cardContent'>
        <div className='cardName'>{name}</div>
        <div className='cardDescription'>
          {isTruncated ? truncatedDescription : description}
        </div>
        <div className='cardActions'>
          {truncateDescription(description).length < description.length && (
            <div className='viewMore' onClick={handleToggleDescription}>
              <img
                className='viewMoreIcon'
                src={isTruncated ? viewMoreIcon : viewLessIcon}
                alt={isTruncated ? 'View More' : 'View Less'}
              />
            </div>
          )}
          <div className='editIcon' onClick={handleEditClick}>
            <img src={editIcon} alt='edit' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
