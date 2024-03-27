import React, { useState } from 'react';
import Select from 'react-select';
import './CreateRecords.css'
import NavBar from "../NavBar"

const Form = () => {
  const [formData, setFormData] = useState({
    date: '',
    site: '',
    location: '',
    time: '',
    plant: '',
    stage: ''
  });

  const [currentField, setCurrentField] = useState('date');
  const [tempPlant, setTempPlant] = useState('');
  const [eggColor, setEggColor] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [currentField]: e.target.value });
  };

  const handleDropdownChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    const fields = ['date', 'site', 'location', 'time', 'plant', 'stage'];
    const currentIndex = fields.indexOf(currentField);
    const nextIndex = (currentIndex + 1) % fields.length;
    setCurrentField(fields[nextIndex]);
  };

  const handlePrevious = () => {
    const fields = ['date', 'site', 'location', 'time','plant', 'stage'];
    const currentIndex = fields.indexOf(currentField);
    const previousIndex = (currentIndex - 1 + fields.length) % fields.length;
    setCurrentField(fields[previousIndex]);
  };

  const handlePlantInputChange = (e) => {
    setTempPlant(e.target.value);
  };

  const handlePlantUpdate = () => {
    setFormData({ ...formData, plant: tempPlant });
    setTempPlant('');
  };

  const handleEggColorChange = (e) => {
    setEggColor(e.target.value);
  };
  

  const plantOptions = [
    { value: 'Sisymbrium', label: 'Sisymbrium' },
    { value: 'Brassica', label: 'Brassica' },
    { value: 'Lepidium', label: 'Lepidium' },
    { value: 'Other', label: 'Other' }
  ];

  const siteOptions = [
    { value: 'Jakles Lagoon', label: 'Jakles Lagoon' },
    { value: 'Third Lagoon', label: 'Third Lagoon' },
    { value: 'Old Town Lagoon', label: 'Old Town Lagoon' },
    { value: 'Eagle Cove', label: 'Eagle Cove'},
    { value: 'Redoubt', label: 'Redoubt'},
    { value: 'Dunes', label: 'Dunes'},
    { value: 'Old Road Bed', label: 'Old Road Bed'},
    { value: 'NRCA', label: 'NRCA'},
    { value: 'South Beach', label: 'South Beach'},
    { value: 'Lambert #5', label: 'Lambert #5'},
    { value: 'Shrum', label: 'Shrum'},
    { value: 'Alaska Packers Rock', label: 'Alaska Packers Rock'},
    { value: 'Other', label: 'Other'}
  ];

  const stageOptions = [
    { value: '', label: 'Select...'},
    { value: 'egg', label: 'Egg' },
    { value: '1st instar', label: '1st Instar' },
    { value: '2nd instar', label: '2nd Instar' },
    { value: '3rd instar', label: '3rd Instar' },
    { value: '4th instar', label: '4th Instar' },
    { value: '5th instar', label: '5th Instar' },
    { value: 'pre-pupa', label: 'Pre-Pupa' },
    { value: 'pupa', label: 'Pupa' }
  ];

  return (
    <div className='container1'>
      <NavBar />
      <div className="header">
        <div className="text2">New Caterpillar</div>
      </div>
      <div>
        <label className='text'>Select Field: </label>
        <select value={currentField} onChange={(e) => setCurrentField(e.target.value)}>
          <option value="date">Date Found</option>
          <option value="site">Site Found</option>
          <option value="location">Location(UTM)</option>
          <option value="time">Time</option>
          <option value="plant">Host Plant</option>
          <option value="stage">Stage</option>
        </select>
      </div>
  
      {currentField === 'date' && (
        <div>
          <label className='text'>Date: </label>
          <input type="date" value={formData.date} onChange={handleInputChange} />
        </div>
      )}
      {currentField === 'site' && (
        <div>
          <label className='text'>Site: </label>
          <Select
            value={{ value: formData.site, label: formData.site }}
            onChange={(selectedOption) => handleDropdownChange('site', selectedOption.value)}
            options={siteOptions}
          />
        </div>
      )}
      {currentField === 'location' && (
        <div>
          <label className='text'>Location:</label>
          <input type="text" value={formData.location} onChange={handleInputChange} />
        </div>
      )}
       {currentField === 'time' && (
        <div>
          <label className='text'>Time:</label>
          <input type="time" value={formData.time} onChange={handleInputChange} />
        </div>
      )}
      {currentField === 'plant' && (
        <div>
          <label className='text'>Plant: </label>
          <select value={formData.plant} onChange={(e) => handleDropdownChange('plant', e.target.value)}>
            {plantOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {formData.plant === 'Other' && (
            <div>
              <input type="text" value={tempPlant} onChange={handlePlantInputChange} />
              <button className='button2' onClick={handlePlantUpdate}>Enter</button>
            </div>
          )}
        </div>
      )}
      {currentField === 'stage' && (
        <div>
        <label className='text'>Stage:</label>
        <select value={formData.stage} onChange={(e) => handleDropdownChange('stage', e.target.value)}>
            {stageOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
  
        {formData.stage === 'egg' && (
          <div>
            <label className='text'>Choose Egg Color:</label>
            <select value={eggColor} onChange={handleEggColorChange}>
              <option value="">Select...</option>
              <option value="blue">Blue</option>
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="orange/red">Orange/Red</option>
              <option value="brown">Brown</option>
            </select>
          </div>
        )}

        
      </div>
      )}
<div className='buttonholder1'>
      <button className='button1' onClick={handlePrevious}>Previous</button>
      <button className='button1' onClick={handleNext}>Next</button>
      </div>
      <div>
        <h2>Form Data:</h2>
        <p>Date: {formData.date}</p>
        <p>Site: {formData.site}</p>
        <p>Location: {formData.location}</p>
        <p>Time: {formData.time}</p>
        <p>Plant: {formData.plant}</p>
        <p>Stage: {formData.stage}</p>
        <p>Egg color: {eggColor}</p>
      </div>
    </div>
  );
};

export default Form;
