import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.length > 0) {
          setCategories((categories) => [value, ...categories]);
        }
        setValue('');
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="value"
        id="value"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
