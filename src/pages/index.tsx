import React from 'react';
import Textarrow from 'components/atoms/textarrow';
import Section from 'components/organisms/section';
import TopMainvisual from 'components/organisms/top-mainvisual';

export default function TopPage() {
  return (
    <div>
      <TopMainvisual />
      <Section>
        <Textarrow.Link href="https://yadex205.info" external>MORE</Textarrow.Link>
      </Section>
    </div>
  );
}
