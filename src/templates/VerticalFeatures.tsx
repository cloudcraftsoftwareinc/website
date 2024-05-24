import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const onlinePresence = `
Ensure that your online presence is optimized for lead generation and online reputation. Customers finding you online are comparing you to your competitors, and they want to know how to get ahold of you, and whether you are reputable. We optimize your online footprint to maximize your presence, but also maintain it without you having to think about it.
`;

const automation = `
We identify the pain points within your business processes. Maybe you're spending all your time with wasted calls, or missed appointment bookings. Repetitive manual processes are the easiest to target for process automation, and utilizing modern technology like ChatGPT can make a huge impact towards your bottom line, freeing up your time to focus on your business.
`;

const intake = `
We reduce time and effort required to qualify your leads and onboard your clients through inbox consolidation, data intake automation, and lead qualification. Spend more focused time with leads that match your business and less time managing inboxes and sorting out forms and scheduling. Our service is designed to reduce your hands-on time with customers while simultaneously providing a better customer experience.
`;

const software = `
Self-booking appointment calendars, automated SMS reminders & rescheduling options, and chat automations can greatly improve the customer experience and reduce your hands-on time with customers giving you more freedom to focus on doing great work. 
`;

const VerticalFeatures = () => (
  <Section
    title="Our Services"
    id="services"
    description="We help our customers get the most out of their online presence, lead generation, and technology footprint to boost revenue, reduce wasted time, and grow their business."
  >
    <VerticalFeatureRow
      title="Online presence management"
      description={onlinePresence}
      image="/assets/images/strategy-and-ai.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Process optimization"
      description={automation}
      image="/assets/images/automate-everything.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Intake consolidation"
      description={intake}
      image="/assets/images/achieve-your-goals.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Self-serve systems"
      description={software}
      image="/assets/images/software-development.png"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
