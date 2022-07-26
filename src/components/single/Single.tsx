import { Link, Navigate, useNavigate, useParams } from "solid-app-router";
import { Component, Match, Switch } from "solid-js";
import { Glyph } from "../glyph/Glyph";

export const Single: Component = () => {
  const params = useParams();

  const navigate = useNavigate();

  const num = () => +params.num;

  const onClickPrevious = () => {
    navigate(`/${num() - 1}`, { replace: true });
  }

  const onClickNext = () => {
    navigate(`/${num() + 1}`, { replace: true });
  }

  const onNumberChange = (e) => {
    navigate(`/${e.target.valueAsNumber}`, { replace: true });
  }

  return (
    <Switch>
      <Match when={num() < 1}>
        <Navigate href="/1" />
      </Match>
      <Match when={num() > 9999}>
        <Navigate href="/9999" />
      </Match>
      <Match when={num() <= 9999 && num() >= 1}>
        <div class="container max-w-screen-lg mx-auto pt-10">
          <div class="py-4 flex justify-center lg:w-1/2 mx-auto">
            <Link href="/">
              back to gallery
            </Link>
          </div>

          <div class="max-w-2xl mx-auto my-4">
            <Glyph num={num()} />
          </div>

          <div class="flex justify-between lg:w-1/2 mx-auto">
            <button
              class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors"
              onClick={onClickPrevious}
              disabled={num() <= 1}>
              -1
            </button>
            <input type="number" class="text-center text-4xl font-sans" min={1} max={10000} value={params.num} onChange={onNumberChange} />
            <button
              class="disabled:text-gray-400 disabled:bg-transparent bg-slate-100 hover:bg-slate-300 active:bg-slate-200 px-2 rounded-md transition-colors"
              onClick={onClickNext}
              disabled={num() >= 9999}>
              +1
            </button>
          </div>
          {/* <div class="py-4 flex justify-center lg:w-1/2 mx-auto">
            <button class="mx-2 px-2 py-2 rounded-md bg-slate-100">export SVG</button>
            <button class="mx-2 px-2 py-2 rounded-md bg-slate-100">export PNG</button>
          </div> */}
        </div>
      </Match>
    </Switch>

  );
}
