import { Route, Router, Routes } from 'solid-app-router';
import { Component, createSignal, Show } from 'solid-js';
import { Gallery } from './components/gallery/Gallery';
import { Settings } from './components/settings/Settings';
import { Single } from './components/single/Single';

const App: Component = () => {
  const [settingsOpen, setSettingsOpen] = createSignal(true);

  return (
    <div>
      <div class="py-2 px-3 bg-neutral-200 flex justify-between">
        <span>
          Cysterian Glyphs
        </span>

        <button onClick={() => setSettingsOpen(!settingsOpen())}>
          Toggle Settings
        </button>
      </div>
      <div class="flex flex-wrap-reverse">
        <Routes>
          <Route path="/:num" component={Single} />
          <Route path="/" component={Gallery} />
        </Routes>
        <Show
          when={settingsOpen()}
        >
          <Settings />
        </Show>
      </div>
    </div>
  );
};

export default App;
