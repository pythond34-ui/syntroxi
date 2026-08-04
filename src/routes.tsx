import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AppLayout } from "./components/site/app-layout";

const HomePage = lazy(() => import("./routes/index"));
const AboutPage = lazy(() => import("./routes/about"));
const AuthPage = lazy(() => import("./routes/auth"));
const CaseStudiesPage = lazy(() => import("./routes/case-studies"));
const CheckoutPage = lazy(() => import("./routes/checkout"));
const ConnectedSystemsPage = lazy(() => import("./routes/connected-systems"));
const ContactPage = lazy(() => import("./routes/contact"));
const DashboardPage = lazy(() => import("./routes/dashboard"));
const IndustriesPage = lazy(() => import("./routes/industries"));
const PricingPage = lazy(() => import("./routes/pricing"));
const ResourcesPage = lazy(() => import("./routes/resources"));
const WorkforceBuilderPage = lazy(() => import("./routes/workforce-builder"));
const EmployeeListingPage = lazy(() => import("./routes/ai-employees/index"));
const EmployeeDetailPage = lazy(() => import("./routes/ai-employees/$slug"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "case-studies", element: <CaseStudiesPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "connected-systems", element: <ConnectedSystemsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "industries", element: <IndustriesPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "workforce-builder", element: <WorkforceBuilderPage /> },
      { path: "ai-employees", element: <EmployeeListingPage /> },
      { path: "ai-employees/:slug", element: <EmployeeDetailPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
