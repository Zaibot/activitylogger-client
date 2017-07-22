import React from 'react';

export default ({ duration }: { duration: number }) => (
  <span>{
    duration < 60000 ? (`${(duration / 1000).toFixed(1)}s`)
      : duration < 60 * 60000 ? (`${(duration / 60000).toFixed(1)}m`)
        : duration < 1440 * 60000 ? (`${(duration / (60 * 60000)).toFixed(1)}h`)
          : (`${(duration / (1440 * 60000)).toFixed(1)}d`)
  }</span>
);
