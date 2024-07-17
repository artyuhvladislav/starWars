import { useEffect, useState } from "react";


// When something can be calculated from the existing props or state,
//  don’t put it in state. Instead, calculate it during rendering.


export function Effect1() {

  // ============= Error redundant rerender from effect 



  // const [fName, setFName] = useState('Rayan');
  // const [lName, setLName] = useState('Gosling');
  // const [fullName, setFullName] = useState(null);

  // console.log('Effect component rerender');

  // useEffect(() => {
  //   setFullName(fName + ' ' + lName);

  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, [fName, lName]);

  // return (
  //   <h1>{fullName}</h1>
  // );

  // instead of use const fullName inside component

  const [fName, setFName] = useState('Rayan');
  const [lName, setLName] = useState('Gosling');

  const fullName = fName + ' ' + lName;

  console.log('Effect component rerender');

  return (
    <h1>{fullName}</h1>
  );
}