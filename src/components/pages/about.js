import React from 'react';
import profilePicture from '../../../static/assets/images/bio/headshot.jpg';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: 'url(' + profilePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="right-column">
        this is my about section and i need to write
        a bio for this. fdfdsf fdsfds  asawew gfrdgd g
        sf ewfew vgfdg fdg df sfsdsfewrg gfdg fdg trgre
        fewfewrtewrew fgregrgr gregre fw ew retg tgr e
        fewfew fesfsfre tregtregtre fedfrefre fedferfre
      </div>

    </div>
  );
}
