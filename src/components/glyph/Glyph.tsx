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

  return QH - ((parsed - 50) * 0.2);
}

interface QuadrantProps {
  digit: number;

  startX: number;
  endX: number;
  startY: number;
  endY: number;

  strokeWidth: string;
}
const Quadrant: Component<QuadrantProps> = (props) => {
  const cistercianSegments = createMemo(() => cistercianSegment(props.digit));

  return (
    <>
      <Show when={cistercianSegments()[0]}>
        <line 
          x1={props.startX} y1={props.endY} x2={props.endX} y2={props.endY}
          class="stroke-slate-400" stroke-linecap="round"
          stroke-width={props.strokeWidth}
        />
      </Show>

      <Show when={cistercianSegments()[1]}>
        <line 
          x1={props.startX} y1={props.startY} x2={props.endX} y2={props.startY}
          class="stroke-slate-400" stroke-linecap="round"
          stroke-width={props.strokeWidth}
        />
      </Show>

      <Show when={cistercianSegments()[2]}>
        <line 
          x1={props.endX} y1={props.endY} x2={props.endX} y2={props.startY}
          class="stroke-slate-400" stroke-linecap="round"
          stroke-width={props.strokeWidth}
        />
      </Show>

      <Show when={cistercianSegments()[3]}>
        <line 
          x1={props.startX} y1={props.endY} x2={props.endX} y2={props.startY}
          class="stroke-slate-400" stroke-linecap="round"
          stroke-width={props.strokeWidth}
        />
      </Show>

      <Show when={cistercianSegments()[4]}>
        <line 
          x1={props.startX} y1={props.startY} x2={props.endX} y2={props.endY}
          class="stroke-slate-400" stroke-linecap="round"
          stroke-width={props.strokeWidth}
        />
      </Show>
    </>
  )
}


interface GlyphProps {
  num: number;
}

export const Glyph: Component<GlyphProps> = (props) => {
  const digits = createMemo(() => splitDigits(props.num));

  const [state, ] = store;

  const strokeWidth = () => calculateStrokeWidth(state.settings.strokeWidth);

  const adjustedQH = () => adjustQH(state.settings.glyphSpacing);
  const invertedQH = () => H - adjustQH(state.settings.glyphSpacing);

  return (
    <svg
      viewBox={`${-borderOffset} ${-borderOffset} ${W + borderOffset * 2} ${H + borderOffset * 2}`}
    >
      <line
        x1={W / 2} y1={0} x2={W / 2} y2={H}
        class="stroke-slate-400" stroke-linecap="round"
        stroke-width={strokeWidth()}
      />
      <Quadrant digit={digits()[3]} startX={W/2} endX={W} startY={adjustedQH()} endY={0} strokeWidth={strokeWidth()} />
      <Quadrant digit={digits()[2]} startX={W/2} endX={0} startY={adjustedQH()} endY={0} strokeWidth={strokeWidth()} />
      <Quadrant digit={digits()[1]} startX={W/2} endX={W} startY={invertedQH()} endY={H} strokeWidth={strokeWidth()} />
      <Quadrant digit={digits()[0]} startX={W/2} endX={0} startY={invertedQH()} endY={H} strokeWidth={strokeWidth()} />
    </svg>
  );
}
