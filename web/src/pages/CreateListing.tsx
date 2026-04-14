import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import styles from "@styles/CreateListing.module.css";

const CreateListing: Component = () => {
  // Navigator
  const navigate = useNavigate();

  // Form data
  const [color, setColor] = createSignal("Verde Alpi");
  const [slabs, setSlabs] = createSignal("10");
  const [width, setWidth] = createSignal("120");
  const [height, setHeight] = createSignal("90");
  const [notes, setNotes] = createSignal("Additional technical notes");
  // TODO: UPDATE PLACEHOLDER IMAGE WITH REAL UPLOAD
  const [uploadedImage, setUploadedImage] = createSignal<string | null>("https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400&auto=format&fit=crop");

  // Form submit action
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Creating a listing with:", {
      color: color(),
      slabs: slabs(),
      width: width(),
      height: height(),
      notes: notes()
    });

    // TODO: PERFORM API CALL
    
    navigate("/");
  };

  // Form cancel action
  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <div class={styles.pageWrapper}>
      <main class={styles.contentContainer}>
        <h1 class={styles.pageTitle}>Create new listing</h1>

        <form class={styles.formGrid} onSubmit={handleSubmit}>
          
          {/* Color and slabs number */}
          <div class={styles.formGroup}>
            <label class={styles.label}>Color</label>
            <input 
              type="text" 
              class={styles.input} 
              value={color()}
              onInput={(e) => setColor(e.currentTarget.value)}
            />
          </div>

          <div class={styles.formGroup}>
            <label class={styles.label}>Available slabs</label>
            <input 
              type="number" 
              class={styles.input} 
              value={slabs()}
              onInput={(e) => setSlabs(e.currentTarget.value)}
            />
          </div>

          {/* Images */}
          <div class={styles.fullWidthGroup}>
            <label class={styles.label}>Image</label>
            <div class={styles.imageSection}>
              <div class={styles.imagePreviewBox}>
                <span class="text-sm mb-1">Default image</span>
                <img src={uploadedImage()!} alt="Preview" class={styles.imagePlaceholder} />
              </div>
              <div class={styles.uploadBox}>
                <span class="text-sm">Upload an image</span>
                
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div class={styles.sizeGroup}>
            <label class={styles.label}>Size (Width x Height, cm)</label>
            <div class={styles.sizeInputs}>
              <input 
                type="number" 
                placeholder="Width"
                class={styles.input} 
                value={width()}
                onInput={(e) => setWidth(e.currentTarget.value)}
              />
              <input 
                type="number" 
                placeholder="Height"
                class={styles.input} 
                value={height()}
                onInput={(e) => setHeight(e.currentTarget.value)}
              />
            </div>
          </div>

          {/* Notes */}
          <div class={styles.fullWidthGroup}>
            <label class={styles.label}>Notes</label>
            <input 
              type="text" 
              class={styles.input} 
              value={notes()}
              onInput={(e) => setNotes(e.currentTarget.value)}
            />
          </div>

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
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div class={styles.actions}>
            <button type="submit" class={styles.btnPrimary}>Create listing</button>
            <button type="button" onClick={handleCancel} class={styles.btnSecondary}>Cancel</button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default CreateListing;
