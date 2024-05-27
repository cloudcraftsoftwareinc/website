import { VerticalFeatureRowLanding } from '@/feature/VerticalFeatureRowLanding';
import { Layout } from '@/layout/Layout';
import { HeroLanding } from '@/templates/HeroLanding';

import { Section } from '../layout/Section';

const featureOneItems = [
  'Timely, relevant emails',
  'Automated & personalized SMS messages',
  'Real-time, responsive communication',
  'Chat automations & workflows',
  'Single, consolidated inbox across platforms',
];

const featureTwoItems = [
  'Manage detailed customer records & preferences',
  'Personalize & automate follow-up messages',
  'Target marketing & communication efforts',
  'Maintain hands-on & personalized experience',
];

const featureThreeItems = [
  'Convenient appointment scheduling',
  'Reduce no-shows with automated reminders',
  'Seamless scheduling & calendar integration',
  'Build reputation with automated reviews',
  'Monitor & repond to reviews quickly',
];

const featureFourItems = [
  'Create smooth & intuitive buying processes',
  'Optimize customer pathways with A/B testing',
  'Monitor & improve interactions',
  'Integrate with existing analytics tooling',
];

const description = `Imagine having a single, powerful platform that enhances every interaction with your customers. How much more satisfied would your clients be with a seamless appointment booking system, responsive customer support, and personalized marketing automation? Picture a CRM that not only keeps track of every customer detail but also helps you build stronger relationships. Envision a service that tailors every touchpoint to your unique business needs, ensuring exceptional customer care and loyalty. Curious about how we can elevate your customer experience and drive your business success? Here are some of the features we can tailor to your business...`;

export default function Reputation() {
  return (
    <Layout>
      <HeroLanding
        title="Create"
        subTitle="happy customers."
        byline="Free up time to focus on what matters for your business."
      />

      <div className="text-gray-900 antialiased">
        <Section
          title="Improve Customer Experience"
          description={description}
          align="left"
        >
          <VerticalFeatureRowLanding
            title="Enhance Communication & Engagement"
            items={featureOneItems}
            image="/assets/images/feature-simplify-customer-management.png"
            imageAlt="First feature alt text"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Personalize Service & Relationship"
            items={featureTwoItems}
            imageAlt="Second feature alt text"
            image="/assets/images/feature-marketing-on-autopilot.png"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
          <VerticalFeatureRowLanding
            title="Streamline Scheduling & Reputation Management"
            items={featureThreeItems}
            image="/assets/images/software-development.png"
            imageAlt="Third feature alt text"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Streamline Customer Journeys and Data-Driven Insights"
            items={featureFourItems}
            image="/assets/images/strategy-and-ai.png"
            imageAlt="Third feature alt text"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
        </Section>
      </div>
    </Layout>
  );
}
