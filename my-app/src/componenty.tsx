import React, { FunctionComponent } from 'react';

interface ComponentyProps {
  name?: string,
  age: number
}

const Componenty: FunctionComponent<ComponentyProps> = ({ name, age }) => {

  return (
    <>
      <div>name: { name }</div>
      <div>age: { age }</div>
    </>
  );
}

export default Componenty;