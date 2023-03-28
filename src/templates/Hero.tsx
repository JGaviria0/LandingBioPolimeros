import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.ayudabiopolimeros.com.co/auth">
            <a>Enviar formulario</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Asesoría médica y legal\n'}
            <span className="text-red-900">Víctimas de Biopolímeros</span>
          </>
        }
        description="Te ofrecemos asistencia si fuiste víctima por aplicación de hialucorp o metacorp."
        button={
          <Link href="https://www.ayudabiopolimeros.com.co/auth">
            <a>
              <Button xl>Ingresa</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
