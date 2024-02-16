import React, { useState } from 'react';

const checkboxesData = [
  {
    name: 'Category 1',
    min: 1,
    max: 2,
    children: [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: 'Option 2',
        value: 'option2'
      },
      {
        label: 'Option 3',
        value: 'option3'
      }
    ]
  },
  {
    name: 'Category 2',
    min: 0,
    max: 1,
    children: [
      {
        label: 'Option 4',
        value: 'option4'
      },
      {
        label: 'Option 5',
        value: 'option5'
      }
    ]
  }
];

function CheckboxForm() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (category, value) => {
    const newCheckedItems = { ...checkedItems, [category]: value };
    setCheckedItems(newCheckedItems);
  };

  const isFormValid = () => {
    for (const { name, min, max } of checkboxesData) {
      const checkedCount = checkedItems[name] ? Object.keys(checkedItems[name]).length : 0;
      if (checkedCount < min || checkedCount > max) {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      {checkboxesData.map((categoryData) => (
        <div key={categoryData.name}>
          <h3>{categoryData.name}</h3>
          {categoryData.children.map((checkbox) => (
            <label key={checkbox.value}>
              <input
                type="checkbox"
                checked={checkedItems[categoryData.name]?.[checkbox.value]}
                onChange={(e) => handleCheckboxChange(categoryData.name, {
                  ...checkedItems[categoryData.name],
                  [checkbox.value]: e.target.checked
                })}
              />
              {checkbox.label}
            </label>
          ))}
        </div>
      ))}
      <p>{isFormValid() ? 'Form is valid' : 'Form is invalid'}</p>
    </div>
  );
}

export default CheckboxForm;