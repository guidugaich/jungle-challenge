import React from 'react';

import './style.css';

// https://dev.to/stackfindover/how-to-create-a-dot-loading-animation-hc7
export default function index() {
  return (
    <div class="loader-outer">
      <div class="loader">
        <span class="dot dot-1"></span>
        <span class="dot dot-2"></span>
        <span class="dot dot-3"></span>
    </div>
  </div>
  )
}
