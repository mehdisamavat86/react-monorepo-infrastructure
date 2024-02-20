import { type MouseEventHandler, useRef } from 'react';
import { ContactUs } from './components/contact-us';
import { PlanList } from './components/plan-list';
import { PricingHeader } from './components/pricing-header';
import { ClientComments } from './features/client-comments';
import { ComparisonPlan } from './features/comparison-plan';
import * as Styled from './styles';
import { FrequentlyQuestions } from './features/frequently-questions';

export function PriceAndPlanView() {
  const comparisonRef = useRef<any>();

  const handleScrollToComparison: MouseEventHandler<HTMLDivElement> = (e) => {
    if (
      comparisonRef &&
      comparisonRef.current &&
      (e.target as any).getAttribute('rel')
    ) {
      comparisonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Styled.Wrapper onClick={handleScrollToComparison}>
      <PricingHeader />
      <PlanList />
      <ContactUs />
      <ComparisonPlan ref={comparisonRef} />
      <ClientComments />
      <FrequentlyQuestions />
    </Styled.Wrapper>
  );
}
