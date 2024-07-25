
import './App.css';
import { useState } from 'react';
import BudgetSummary from './components/BugetSummary';
import IncomeExpenses from './components/IncomeExpenses';
import ReviewSave from './components/ReviewSave';
import UserInformation from './components/UserInformation';

function App() {

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currency: 'USD',
    income: '',
    expenses: [],
  });

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <UserInformation formData={formData} setFormData={setFormData} />;
      case 1:
        return <IncomeExpenses formData={formData} setFormData={setFormData} />;
      case 2:
        return <BudgetSummary formData={formData} />;
      case 3:
        return <ReviewSave formData={formData} setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };


  return (
    <div className="App">
    {renderStep()}
    <div className="buttons">
      {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
      {currentStep < 3 && <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
    </div>
  </div>
  );
}

export default App;
