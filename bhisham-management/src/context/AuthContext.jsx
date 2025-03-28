import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();
const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      console.log('stored user', JSON.parse(storedUser))
      const userNew = JSON.parse(storedUser)
      setUser(userNew.data);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      // In a real app, this would be an API call
      console.log('In the user login')
      const userData = JSON.stringify({login_id: username, password: password})
      console.log('user data', userData)
      const response = await axios.post(`https://api.gryfontech.com/v1/api/user/login`,userData , {
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log('response', response)
      const user = response?.data?.data;
      const setStorage = response?.data
      console.log('user', user)
      // For demo purposes, we'll simulate a successful login
      // const user = { 
      //   id: 1, 
      //   name: 'Admin User', 
      //   username, 
      //   role: 'admin',
      //   token: 'sample-jwt-token'
      // }; 
      
      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(setStorage));
      setUser(user);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => !!user;

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Auth guard component
export const RequireAuth = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated() ? children : null;
};