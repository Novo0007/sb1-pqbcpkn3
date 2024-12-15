import React, { useState, useRef } from 'react';
import { Upload, Search } from 'lucide-react';

export default function VisualSearch() {
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

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

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setStartPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(
      startPos.x,
      startPos.y,
      Math.sqrt(
        Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2)
      ),
      0,
      2 * Math.PI
    );
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Visual Search</h1>
        <p className="mt-2 text-gray-600">
          Upload an image and draw circles to search for specific areas
        </p>
      </div>

      {!image ? (
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
            <span className="mt-2 text-sm text-gray-500">
              Click to upload an image
            </span>
          </label>
        </div>
      ) : (
        <div className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="w-full rounded-lg"
            style={{ display: 'none' }}
            onLoad={(e) => {
              if (canvasRef.current) {
                const canvas = canvasRef.current;
                canvas.width = e.currentTarget.width;
                canvas.height = e.currentTarget.height;
              }
            }}
          />
          <canvas
            ref={canvasRef}
            className="w-full rounded-lg border"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>Search Selected Area</span>
          </button>
        </div>
      )}
    </div>
  );
}