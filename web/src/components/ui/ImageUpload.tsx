import { Component, createSignal, For } from "solid-js";

export const ImageUpload: Component = () => {
  const [previews, setPreviews] = createSignal<string[]>([]);

  const handleFileChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;

    const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  return (
    <div class="space-y-4">
      <label class="block text-sm font-medium text-gray-700">Listing Photos</label>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <For each={previews()}>
          {(url) => (
            <div class="relative aspect-square rounded-lg overflow-hidden border">
              <img src={url} class="w-full h-full object-cover" />
            </div>
          )}
        </For>
        <label class="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <span class="text-2xl text-gray-400">+</span>
          <span class="text-xs text-gray-400">Add Photo</span>
          <input type="file" class="hidden" multiple accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
};
