import { Title, Link as MetaLink } from "@solidjs/meta";
import { Link, Navigate, useNavigate, useParams } from "solid-app-router";
import { Component, Match, Switch } from "solid-js";
import { Glyph } from "../glyph/Glyph";

interface SingleViewProps {
  num: number;
}

const SingleView: Component<SingleViewProps> = (props) => {
  let ref: SVGSVGElement;

  const navigate = useNavigate();

  const onClickPrevious = () => {
    navigate(`/${props.num - 1}`, { replace: true });
  }

  const onClickNext = () => {
    navigate(`/${props.num + 1}`, { replace: true });
  }

  const onNumberChange = (e) => {
    navigate(`/${e.target.valueAsNumber}`, { replace: true });
  }

  const onExportSvg = () => {
    const canvas = document.createElement('canvas');
    const cloned = ref.cloneNode(true);

    const data = new XMLSerializer().serializeToString(cloned);
    const blob = new Blob([data], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    canvas.width = ref.getBoundingClientRect().width;
    canvas.height = ref.getBoundingClientRect().height;

    const a = document.createElement('a');
    a.href = url
    a.download = `cisterian-${props.num}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div class="container max-w-screen-lg mx-auto pt-10">
      <Title>Cistercian Glyph {props.num}</Title>
      <MetaLink rel="icon"></MetaLink>

      <div class="py-4 flex justify-center lg:w-1/2 mx-auto">
        <Link href="/">
          back to gallery
        </Link>
      </div>

      <div class="max-w-2xl mx-auto my-4">
        <Glyph ref={ref} num={props.num} />
      </div>

      <div class="flex justify-between lg:w-1/2 mx-auto">
        <button
          class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors"
          onClick={onClickPrevious}
          disabled={props.num <= 1}>
          -1
        </button>
        <input type="number" class="text-center text-4xl font-sans" min={1} max={10000} value={props.num} onChange={onNumberChange} />
        <button
          class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors"
          onClick={onClickNext}
          disabled={props.num >= 9999}>
          +1
        </button>
      </div>

      <div class="mt-4 flex justify-center">
        <button
          class="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 p-3 rounded-md"
          onClick={onExportSvg}
        >
          Export as SVG
        </button>
      </div>
    </div>
  );
}

export const Single: Component = () => {
  const params = useParams();

  const num = () => +params.num;

  return (
    <Switch>
      <Match when={num() < 1}>
        <Navigate href="/1" />
      </Match>
      <Match when={num() > 9999}>
        <Navigate href="/9999" />
      </Match>
      <Match when={num() <= 9999 && num() >= 1}>
        <SingleView num={num()} />
      </Match>
    </Switch>

  );
}
