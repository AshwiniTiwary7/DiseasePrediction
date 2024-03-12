import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { Toaster } from 'react-hot-toast';

const Home = lazy(()=>import('./pages/home'));
const Login = lazy(()=>import('./pages/login'));
const Register = lazy(()=>import('./pages/register'));
const Sidebar = lazy(()=>import('./components/sidebar'));
const WelcomeMe = lazy(()=>import('./pages/WelcomeMe'));
const UserProfile = lazy(()=>import('./pages/userProfile'));
const PatientDashboard = lazy(()=>import('./pages/patientDashboard'));
const MakeDiagnosis = lazy(()=>import('./pages/makeDiagnosis'));
const DiagnosisResult = lazy(()=>import('./pages/diagnosisResult'));
const Appointments = lazy(()=>import('./pages/appointments'));
const DoctorDashboard = lazy(()=>import('./pages/doctorDashboard'));
const AppointmentApproval = lazy(()=>import('./pages/appointmentApproval'));
const DrugRecommendation = lazy(()=>import('./pages/drugRecommendation'));

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Suspense fallback={<Loader/>}><Home/></Suspense>}></Route>
            <Route path='/register' element={<Suspense fallback={<Loader/>}><Register/></Suspense>}></Route>
            <Route path='/login' element={<Suspense fallback={<Loader/>}><Login/></Suspense>}></Route>
            <Route path='/accountDetails' element={<Suspense fallback={<Loader/>}><Sidebar/></Suspense>}>
                <Route index element={<Suspense fallback={<Loader/>}><WelcomeMe/></Suspense>}></Route>
                <Route path='myDetails' element={<Suspense fallback={<Loader/>}><UserProfile/></Suspense>}></Route>
                <Route path='patientDashboard' element={<Suspense fallback={<PatientDashboard/>}><Register/></Suspense>}></Route>
                <Route path='diagnosis' element={<Suspense fallback={<Loader/>}><MakeDiagnosis/></Suspense>}></Route>
                <Route path='diagnosisResults' element={<Suspense fallback={<Loader/>}><DiagnosisResult/></Suspense>}></Route>
                <Route path='appointments' element={<Suspense fallback={<Loader/>}><Appointments/></Suspense>}></Route>
                <Route path='doctorDashboard' element={<Suspense fallback={<Loader/>}><DoctorDashboard/></Suspense>}></Route>
                <Route path='arrangeAppoint' element={<Suspense fallback={<Loader/>}><AppointmentApproval/></Suspense>}></Route>
                <Route path='drugRecommendation' element={<Suspense fallback={<Loader/>}><DrugRecommendation/></Suspense>}></Route>
            </Route>
            <Route path='*' element={<div>Component Not Found!</div>}></Route>
        </Routes>
        <Toaster/>
        </>
    );
}

export default App;
