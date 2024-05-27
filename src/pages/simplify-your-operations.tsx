import { Layout } from '@/layout/Layout';
import { HeroLanding } from '@/templates/HeroLanding';

import { VerticalFeatureRowLanding } from '../feature/VerticalFeatureRowLanding';
import { Section } from '../layout/Section';

const description = `Imagine having a single, powerful platform that streamlines every aspect of your daily operations, minimizing wasted time and effort. How much more efficient could your business be with automated marketing tools, a shared calendar app to keep your team in sync, and an all-in-one customer care system? Picture an invoice builder that simplifies billing and payments, and a CRM that keeps all your customer information organized and accessible. Curious about how we can optimize your workflow and enhance productivity? Here are some of the features we can tailor to your business....`;

const featureOneItems = [
  'Simple, integrated CRM system',
  'Unified customer management & leads database',
  'Two-way SMS messaging & campaigns',
  'Automated review requests & management',
];

const featureTwoItems = [
  'Email campaigns & newsletters',
  'Social media automation & messaging',
  'Consolidated inbox across Messenger, WhatsApp, Tiktok, SMS, Email and more',
  'Reporting and insights',
];

const featureThreeItems = [
  'Online booking',
  'Automated reminders & rescheduling',
  'Calendar integration',
  'Custom workflows for task automation',
];

const featureFourItems = [
  'Performance analytics',
  'Key metrics tracking',
  'Call monitoring & recording',
  'Campaign attribution',
];

export default function Reputation() {
  return (
    <Layout>
      <HeroLanding
        title="Smarter,"
        subTitle="Not harder."
        byline="Build an online presence that sets you apart from the crowd."
        image="/assets/images/simplify-your-operations-banner.png"
      />

      <div className="text-gray-900 antialiased">
        <Section
          title="Reduce wasted time and effort"
          description={description}
          align="left"
        >
          <VerticalFeatureRowLanding
            title="Simplify Customer Relationship & Engagement"
            items={featureOneItems}
            image="/assets/images/simplify-customer-management.png"
            imageAlt="Keep all your customers in one place"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Automate Marketing & Sales Efforts"
            items={featureTwoItems}
            imageAlt="Put your marketing on autopilot so you can focus on your business"
            image="/assets/images/feature-marketing-on-autopilot.png"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
          <VerticalFeatureRowLanding
            title="Optimize Scheduling & Workflows"
            items={featureThreeItems}
            image="/assets/images/automate-workflows.png"
            imageAlt="Self-booking options that put your customer first"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
          />
          <VerticalFeatureRowLanding
            title="Consolidate Insights & Communication"
            items={featureFourItems}
            image="/assets/images/improve-insights-reputation.png"
            imageAlt="Reporting and insights in to your business operations"
            target="https://calendar.cloudcraft.software/introduction-appointment"
            targetText="Request a demo"
            reverse
          />
        </Section>
      </div>
    </Layout>
  );
}
