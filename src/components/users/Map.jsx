import React from "react";
import * as styles from "./map.module.css";

export default function Map({ lng = 12, lat = 12 }) {
  const delta = 0.01;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className={styles.mapWrapper}>
      <iframe
        src={mapUrl}
        className={styles.iframe}
        title="User location map"
      />
    </div>
  );
}
