import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AppLayout } from "./components/site/app-layout";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import AuthPage from "./routes/auth";
import CaseStudiesPage from "./routes/case-studies";
import CheckoutPage from "./routes/checkout";
import ConnectedSystemsPage from "./routes/connected-systems";
import ContactPage from "./routes/contact";
import DashboardPage from "./routes/dashboard";
import IndustriesPage from "./routes/industries";
import PricingPage from "./routes/pricing";
import ResourcesPage from "./routes/resources";
import WorkforceBuilderPage from "./routes/workforce-builder";
import EmployeeListingPage from "./routes/ai-employees/index";
import EmployeeDetailPage from "./routes/ai-employees/$slug";

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
