

export const textLinks = [
  { title: "Features", id: "features" },
  { title: "How it works", id: "how-it-works" },
  { title: "Pricing", id: "pricing" },
  { title: "FAQ", id: "faq" },
  { title: "Contact Us", url: "/contact-us" },
];

export const footerRoutes = [
  {
    title: "Home",
    links: [
      { title: "About", id: "#" },
      { title: "Key Features", id: "features" },
      { title: "How it Works", id: "how-it-works" },
      { title: "Pricing", id: "pricing" },
      { title: "Log in", url: import.meta.env.VITE_DEVELOPMENT_FRONTEND_URL },
    ],
  },
  {
    title: "Help",
    links: [
      { title: "FAQ", id: "faq" },
      { title: "Contact Us", url: "/contact-us" },
    ],
  },
];

export const roleOptions = [
  { value: "director/owner", label: "Director/Owner" },
  { value: "manager", label: "Manager" },
  { value: "administrator", label: "Administrator" },
  { value: "practitioner", label: "Practitioner" },
  { value: "childminder", label: "Childminder" },
  { value: "parent", label: "Parent" },
  { value: "other", label: "Other" },
];

export const subscriptionTypes = [
  { value: "Childminders Package - £25/month", label: "Childminders Package - £25/month" },
  { value: "Nursery Package - £45/month", label: "Nursery Package - £45/month" },
  { value: "Nursery Package - £85/month", label: "Nursery Package - £85/month" },
  { value: "Childminders Package - £250/year", label: "Childminders Package - £250/year" },
  { value: "Nursery Package - £450/year", label: "Nursery Package - £450/year" },
  { value: "Nursery Package - £850/year", label: "Nursery Package - £850/year" }
];
