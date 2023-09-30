import { useEffect, useState } from 'react';

export const PostForm = ({ data, onFormSubmit, submitBtnText }) => {
  const initialFormData = { id: 0, content: '' };
  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.content.trim()) {
      return;
    }
    onFormSubmit(formData);
    setFormData(initialFormData);
  };

  const onInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <FormTextarea
        onInputChange={onInputChange}
        value={formData.content}
        name="content"
        placeholder="Написать какой-нибудь глубокомысленный пост..."
      />
      <button className="submit" onClick={onSubmit}>
        {submitBtnText}
      </button>
    </form>
  );
};

const FormTextarea = ({ name, onInputChange, value, placeholder }) => {
  const onChange = ({ target: { value } }) => {
    onInputChange(name, value);
  };

  return (
    <textarea
      className="form_textarea"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
