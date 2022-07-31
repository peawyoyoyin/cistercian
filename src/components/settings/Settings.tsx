import { Component } from "solid-js";
import { store } from "../../store";

export const Settings: Component = () => {
  const [state, setState] = store;

  const glyphSize = () => state.settings.glyphSize;
  const glyphSpacing = () => state.settings.glyphSpacing;
  const strokeWidth = () => state.settings.strokeWidth;
  const strokeColor = () => state.settings.strokeColor;

  return (
    <div class="px-6 py-4 mt-2 right-0 sticky top-10 w-full xl:w-2/12 lg:self-end bg-white">
      <h6 class="text-sm uppercase font-mono mb-2">
        Settings
      </h6>

      <div>
        <h6 class="text-xs uppercase font-mono mb-2">
          Gallery
        </h6>

        <div class="flex flex-col mb-2">
          <label for="glyph-size">Glyph size</label>
          <input
            id="glyph-size"
            type="range"
            onInput={(e) => setState('settings', 'glyphSize', e.currentTarget.value)}
            value={glyphSize()}
          />
        </div>

        <hr class="my-4"/>

        <h6 class="text-xs uppercase font-mono mb-2">
          Glyphs
        </h6>

        <div class="flex flex-col mb-2">
          <label for="glyph-spacing">Glyph spacing</label>
          <input
            id="glyph-spacing"
            type="range"
            onInput={(e) => setState('settings', 'glyphSpacing', e.currentTarget.value)}
            value={glyphSpacing()}
          />
        </div>

        <div class="flex flex-col">
          <label for="stroke-width">Stroke width</label>
          <input
            id="stroke-width"
            type="range"
            onInput={(e) => setState('settings', 'strokeWidth', e.currentTarget.value)}
            value={strokeWidth()}
          />
        </div>

        <div class="flex flex-col">
          <label for="stroke-color">Stroke color</label>
          <input
            id="stroke-color"
            type="color"
            onInput={(e) => setState('settings', 'strokeColor', e.currentTarget.value)}
            value={strokeColor()}
          />
        </div>
      </div>
    </div>
  );
}
