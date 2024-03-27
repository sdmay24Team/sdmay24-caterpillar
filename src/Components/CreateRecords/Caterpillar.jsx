import React, { useState } from 'react';
import Select from 'react-select';
import './CreateRecords.css'
import NavBar from "../NavBar"

const Form = () => {
  const [formData, setFormData] = useState({
    date: '',
    site: '',
    location: '',
    plant: ''
  });

  const [currentField, setCurrentField] = useState('date');
  const [tempPlant, setTempPlant] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [currentField]: e.target.value });
  };

  const handleDropdownChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    const fields = ['date', 'site', 'location', 'plant'];
    const currentIndex = fields.indexOf(currentField);
    const nextIndex = (currentIndex + 1) % fields.length;
    setCurrentField(fields[nextIndex]);
  };

  const handlePrevious = () => {
    const fields = ['date', 'site', 'location', 'plant'];
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

  return (
    <div className='container1'>
      <NavBar />
      <div>
        <label className='text'>Select Field: </label>
        <select value={currentField} onChange={(e) => setCurrentField(e.target.value)}>
          <option value="date">Date Found</option>
          <option value="site">Site Found</option>
          <option value="location">Location(UTM)</option>
          <option value="plant">Host Plant</option>
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
          <input type="text" value={formData.age} onChange={handleInputChange} />
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
<div className='buttonholder1'>
      <button className='button1' onClick={handlePrevious}>Previous</button>
      <button className='button1' onClick={handleNext}>Next</button>
      </div>
      <div>
        <h2>Form Data:</h2>
        <p>Date: {formData.date}</p>
        <p>Site: {formData.site}</p>
        <p>Location: {formData.location}</p>
        <p>Plant: {formData.plant}</p>
      </div>
    </div>
  );
};

export default Form;
