import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import styles from "@styles/CreateListing.module.css";
import listingService from "@/lib/services/listing";
import { CreateListingRequest } from "@/lib/classes/Listing";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const CreateListing: Component = () => {
  const navigate = useNavigate();

  const [type, setType] = createSignal("");
  const [slabs, setSlabs] = createSignal(1);
  const [price, setPrice] = createSignal("€0");
  const [width, setWidth] = createSignal(0);
  const [height, setHeight] = createSignal(0);
  const [thick, setThick] = createSignal(0);
  const [notes, setNotes] = createSignal("");
  // TODO: UPDATE PLACEHOLDER IMAGE WITH REAL UPLOAD
  const [uploadedImage, setUploadedImage] = createSignal<string | undefined>(undefined);

  // Form submit action
  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const req: CreateListingRequest = {
      location: "Verona, Italy",
      type: type(),
      slabs: slabs(),
      price: price(),
      size: {
        width: width(),
        height: height(),
        thick: thick(),
      },
      notes: notes(),
      image: uploadedImage()
    };

    const res = await listingService.createListing(req);

    navigate("/profile/listings-history");
  };

  // Form cancel action
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div class="min-h-screen bg-[#e5e5e5] flex flex-col px-8 py-8 mx-48">
      <h1 class="text-2xl font-bold mb-10">Create new listing</h1>

      <form class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" onSubmit={handleSubmit}>

        <Input type="text" label="Type" value={type()}
          onInput={(e) => setType(e.currentTarget.value)} />

        <Input type="number" label="Available slabs" value={slabs()}
          onInput={(e) => setSlabs(parseInt(e.currentTarget.value) || 0)} />

        <div class={styles.fullWidthGroup}>
          <label class={styles.label}>Image</label>
          <div class={styles.imageSection}>
            <div class={styles.imagePreviewBox}>
              <span class="text-sm mb-1">Default image</span>
              <img src={uploadedImage()!} alt="Preview" class={styles.imagePlaceholder} />
            </div>
            <div class={styles.uploadBox}>
              <span class="text-sm">Upload an image</span>

              <svg class="w-10 h-10" fill="none" stroke="currentType" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>

        <Input type="number" label="Width (cm)" value={width()}
          onInput={(e) => setWidth(parseInt(e.currentTarget.value) || 0)} />

        <Input type="number" label="Height (cm)" value={height()}
          onInput={(e) => setHeight(parseInt(e.currentTarget.value) || 0)} />

        <Input type="number" label="Thickness (cm)" value={thick()}
          onInput={(e) => setThick(parseInt(e.currentTarget.value) || 0)} />

        <Input type="text" label="Additional notes (optional)" value={notes()}
          onInput={(e) => setNotes(e.currentTarget.value)} />

        {/* Documents */}
        <div class={styles.fullWidthGroup}>
          <label class={styles.label}>Technical documents</label>
          <div class={styles.docsSection}>
            <div class={styles.docItem}>
              <div class={styles.pdfIcon}>PDF</div>
              <span class={styles.docName}>Marble.pdf</span>
            </div>
            <div class={styles.docItem}>
              <div class={styles.pdfIcon}>PDF</div>
              <span class={styles.docName}>Marble.pdf</span>
            </div>

            <div class="flex flex-col items-center gap-2 ml-4 cursor-pointer hover:text-[#1e3a8a]">
              <span class="text-sm">Upload a document</span>
              <svg class="w-6 h-6" fill="none" stroke="currentType" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-span-1 md:col-span-2 flex justify-center gap-12 mt-12 mx-32">
          <Button variant="secondary" class="flex-1" type="submit">Create listing</Button>
          <Button variant="primary" class="flex-1" onClick={handleCancel}>Cancel</Button>
        </div>

      </form>
    </div>
  );
};

export default CreateListing;
