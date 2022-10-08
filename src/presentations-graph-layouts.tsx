import styled from 'styled-components';
import { DiagramContextProvider } from './components/diagram-context';
import { Actions } from './components/actions';
import { Diagram } from './components/diagram';
import { Layout } from './components/layout';
import { Generators } from './components/generators';

type Props = {
  availableLayouts: string[];
  className?: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const PresentationsGraphLayouts = ({
  availableLayouts,
  className = '',
}: Props) => (
  <DiagramContextProvider>
    <StyledContainer className={className}>
      <Actions />
      <Generators />
      <Diagram />
      <Layout visibleLayouts={availableLayouts} />
    </StyledContainer>
  </DiagramContextProvider>
);

export default PresentationsGraphLayouts;
