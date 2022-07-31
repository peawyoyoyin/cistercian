import { Component, createMemo, Show } from "solid-js";
import { store } from "../../store";

const W = 100;
const H = 100;

const borderOffset = 2;

const QH = 40;

const cistercianSegment = (digit: number): [boolean, boolean, boolean, boolean, boolean] => {
  switch (digit) {
    case 1:
      return [true, false, false, false, false];
    case 2:
      return [false, true, false, false, false];
    case 3:
      return [false, false, false, true, false];
    case 4:
      return [false, false, false, false, true];
    case 5:
      return [true, false, false, false, true];
    case 6:
      return [false, false, true, false, false];
    case 7:
      return [true, false, true, false, false];
    case 8:
      return [false, true, true, false, false];
    case 9:
      return [true, true, true, false, false];
    case 0:
    default:
      return [false, false, false, false, false];
  }
}

const splitDigits = (num: number): [number, number, number, number] => {
  if (num < 1 || num > 9999) {
    return [0, 0, 0, 0];
  }

  return num.toString().padStart(4, '0').split('').map((n) => parseInt(n, 10)) as [number, number, number, number];
}

const calculateStrokeWidth = (sliderValue: string) => {
  let parsed = parseInt(sliderValue, 10);

  if (Number.isNaN(parsed)) {
    parsed = 0;
  }

  return `${1 + parsed * 0.02}px`;
}

const adjustQH = (sliderValue: string) => {
  let parsed = parseInt(sliderValue, 10);

  if (Number.isNaN(parsed)) {
    parsed = 0;
  }

  return QH - ((parsed - 40) * 0.2);
}

interface QuadrantProps {
  digit: number;

  startX: number;
  endX: number;
  startY: number;
  endY: number;
}

const dashOn = '100% 0%';
const dashOff = '0% 100%'
const Quadrant: Component<QuadrantProps> = (props) => {
  const cistercianSegments = createMemo(() => cistercianSegment(props.digit));

  return (
    <>
      <line
        x1={props.startX} y1={props.endY} x2={props.endX} y2={props.endY}
        stroke-dasharray={cistercianSegments()[0] ? dashOn : dashOff}
      />

      <line
        x1={props.startX} y1={props.startY} x2={props.endX} y2={props.startY}
        stroke-dasharray={cistercianSegments()[1] ? dashOn : dashOff}
      />

      <line
        x1={props.endX} y1={props.endY} x2={props.endX} y2={props.startY}
        transform={cistercianSegments()[2] ? `translate(0)` : `translate(${-1 * (props.endX - props.startX)})`}
      />

      <line
        x1={props.startX} y1={props.endY} x2={props.endX} y2={props.startY}
        stroke-dasharray={cistercianSegments()[3] ? dashOn : dashOff}
      />

      <line
        x1={props.startX} y1={props.startY} x2={props.endX} y2={props.endY}
        stroke-dasharray={cistercianSegments()[4] ? dashOn : dashOff}
      />
    </>
  )
}


interface GlyphProps {
  num: number;
  ref?: SVGSVGElement | ((el: SVGSVGElement) => void);
}

export const Glyph: Component<GlyphProps> = (props) => {
  const digits = createMemo(() => splitDigits(props.num));

  const [state,] = store;

  const strokeWidth = () => calculateStrokeWidth(state.settings.strokeWidth);

  const adjustedQH = () => adjustQH(state.settings.glyphSpacing);
  const invertedQH = () => H - adjustQH(state.settings.glyphSpacing);

  return (
    <svg
      ref={props.ref}
      viewBox={`${-borderOffset} ${-borderOffset} ${W + borderOffset * 2} ${H + borderOffset * 2}`}
    >
      <style>
        {
`line {
  stroke-linecap: round;
  stroke-width: ${strokeWidth()};
  stroke: #94a3b8;
  transition: all 300ms;
}`
        }
      </style>
      <line x1={W / 2} y1={0} x2={W / 2} y2={H} />
      <Quadrant digit={digits()[3]} startX={W / 2} endX={W} startY={adjustedQH()} endY={0} />
      <Quadrant digit={digits()[2]} startX={W / 2} endX={0} startY={adjustedQH()} endY={0} />
      <Quadrant digit={digits()[1]} startX={W / 2} endX={W} startY={invertedQH()} endY={H} />
      <Quadrant digit={digits()[0]} startX={W / 2} endX={0} startY={invertedQH()} endY={H} />
    </svg>
  );
}
