import { useState,useEffect } from 'react'

function User() {
  // const [message, setMessage] = useState('');
  // useEffect(() =>{
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // },[])
  return (
    <div className="User">
      <h1>ユーザー個人の画面</h1>
      {/* <p>{ message }</p> */}
    </div>
  );
}

export default User;
