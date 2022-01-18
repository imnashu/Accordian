import React from 'react';

const Accordion = ({ title, content }) => {
  //const [isActive, setIsActive] = useState(false);

  return (
    <div className="viewport">
        <h1>Accordian 1st assignment</h1>
      <div className="Maindiv">
        <div>{title}</div>
        <div>{'-'}</div>
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

export default Accordion;