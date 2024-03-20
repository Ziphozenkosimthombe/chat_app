import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const UserSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ fullName, username, password, confirmPassword, gender}) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      });
      const data = await res.json();
      if (data.error){
        throw new Error(data.error);
      }
      //localstorage
      localStorage.setItem('chat-user', JSON.stringify(data))
      //context
      setAuthUser(data);
      
      toast.success("SignUp Successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signup};
};

export default UserSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill all the fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters long');
    return false;
  }

  return true;
}
