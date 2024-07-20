import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup, Main, Layout, NewTeam } from './pages';

const App = () => {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newTeam" element={<NewTeam />} />
        </Route>
      </Routes>
    </Router>
  );

};

export default App;
