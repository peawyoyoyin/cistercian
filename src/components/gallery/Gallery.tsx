import { Title } from "@solidjs/meta";
import { Component, Index } from "solid-js";
import { GalleryItem } from "./GalleryItem";

export const Gallery: Component = () => {
  return (
    <div class="flex flex-wrap container mx-auto pt-10">
      <Title>Cistercian Glyphs</Title>
      <Index each={Array(500).fill(0).map((_, i) => i)}>
        {(item) => (
          <GalleryItem num={item() + 1} />
        )}
      </Index>
    </div>
  )
}
