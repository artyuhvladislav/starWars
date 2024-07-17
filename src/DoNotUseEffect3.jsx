import { useEffect, useState, useMemo } from "react";



//Resetting all state when a prop changes 


export function Effect3({ id }) {

  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [id]);

  return (
    <div>
      {comment}
    </div>
  );
}

function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
