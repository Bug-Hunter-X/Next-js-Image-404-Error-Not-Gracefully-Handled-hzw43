# Next.js Image 404 Error Handling

This repository demonstrates a common issue in Next.js applications where an image not found (404) error is not handled gracefully.  The application crashes when attempting to load an image from a non-existent path.

## Bug Description:
The provided `pages/about.js` attempts to load an image from `/nonexistent-image.jpg`. Since this image does not exist, Next.js throws a runtime error, interrupting the user experience.

## Solution:
The solution involves implementing error handling to gracefully manage the 404 scenario.  The updated code includes an error boundary, preventing the app from crashing and providing a fallback for a missing image.

## How to Reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.  You will see the error.

## How to Fix:
Refer to the `bugSolution.js` file for the corrected code.  The key change is adding an `ErrorBoundary` component to handle errors within the `About` page.