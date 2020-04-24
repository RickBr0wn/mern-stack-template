const useAuthContext = {
  setUser: jest.fn(() => console.log('setUser')),
  setIsAuthenticated: jest.fn(() => console.log('setIsAuthenticated')),
  setMessage: jest.fn(() => console.log('setMessage')),
}

export { useAuthContext }
