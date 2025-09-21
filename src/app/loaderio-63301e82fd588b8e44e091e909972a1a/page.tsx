import React from 'react'

const page = () => {
  const handleVerify = () => {
    alert('Verification attempted!');
  };

  return (
    <div>
      <h1>Loader.io Verification</h1>
      <p>Please verify your site by adding the following meta tag to your site&apos;s <code>&lt;head&gt;</code> section:</p>
      <pre>
        <code>
          &lt;meta name=&quot;loaderio&quot; content=&quot;63301e82fd588b8e44e091e909972a1a&quot; /&gt;
        </code>
      </pre>
      <p>Once you&#39;ve added the meta tag, click the button below to verify:</p>
      <button onClick={handleVerify}>Verify</button>
    </div>
  )
}

export default page
