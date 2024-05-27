import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const businessProcessAutomation = `
Automate repetitive tasks and streamline your business processes with our expert automation services. Save time and reduce errors with tailored workflows.
`;

const reputationManagement = `
Build trust and differentiate your business. We will help you optimize your online presence and maintain to make you stand out from the crowd.
`;

const systemConsolidation = `
Manage your business from one place. Running a separate CRM, messaging platforms, campaign tooling, document & contract management, invoicing and payment systems is wasting your time.
`;

const software = `
Give your customers the gift of instant gratification. Self-serve appointment booking, notifications, chat automations and AI-powered support put the power in your customers hands. 
`;

const VerticalFeatures = () => (
  <Section
    title="Website and Automated Solutions for Small Business"
    id="services"
    description="All-in-one platform for customer management, online reputation, booking, documents, invoicing and more. Save time and money with tailored solutions that are right for your business."
  >
    <VerticalFeatureRow
      title="Boost Your Productivity"
      description={businessProcessAutomation}
      image="/assets/images/automate-everything.png"
      imageAlt="First feature alt text"
      target="/boost-your-business-productivity"
      targetText="Find out more"
      badge={true}
    />
    <VerticalFeatureRow
      title="Enhance Your Online Presence"
      description={reputationManagement}
      imageAlt="Second feature alt text"
      image="/assets/images/achieve-your-goals.png"
      target="/enhance-your-online-presence"
      targetText="Find out more"
      reverse
      badge={true}
    />
    <VerticalFeatureRow
      title="Simplify Your Operations"
      description={systemConsolidation}
      image="/assets/images/software-development.png"
      imageAlt="Third feature alt text"
      target="/simplify-your-operations"
      targetText="Find out more"
      badge={true}
    />
    <VerticalFeatureRow
      title="Improve Your Customer Experience"
      description={software}
      image="/assets/images/strategy-and-ai.png"
      imageAlt="Third feature alt text"
      target="/improve-customer-experience"
      targetText="Find out more"
      reverse
      badge={true}
    />
  </Section>
);

export { VerticalFeatures };
