import {
  VerticalFeatureRow,
  VerticalFeatureRow2,
} from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section
      title="Descubre cómo podemos ayudarte."
      description="Tenemos un equipo de profesionales especializado para brindarte el servicio que necesites."
    >
      <VerticalFeatureRow
        title="Asesoramiento jurídico."
        description="Evaluamos tu caso para determinar si eres sujeto de indeminización."
        image="/assets/images/legal.png"
        imageAlt="Médicos"
      />
      <VerticalFeatureRow
        title="Cirugía estética."
        description="Valoración, procedimientos quirúrgicos de extracción y seguimiento."
        image="/assets/images/medico.png"
        imageAlt="Abogados"
        reverse
      />
    </Section>
    <Section
      title="Acción de grupo."
      description="Creemos que se ha originado perjurio o daño individual a miles de personas por la misma causa."
    >
      <VerticalFeatureRow2
        title="Responsabilidad."
        description="Profesionales y entidades públicas cometieron un delito que afectó la vida de muchos y aún no han asumido la culpa. Cualquiera que atente contra el bienestar de una persona debe hacerse cargo de sus acciones."
        title2="Reparación."
        description2="Ruina profesional y económica, problemas de salud e incluso la muerte: un precio muy alto que pagaron personas inocentes. Deben ser compensados y buscaremos que reconozcan el daño que les fue causado."
      />
    </Section>
  </>
);

export { VerticalFeatures };
