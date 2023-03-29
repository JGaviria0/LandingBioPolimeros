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
        <Link href="https://wa.me/573105293217?text=Hola,%20quiero%20saber%20más%20información">
          <a>
            <Button>Contáctanos.</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
