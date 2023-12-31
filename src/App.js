import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import SmsForm from "./components/SmsForm";
import Footer from "./components/Footer";
import EmailForm from "./components/Emailform";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route path="/sms" component={SmsForm} />
        <Route path="/email" component={EmailForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
