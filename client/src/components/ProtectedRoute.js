import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // simple guard — actual check happens in Dashboard (fetch /me)
  const token = false; // we rely on server cookie; so allow render and Dashboard will redirect if unauthorized
  return token ? children : children;
}
