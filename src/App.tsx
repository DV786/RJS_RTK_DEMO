import { useState } from 'react'
import { Box, Button, Link, Typography } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Typography variant='h1'>Vite + React + MUI</Typography>
      <Box className="card">
        <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography variant='body1'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography variant='body1' className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  )
}

export default App
