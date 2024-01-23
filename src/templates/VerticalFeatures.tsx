import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const techInsights = `
Navigate the ever-evolving tech landscape with guidance from our experts.
Disruption has never looked like it does today, with AI technology every
business has the opportunity to grow like never before. We help transform
complex information into actionable insights, making your business more agile,
more efficient, and more profitable. 
`;

const automation = `
We help you integrate cutting-edge automation solutions across your business
processes, reducing costs, and freeing your team to focus on growth. From
simple tasks to complex workflows, embrace the transformative power of
automation for a smarter, faster, and more scalable business model.
`;

const cto = `
We offer you the strategic leadership and technical expertise of a Chief
Technology Officer without the full-time executive commitment. We provide
high-level oversight and direction for your tech initiatives, ensuring
that your technology strategy aligns with business goals, drives innovation,
and delivers sustainable growth. With our fractional model, gain the insights
and experience of a seasoned CTO, scaled to suit your business needs and budget.
`;

const software = `
High-leverage actions are at the core of our strategy. We focus on robust software
development using cutting-edge tools to drive down the cost of delivering new
features to production. Starting with a focus on strategy, and leveraging No-code,
Low-code, Serverless and AI-assisted technologies, we can bring your idea to life faster, often
in days or weeks rather than months.
`;

const VerticalFeatures = () => (
  <Section
    title="Work smarter, not harder"
    description="We're not your typical technology company, we look into the future and bring high-leverage strategies and solutions to give you more time to work on what matters."
  >
    <VerticalFeatureRow
      title="Technology Insights"
      description={techInsights}
      image="/assets/images/strategy-and-ai.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Everything Automation"
      description={automation}
      image="/assets/images/automate-everything.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Fractional CTO"
      description={cto}
      image="/assets/images/achieve-your-goals.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Non-traditional Software Engineering"
      description={software}
      image="/assets/images/software-development.png"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
