import React from "react";


export default function Map({lng = 12, lat = 12}) {


    const delta = 0.01;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  return (
        <>
        <div>
            <iframe 
                src = {mapUrl}
                 width="460px"
                 height="580px"
        />
        </div>

        </>
  );
}