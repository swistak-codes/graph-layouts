import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DiagramContext } from './diagram-context';
import { createDiagram } from '../diagram/create-diagram';

const DiagramWrapper = styled.div`
  width: 100%;
  max-width: 622px;
  height: 400px;
  display: flex;
  position: relative;
`;

const DiagramContainer = styled.div`
  flex: 1;

  canvas {
    outline: none;
  }
`;

const Loader = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000088;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Diagram = () => {
  const { setDiagram, isLoading } = useContext(DiagramContext);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const diagram = createDiagram(divRef.current!);

    if (process.env['NODE_ENV'] !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).diagram = diagram;
    }

    setDiagram(diagram);
  }, [setDiagram]);

  return (
    <DiagramWrapper className="diagram">
      {isLoading && (
        <Loader>
          <i className="las la-spinner la-pulse la-8x"></i>
        </Loader>
      )}
      <DiagramContainer ref={divRef} />
    </DiagramWrapper>
  );
};
