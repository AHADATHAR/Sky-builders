import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollAtmosphere from './components/ScrollAtmosphere.jsx';
import ContactCtaRouter from './components/ContactCtaRouter.jsx';
import { Toaster } from './components/ui/toaster.jsx';
import HomePage from './pages/HomePage.jsx';
import SkillsAssessmentPage2 from './pages/SkillsAssessmentPage.jsx';

const AboutPage = lazy(() => import('./pages/Aboutpage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage.jsx'));
const AustraliaAdmissionPage = lazy(() => import('./pages/AdmissionPage.jsx'));
const AustraliaVisaPage = lazy(() => import('./pages/VisaPage.jsx'));
const SkillsAssessmentPage = lazy(() => import('./pages/SkillPage.jsx'));
const Student = lazy(() => import('./pages/Student.jsx'));
const ProfessionalYear = lazy(() => import('./pages/ProfessionalYear.jsx'));
const NaatiCCL = lazy(() => import('./pages/NaatiCCL.jsx'));
const PTEPreparation = lazy(() => import('./pages/PtePrepration.jsx'));
const StudentAccommodationPage = lazy(() => import('./pages/StudentAccommodationPage.jsx'));
const OBANursesPage = lazy(() => import('./pages/OBANursesPage.jsx'));
const TaxReturnPage = lazy(() => import('./pages/TaxReturnPage.jsx'));
const VisaPage485 = lazy(() => import('./pages/visapage/Visa485.jsx'));
const StudentVisa500 = lazy(() => import('./pages/visapage/VisapageSubclass.jsx'));
const FamilyVisa = lazy(() => import('./pages/visapage/FamilyVisa.jsx'));
const SkilledVisa189 = lazy(() => import('./pages/visapage/StudentSkilledVisa.jsx'));
const SkilledVisa190 = lazy(() => import('./pages/visapage/SkilledNominatedVisa.jsx'));
const SkilledVisa887 = lazy(() => import('./pages/visapage/Skilledregionalvisa.jsx'));
const VisaLandingPage = lazy(() => import('./pages/visapage/ProfessionalVisa.jsx'));
const EmployerSponsoredVisaPage = lazy(() => import('./pages/visapage/Employee.jsx'));
const ParentVisa103 = lazy(() => import('./pages/visapage/ParentsVisa.jsx'));
const ChildVisaPage = lazy(() => import('./pages/visapage/ChildVisa.jsx'));
const GlobalTalentProgram = lazy(() => import('./pages/visapage/GlobalVisa.jsx'));
const TrainingVisaPage = lazy(() => import('./pages/visapage/TrainingVisa.jsx'));
const TemporarySkillShortageVisa = lazy(() => import('./pages/visapage/TempeorySkillVisa.jsx'));
const TemporaryGraduateVisa = lazy(() => import('./pages/visapage/Temporarygraduatevisa.jsx'));
const PartnerVisaPage = lazy(() => import('./pages/visapage/PartnerVisa.jsx'));
const PartnerVisa820and801 = lazy(() => import('./pages/visapage/PartnerVisa820 and 801.jsx'));
const EmployerNominationVisa186 = lazy(() => import('./pages/visapage/EmployerNominationVisa186.jsx'));

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 py-16 text-center text-sm text-slate-600">
      Loading page...
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollAtmosphere />
      <ContactCtaRouter />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/addmission" element={<AustraliaAdmissionPage />} />
              <Route path="/visa" element={<AustraliaVisaPage />} />
              <Route path="/skill" element={<SkillsAssessmentPage2 />} />
              <Route path="/student" element={<Student />} />
              <Route path="/professionalYear" element={<ProfessionalYear />} />
              <Route path="/naatl" element={<NaatiCCL />} />
              <Route path="/ptePrepration" element={<PTEPreparation />} />
              <Route path="/studentAccomodation" element={<StudentAccommodationPage />} />
              <Route path="/oba" element={<OBANursesPage />} />
              <Route path="/skillassessment" element={<SkillsAssessmentPage2 />} />
              <Route path="/taxReturn" element={<TaxReturnPage />} />
              <Route path="/visa485" element={<VisaPage485 />} />
              <Route path="/visa486" element={<StudentVisa500 />} />
              <Route path="/familyVisa" element={<FamilyVisa />} />
              <Route path="/studentskillvisa" element={<SkilledVisa189 />} />
              <Route path="/skillNominatedvisa" element={<SkilledVisa190 />} />
              <Route path="/skillRegionalvisa" element={<SkilledVisa887 />} />
              <Route path="/skillWorkVisa" element={<VisaLandingPage />} />
              <Route path="/employeevisa" element={<EmployerSponsoredVisaPage />} />
              <Route path="/parentevisa" element={<ParentVisa103 />} />
              <Route path="/childvisa" element={<ChildVisaPage />} />
              <Route path="/globalTalentProgram" element={<GlobalTalentProgram />} />
              <Route path="/trainingVisa" element={<TrainingVisaPage />} />
              <Route path="/temporarySkillShortageVisa" element={<TemporarySkillShortageVisa />} />
              <Route path="/temporaryGraduateVisa" element={<TemporaryGraduateVisa />} />
              <Route path="/partnerVisaPage" element={<PartnerVisaPage />} />
              <Route path="/partnerVisa820and801" element={<PartnerVisa820and801 />} />
              <Route path="/employerNominationVisa186" element={<EmployerNominationVisa186 />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
