import { GridPattern } from './patterns/GridPattern';
import { FloatingShapes } from './patterns/FloatingShapes';
import { DynamicCircles } from './patterns/DynamicCircles';

export function GeometricPatterns() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GridPattern />
      <FloatingShapes />
      <DynamicCircles />
    </div>
  );
}