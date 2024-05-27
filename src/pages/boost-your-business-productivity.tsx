import { VerticalFeatureRowLanding } from '@/feature/VerticalFeatureRowLanding';
import { Layout } from '@/layout/Layout';
import { Section } from '@/layout/Section';
import { HeroLanding } from '@/templates/HeroLanding';

const description = `Imagine having a single, powerful platform that simplifies and enhances every aspect of your business operations. How much more could you achieve with seamless customer relationship management (CRM), effortless appointment booking software, and one inbox to rule them all? Picture a service tailored to your unique business needs, designed to save you both time and money. Curious about how we can transform your business and take productivity to the next level? Here are some of the features we can tailor to your business...`;

const featureOneItems = [
  'Centralized customer database & CRM',
  'Easy leads tracking & opportunity management',
  'Automated SMS campaigns and outreach',
  'Trigger automated review requests',
  'Monitor & respond to online reviews',
];

const featureTwoItems = [
  'Automated email, drip & social campaigns',
  'Simplified funnel & pipeline management',
  'Automated follow-up sequences',
  'Easy-to-create landing pages & A/B testing',
];

const featureThreeItems = [
  'Automate booking, scheduling & reminders',
  'Customizable workflows for automating repetitive tasks',
  'Call tracking & campaign monitoring',
  'Third-party integrations',
];

const featureFourItems = [
  'Detailed insights and reports on business performance',
  'Track key metrics and make data-driven decisions',
  'Course and membership site management',
  'Drag-and-drop website builder',
  'Integrated forms & booking widgets',
];

export default function Reputation() {
  return (
    <Layout>
      <HeroLanding
        title="Do more"
        subTitle="with less."
        byline="Free up time to focus on what matters for your business."
        image="/assets/images/boost-your-productivity-banner.png"
      />

      <div className="text-gray-900 antialiased">
        <Section
          title="All-in-one tailored productivity suite"
          description={description}
          align="left"
        >
          <VerticalFeatureRowLanding
            title="Simplify customer management"
            items={featureOneItems}
            image="/assets/images/feature-simplify-customer-management.png"
            imageAlt="Simplify customer management with an integrated CRM"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Marketing on Autopilot"
            items={featureTwoItems}
            imageAlt="Make marketing a breeze with automation"
            image="/assets/images/feature-marketing-on-autopilot.png"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
          <VerticalFeatureRowLanding
            title="Reduce Wasted Time & Effort"
            items={featureThreeItems}
            image="/assets/images/simplify-your-operations.png"
            imageAlt="Simplify your operations"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Improve Insights & Reputation"
            items={featureFourItems}
            image="/assets/images/improve-insights-reputation.png"
            imageAlt="Improve reputation to build trust with your customers"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
        </Section>
      </div>
    </Layout>
  );
}
