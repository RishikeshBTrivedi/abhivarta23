import React from 'react';
import abhivartaLoading from './load.gif';//black background
import LogoAbhivarta from './Logo.gif'//transparent background

export default function Loader() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-black">
        <img src={LogoAbhivarta} height={480} width={897} alt="loading image" />
      </div>
    </div>
  );
}