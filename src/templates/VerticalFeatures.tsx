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
        image="/assets/images/legal.jpg"
        imageAlt="Abogados"
      />
      <VerticalFeatureRow
        title="Cirugía plástica, reconstructiva y estética."
        description="Valoración del caso. Procedimientos quirúrgicos de extracción de biopolímeros."
        image="/assets/images/medico.jpg"
        imageAlt="Médicos"
        reverse
      />
    </Section>
    <Section
      title="Acción de grupo."
      description="Con la aplicación de biopolímeros se ha generado un perjuicio o daño a miles de pacientes en Colombia y alrededor del mundo, lo cual se ha causado sufrimiento físico y psicológico en ellos, y han tenido que inucrrir en cuantiosos gastos con el fin de recuperar su salud, sin que hayan sido indemnizados por este hecho."
    >
      <VerticalFeatureRow2
        title="Responsabilidad."
        description="En Colombia quien cause un daño legalmente está obligado a reparar y resarcirlo, por lo tanto las víctimas de los biopolímeros deben ser indemnizados."
        title2="Reparación."
        description2="Reparación pecuniaria como consecuencia de los problemas de salud ocasionados con la aplicación de biopolímeros."
      />
    </Section>
  </>
);

export { VerticalFeatures };
