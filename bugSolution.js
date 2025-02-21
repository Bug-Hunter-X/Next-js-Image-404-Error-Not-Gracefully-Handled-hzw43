```javascript
// pages/about.js
import React from 'react';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Img src="/nonexistent-image.jpg" alt="About image" errorFallback={<p>Image not found</p>} />
    </div>
  );
}

function Img({src, alt, errorFallback}) {
  const [error, setError] = React.useState(false);

  const onLoad = () => setError(false);
  const onError = () => setError(true);

  return (
    <>
    {error ? errorFallback : <img src={src} alt={alt} onLoad={onLoad} onError={onError}/>}
    </> 
  );
}
export default About;
```