const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }

  let nearestLocation = locations[0];
  let minDistance = getDistance(point, locations[0][1]);

  for (const location of locations) {
    const [, locationPoint] = location;
    const distance = getDistance(point, locationPoint);

    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = location;
    }
  }

  return nearestLocation;
};
// END
