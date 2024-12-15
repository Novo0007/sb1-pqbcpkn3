import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export default function RemoveBg() {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = async () => {
    // Implement API call to remove background
    // For demo purposes, we'll just show a placeholder
    setProcessedImage(image);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Remove Image Background</h1>
        <p className="mt-2 text-gray-600">Upload an image and we'll remove the background instantly</p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className="h-12 w-12 text-gray-400" />
          <span className="mt-2 text-sm text-gray-500">Click to upload an image</span>
        </label>
      </div>

      {image && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Original</h3>
              <img src={image} alt="Original" className="rounded-lg" />
            </div>
            {processedImage && (
              <div>
                <h3 className="text-lg font-medium mb-2">Processed</h3>
                <img src={processedImage} alt="Processed" className="rounded-lg" />
              </div>
            )}
          </div>
          <button
            onClick={removeBackground}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Remove Background
          </button>
        </div>
      )}
    </div>
  );
}