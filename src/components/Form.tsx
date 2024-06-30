import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";

// const {
//   VITE_CLOUDINAR_CLOUD_NAME: CLOUD_CLOUD_NAME,
//   VITE_CLOUDINARY_UPLOAD_PRESET: CLOUDINARY_UPLOAD_PRESET,
// } = import.meta.env;

export default function ImageUpload() {
  const [imageUploading, setImageUploading] = useState(false);

  const dropZoneRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);

  const { toast } = useToast();

  useEffect(() => {
    const dropzone = dropZoneRef.current;
    const input = inputRef.current;
    const preview = previewImgRef.current;
    if (!dropzone || !input || !preview) return;

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("border-indigo-600");
    });

    dropzone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
      const file = e.dataTransfer?.files[0];
      if (file) {
        displayPreview(file);
      }
    });

    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        displayPreview(file);
      }
    });

    function displayPreview(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        if (preview && typeof reader.result === "string") {
          preview.src = reader.result;
          preview.classList.remove("hidden");
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const uploadImage = useCallback(() => {
    toast({
      title: "Image uploaded",
      description: "Your image has been uploaded successfully",
    });
    setImageUploading(true);
    setTimeout(() => {
      setImageUploading(false);
    }, 2000);
  }, [toast]);
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div
        className={`w-[500px] rounded-xl overflow-hidden relative border-2 border-gray-300 ${
          imageUploading ? "border-none" : "border-dashed"
        } rounded-lg p-6 cursor-pointer`}
        ref={dropZoneRef}
      >
        <div
          className={`absolute inset-0 w-full h-full z-[100] cursor-wait bg-[#00000038] ${
            imageUploading ? "block" : "hidden"
          }`}
        />
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
          ref={inputRef}
          title="Select or drag and drop a file"
        />
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
          />

          <div className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative">
              <span>Drag and drop</span>
              <span className="text-indigo-600"> or browse</span>
              <span>to upload</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        <img
          src=""
          className="mt-4 mx-auto max-h-40 hidden"
          ref={previewImgRef}
          title="Preview"
        />
      </div>
      <button
        className="px-5 py-3 w-40 h-14 bg-black text-white rounded-xl"
        onClick={uploadImage}
      >
        {imageUploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
