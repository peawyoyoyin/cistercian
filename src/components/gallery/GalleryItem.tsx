import { useNavigate } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import { store } from "../../store";
import { Glyph } from "../glyph/Glyph";

interface GalleryItemProps {
  num: number;
}

export const GalleryItem: Component<GalleryItemProps> = (props) => {
  const { num } = props;

  const [hovered, setHovered] = createSignal(false);

  const navigate = useNavigate();

  const [state] = store;

  const size = () => `${parseInt(state.settings.glyphSize) * 0.5 + 50}px`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/${num}`)}
      style={{ width: size(), height: size(), "margin-left": '12px', "margin-bottom": '12px' }}
      class="border-gray-200 ring-gray-200 border-2 border-opacity-0 hover:border-opacity-100 rounded-md cursor-pointer hover:ring-2 hover:-translate-y-1.5 transition-all relative"
    >
      <div class="p-4">
        <Glyph num={num} />
      </div>
      <span class={`text-xs absolute bottom-[5px] right-1/2 translate-x-1/2 transition-opacity ${hovered() ? "opacity-100" : "opacity-0"}`} >
        {num}
      </span>
    </div>
  )
}
