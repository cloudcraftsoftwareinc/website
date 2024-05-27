import { VerticalFeatureRowLanding } from '@/feature/VerticalFeatureRowLanding';
import { Layout } from '@/layout/Layout';
import { HeroLanding } from '@/templates/HeroLanding';

import { Section } from '../layout/Section';

const description = `Imagine having a single, powerful platform that elevates every aspect of your online presence. How much more impactful could your brand be with a stunning website built specifically for small businesses, optimized for both aesthetics and functionality? Picture seamless web development and design services tailored to your unique needs, supported by reliable small business website hosting. Envision a marketing automation system that drives engagement and boosts your digital footprint effortlessly. Curious about how we can transform your online presence and drive your business growth? Here are some of the features we can tailor to your business...`;

const featureOneItems = [
  'Simple drag & drop interface',
  'Forms, booking widgets, customizable templates',
  'Landing pages & sales funnels',
  'A/B testing for optimization',
];

const featureTwoItems = [
  'Centralized customer database',
  'Easy customer interaction management',
  'Automated SMS & voicemail drops',
  'Google Review requests & monitoring',
];

const featureThreeItems = [
  'Automate email campaigns',
  'Drip marketing sequences',
  'Social media scheduling & messaging',
  'Automated follow-up & pipeline management',
];

const featureFourItems = [
  'Automated appointment booking & scheduling',
  'Calendar integration',
  'Automated reminders & rescheduling',
  'Call tracking & workflow automation',
  'Detail insights & reporting',
];

export default function Reputation() {
  return (
    <Layout>
      <HeroLanding
        title="Reputation"
        subTitle="matters."
        byline="Build an online presence that sets you apart from the crowd."
        image="/assets/images/enhance-online-presence-banner.png"
      />

      <div className="text-gray-900 antialiased">
        <Section
          title="Enhance Your Online Presence"
          description={description}
          align="left"
        >
          <VerticalFeatureRowLanding
            title="Website & Landing Page Management"
            items={featureOneItems}
            image="/assets/images/website-landing-page.png"
            imageAlt="Simple to use websites and landing pages"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Customer Engagement & Relationship Management"
            items={featureTwoItems}
            imageAlt="Dead-simple CRM system"
            image="/assets/images/feature-marketing-on-autopilot.png"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
          <VerticalFeatureRowLanding
            title="Marketing & Sales Automation"
            items={featureThreeItems}
            image="/assets/images/marketing-sales-automation.png"
            imageAlt="Marketing & sales automations"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Operational Efficiency & Analytics"
            items={featureFourItems}
            image="/assets/images/operational-efficiency-analytics.png"
            imageAlt="Build efficiency right into your operations"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
        </Section>
      </div>
    </Layout>
  );
}
