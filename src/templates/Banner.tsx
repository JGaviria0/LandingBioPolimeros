import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Si tienes alguna duda estaremos felices de resolverla."
      subtitle="Estamos para ayudarte."
      button={
        <Link href="https://wa.me/message/NETE4AVO4WGLE1">
          <a>
            <Button>WhatsApp</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
